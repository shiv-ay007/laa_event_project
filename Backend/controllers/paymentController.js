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
    } = req.query;

    const page = Math.max(
      1,
      parseInt(req.query.page, 10) || 1
    );

    const limit = Math.min(
      100,
      Math.max(1, parseInt(req.query.limit, 10) || 10)
    );

    // Required Fields
    const fields = `
      registrationId
      fullName
      companyName
      email
      phone
      amount
      txnId
      paymentDate
      bankName
      paymentStatus
      status
      createdAt
    `;

    // Fetch Payment Records
    const [architects, engineers, exhibitors] =
      await Promise.all([
        Architect.find()
          .select(fields)
          .lean(),

        Engineer.find({
          category: "Other than LAA",
        })
          .select(fields)
          .lean(),

        Exhibitor.find()
          .select(fields)
          .lean(),
      ]);

    // Format Architect Payments
    const architectPayments = architects.map((item) => ({
      ...item,
      name: item.fullName,
      type: "Architect",
    }));

    // Format Engineer Payments
    const engineerPayments = engineers.map((item) => ({
      ...item,
      name: item.fullName,
      type: "Engineer",
    }));

    // Format Exhibitor Payments
    const exhibitorPayments = exhibitors.map((item) => ({
      ...item,
      name: item.companyName,
      type: "Exhibitor",
    }));

    // Combine All Payments
    const allPayments = [
      ...architectPayments,
      ...engineerPayments,
      ...exhibitorPayments,
    ];

    // Payment Statistics
    const stats = {
      totalPayments: allPayments.length,

      verifiedPayments: allPayments.filter(
        (item) => item.paymentStatus === "verified"
      ).length,

      pendingPayments: allPayments.filter(
        (item) => item.paymentStatus === "pending"
      ).length,

      rejectedPayments: allPayments.filter(
        (item) => item.paymentStatus === "rejected"
      ).length,
    };

    // Category Statistics
    const categoryStats = {
      architects: architectPayments.length,
      engineers: engineerPayments.length,
      exhibitors: exhibitorPayments.length,
    };

    let filteredPayments = [...allPayments];

    // Search Filter
    if (search.trim()) {
      const searchValue = search.trim().toLowerCase();

      filteredPayments = filteredPayments.filter(
        (item) =>
          [
            item.name,
            item.registrationId,
            item.txnId,
            item.email,
            item.phone,
          ].some((value) =>
            String(value || "")
              .toLowerCase()
              .includes(searchValue)
          )
      );
    }

    // Category Filter
    if (category.toLowerCase() !== "all") {
      filteredPayments = filteredPayments.filter(
        (item) =>
          item.type.toLowerCase() === category.toLowerCase()
      );
    }

    // Payment Status Filter
    if (paymentStatus.toLowerCase() !== "all") {
      filteredPayments = filteredPayments.filter(
        (item) =>
          item.paymentStatus === paymentStatus.toLowerCase()
      );
    }

    // Latest Registrations First
    filteredPayments.sort(
      (a, b) =>
        new Date(b.createdAt) - new Date(a.createdAt)
    );

    // Pagination
    const totalRecords = filteredPayments.length;
    const totalPages = Math.ceil(totalRecords / limit);
    const skip = (page - 1) * limit;

    const paginatedPayments = filteredPayments.slice(
      skip,
      skip + limit
    );

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