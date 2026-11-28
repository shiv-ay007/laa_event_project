import Architect from "../models/architectModel.js";
import Engineer from "../models/engineerModel.js";
import Exhibitor from "../models/exhibitorModel.js";

export const getAllPayments = async (req, res) => {
  try {
    // Query Parameters
    const {
      search = "",
      category = "all",
      paymentStatus = "all",
      sortBy = "createdAt",
      sortOrder = "desc",
    } = req.query;

    const requestedPage = Math.max(
      1,
      parseInt(req.query.page, 10) || 1
    );

    const limit = Math.min(
      100,
      Math.max(1, parseInt(req.query.limit, 10) || 10)
    );

    // Validate parameters
    const allowedCategories = ["all", "architect", "engineer", "exhibitor"];
    const allowedPaymentStatuses = ["all", "pending", "verified", "rejected"];

    if (
      typeof search !== "string" ||
      search.length > 200 ||
      !allowedCategories.includes(category.toLowerCase()) ||
      !allowedPaymentStatuses.includes(paymentStatus.toLowerCase())
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid search or filter parameters",
      });
    }

    // Database-level Statistics (excluding free engineers)
    const [
      architectCount,
      engineerCount,
      exhibitorCount,
      verifiedArchitects,
      verifiedEngineers,
      verifiedExhibitors,
      pendingArchitects,
      pendingEngineers,
      pendingExhibitors,
      rejectedArchitects,
      rejectedEngineers,
      rejectedExhibitors,
    ] = await Promise.all([
      Architect.countDocuments(),
      Engineer.countDocuments({ category: "Other than LAA" }),
      Exhibitor.countDocuments(),
      Architect.countDocuments({ paymentStatus: "verified" }),
      Engineer.countDocuments({
        category: "Other than LAA",
        paymentStatus: "verified",
      }),
      Exhibitor.countDocuments({ paymentStatus: "verified" }),
      Architect.countDocuments({ paymentStatus: "pending" }),
      Engineer.countDocuments({
        category: "Other than LAA",
        paymentStatus: "pending",
      }),
      Exhibitor.countDocuments({ paymentStatus: "pending" }),
      Architect.countDocuments({ paymentStatus: "rejected" }),
      Engineer.countDocuments({
        category: "Other than LAA",
        paymentStatus: "rejected",
      }),
      Exhibitor.countDocuments({ paymentStatus: "rejected" }),
    ]);

    const categoryStats = {
      architects: architectCount,
      engineers: engineerCount,
      exhibitors: exhibitorCount,
    };

    const stats = {
      totalPayments: architectCount + engineerCount + exhibitorCount,
      verifiedPayments:
        verifiedArchitects + verifiedEngineers + verifiedExhibitors,
      pendingPayments:
        pendingArchitects + pendingEngineers + pendingExhibitors,
      rejectedPayments:
        rejectedArchitects + rejectedEngineers + rejectedExhibitors,
    };

    // Database-level Query Construction
    const matchConditions = [];

    // Category Filter
    if (category.toLowerCase() !== "all") {
      matchConditions.push({
        type: { $regex: new RegExp(`^${category.trim()}$`, "i") },
      });
    }

    // Payment Status Filter
    if (paymentStatus.toLowerCase() !== "all") {
      matchConditions.push({
        paymentStatus: paymentStatus.toLowerCase().trim(),
      });
    }

    // Search Filter
    if (search.trim()) {
      const searchText = search
        .trim()
        .replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

      matchConditions.push({
        $or: [
          { name: { $regex: searchText, $options: "i" } },
          { fullName: { $regex: searchText, $options: "i" } },
          { companyName: { $regex: searchText, $options: "i" } },
          { registrationId: { $regex: searchText, $options: "i" } },
          { txnId: { $regex: searchText, $options: "i" } },
          { email: { $regex: searchText, $options: "i" } },
          { phone: { $regex: searchText, $options: "i" } },
        ],
      });
    }

    const matchStage =
      matchConditions.length > 0
        ? { $match: { $and: matchConditions } }
        : { $match: {} };

    // Sorting
    const sortDirection = sortOrder.toLowerCase() === "asc" ? 1 : -1;
    const sortField = ["createdAt", "amount", "paymentDate"].includes(sortBy)
      ? sortBy
      : "createdAt";
    const sortStage = { $sort: { [sortField]: sortDirection, _id: -1 } };

    // Unified Aggregation Pipeline at MongoDB Level
    const pipeline = [
      // 1. Initial collection: Architects
      {
        $project: {
          _id: 1,
          registrationId: 1,
          name: "$fullName",
          fullName: "$fullName",
          companyName: { $ifNull: ["$firmName", ""] },
          email: 1,
          phone: 1,
          amount: 1,
          txnId: 1,
          paymentDate: 1,
          bankName: 1,
          paymentStatus: 1,
          status: 1,
          createdAt: 1,
          type: { $literal: "Architect" },
        },
      },

      // 2. Union with Paid Engineers only (exclude free engineer registrations)
      {
        $unionWith: {
          coll: Engineer.collection.name,
          pipeline: [
            {
              $match: {
                category: "Other than LAA",
              },
            },
            {
              $project: {
                _id: 1,
                registrationId: 1,
                name: "$fullName",
                fullName: "$fullName",
                companyName: { $ifNull: ["$firmName", ""] },
                email: 1,
                phone: 1,
                amount: 1,
                txnId: 1,
                paymentDate: 1,
                bankName: 1,
                paymentStatus: 1,
                status: 1,
                createdAt: 1,
                type: { $literal: "Engineer" },
              },
            },
          ],
        },
      },

      // 3. Union with Exhibitors
      {
        $unionWith: {
          coll: Exhibitor.collection.name,
          pipeline: [
            {
              $project: {
                _id: 1,
                registrationId: 1,
                name: "$companyName",
                fullName: "$contactPerson",
                companyName: "$companyName",
                email: 1,
                phone: 1,
                amount: 1,
                txnId: 1,
                paymentDate: 1,
                bankName: 1,
                paymentStatus: 1,
                status: 1,
                createdAt: 1,
                type: { $literal: "Exhibitor" },
              },
            },
          ],
        },
      },

      // 4. Filter at database level
      matchStage,

      // 5. Sort at database level
      sortStage,

      // 6. Database-level pagination and total count via $facet
      {
        $facet: {
          metadata: [{ $count: "total" }],
          data: [
            { $skip: (requestedPage - 1) * limit },
            { $limit: limit },
          ],
        },
      },
    ];

    const [facetResult] = await Architect.aggregate(pipeline);

    const totalRecords = facetResult?.metadata?.[0]?.total || 0;
    const totalPages = Math.max(1, Math.ceil(totalRecords / limit));
    const page = Math.min(requestedPage, totalPages);
    const paginatedPayments = facetResult?.data || [];

    // Success Response
    return res.status(200).json({
      success: true,
      message: "Payments fetched successfully",
      stats,
      categoryStats,

      pagination: {
        currentPage: page,
        limit,
        totalRecords,
        totalPages,
      },

      data: paginatedPayments,
    });
  } catch (error) {
    console.error("Get Payments Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch payments",
    });
  }
};
