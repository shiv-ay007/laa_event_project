import Architect from "../models/architectModel.js";
import Engineer from "../models/engineerModel.js";
import Exhibitor from "../models/exhibitorModel.js";

export const getDashboardStats = async (req, res) => {
  try {
    const [
      totalArchitects,
      totalEngineers,
      totalExhibitors,
      freeEngineers,
      paidEngineers,
      pendingArchitects,
      pendingEngineers,
      pendingExhibitors,
      approvedArchitects,
      approvedEngineers,
      approvedExhibitors,
      rejectedArchitects,
      rejectedEngineers,
      rejectedExhibitors,
      verifiedArchitects,
      verifiedEngineers,
      verifiedExhibitors,
    ] = await Promise.all([
      Architect.countDocuments(),
      Engineer.countDocuments(),
      Exhibitor.countDocuments(),
      Engineer.countDocuments({ category: "LAA Member" }),
      Engineer.countDocuments({ category: "Other than LAA" }),
      Architect.countDocuments({ status: "pending" }),
      Engineer.countDocuments({ status: "pending" }),
      Exhibitor.countDocuments({ status: "pending" }),
      Architect.countDocuments({ status: "approved" }),
      Engineer.countDocuments({ status: "approved" }),
      Exhibitor.countDocuments({ status: "approved" }),
      Architect.countDocuments({ status: "rejected" }),
      Engineer.countDocuments({ status: "rejected" }),
      Exhibitor.countDocuments({ status: "rejected" }),
      Architect.countDocuments({ paymentStatus: "verified" }),
      Engineer.countDocuments({ paymentStatus: "verified" }),
      Exhibitor.countDocuments({ paymentStatus: "verified" }),
    ]);

    const totalRegistrations =
      totalArchitects + totalEngineers + totalExhibitors;

    const pendingApplications =
      pendingArchitects + pendingEngineers + pendingExhibitors;

    const approvedApplications =
      approvedArchitects + approvedEngineers + approvedExhibitors;

    const rejectedApplications =
      rejectedArchitects + rejectedEngineers + rejectedExhibitors;

    const verifiedPayments =
      verifiedArchitects + verifiedEngineers + verifiedExhibitors;

    const chartData = [
      {
        name: "Architects",
        total: totalArchitects,
      },
      {
        name: "Engineers",
        total: totalEngineers,
      },
      {
        name: "Exhibitors",
        total: totalExhibitors,
      },
    ];

    res.status(200).json({
      success: true,
      message: "Dashboard data fetched successfully",
      data: {
        totalRegistrations,
        totalArchitects,
        totalEngineers,
        totalExhibitors,
        freeEngineers,
        paidEngineers,
        pendingApplications,
        approvedApplications,
        rejectedApplications,
        verifiedPayments,
        chartData,
      },
    });
  } catch (error) {
    console.log("Dashboard Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch dashboard data",
    });
  }
};

// Get Recent Registrations
export const getRecentRegistrations = async (req, res) => {
  try {
    const [architects, engineers, exhibitors] = await Promise.all([
      Architect.find()
        .select("registrationId fullName status paymentStatus createdAt")
        .sort({ createdAt: -1 })
        .limit(10)
        .lean(),

      Engineer.find()
        .select(
          "registrationId fullName category status paymentStatus createdAt"
        )
        .sort({ createdAt: -1 })
        .limit(10)
        .lean(),

      Exhibitor.find()
        .select("registrationId companyName status paymentStatus createdAt")
        .sort({ createdAt: -1 })
        .limit(10)
        .lean(),
    ]);

    // Format architect data
    const architectData = architects.map((item) => ({
      registrationId: item.registrationId,
      name: item.fullName,
      category: "Architect",
      status: item.status,
      paymentStatus: item.paymentStatus,
      createdAt: item.createdAt,
    }));

    // Format engineer data
    const engineerData = engineers.map((item) => ({
      registrationId: item.registrationId,
      name: item.fullName,
      category:
        item.category === "LAA Member"
          ? "Engineer (Free)"
          : "Engineer (Paid)",
      status: item.status,
      paymentStatus: item.paymentStatus,
      createdAt: item.createdAt,
    }));

    // Format exhibitor data
    const exhibitorData = exhibitors.map((item) => ({
      registrationId: item.registrationId,
      name: item.companyName,
      category: "Exhibitor",
      status: item.status,
      paymentStatus: item.paymentStatus,
      createdAt: item.createdAt,
    }));

    // Combine all registrations
    const recentRegistrations = [
      ...architectData,
      ...engineerData,
      ...exhibitorData,
    ]
      .sort(
        (a, b) =>
          new Date(b.createdAt) - new Date(a.createdAt)
      )
      .slice(0, 10);

    res.status(200).json({
      success: true,
      message: "Recent registrations fetched successfully",
      data: recentRegistrations,
    });
  } catch (error) {
    console.log("Recent Registrations Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch recent registrations",
    });
  }
};
