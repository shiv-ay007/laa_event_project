import Architect from "../models/architectModel.js";
import Engineer from "../models/engineerModel.js";
import Exhibitor from "../models/exhibitorModel.js";

export const getDashboardStats = async (req, res) => {
  try {
    // Total registrations
    const totalArchitects = await Architect.countDocuments();
    const totalEngineers = await Engineer.countDocuments();
    const totalExhibitors = await Exhibitor.countDocuments();

    const totalRegistrations =
      totalArchitects + totalEngineers + totalExhibitors;

    // Free and paid engineers
    const freeEngineers = await Engineer.countDocuments({
      category: "LAA Member",
    });

    const paidEngineers = await Engineer.countDocuments({
      category: "Other than LAA",
    });

    // Pending applications
    const pendingApplications =
      (await Architect.countDocuments({ status: "pending" })) +
      (await Engineer.countDocuments({ status: "pending" })) +
      (await Exhibitor.countDocuments({ status: "pending" }));

    // Approved applications
    const approvedApplications =
      (await Architect.countDocuments({ status: "approved" })) +
      (await Engineer.countDocuments({ status: "approved" })) +
      (await Exhibitor.countDocuments({ status: "approved" }));

    // Rejected applications
    const rejectedApplications =
      (await Architect.countDocuments({ status: "rejected" })) +
      (await Engineer.countDocuments({ status: "rejected" })) +
      (await Exhibitor.countDocuments({ status: "rejected" }));

    // Verified payment count
    const verifiedPayments =
      (await Architect.countDocuments({ paymentStatus: "verified" })) +
      (await Engineer.countDocuments({ paymentStatus: "verified" })) +
      (await Exhibitor.countDocuments({ paymentStatus: "verified" }));

    // Send response
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
    // Get latest architects
    const architects = await Architect.find()
      .select("registrationId fullName status paymentStatus createdAt")
      .sort({ createdAt: -1 })
      .limit(10);

    // Get latest engineers
    const engineers = await Engineer.find()
      .select("registrationId fullName category status paymentStatus createdAt")
      .sort({ createdAt: -1 })
      .limit(10);

    // Get latest exhibitors
    const exhibitors = await Exhibitor.find()
      .select("registrationId companyName status paymentStatus createdAt")
      .sort({ createdAt: -1 })
      .limit(10);

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
