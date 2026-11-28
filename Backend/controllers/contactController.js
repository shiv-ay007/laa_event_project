import Contact from "../models/contactModel.js";

// Submit Public Contact Enquiry
export const submitContact = async (req, res) => {
  try {
    const { firstName, contactNumber, email, message } = req.body;

    // Field Validation
    if (!firstName || typeof firstName !== "string" || !firstName.trim()) {
      return res.status(400).json({
        success: false,
        message: "First name is required",
      });
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: "Email address is required",
      });
    }

    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address",
      });
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const contact = new Contact({
      firstName: firstName.trim(),
      contactNumber: typeof contactNumber === "string" ? contactNumber.trim() : "",
      email: email.trim().toLowerCase(),
      message: message.trim(),
    });

    await contact.save();

    return res.status(201).json({
      success: true,
      message: "Thank you for reaching out! Your message has been sent successfully.",
      data: {
        id: contact._id,
        createdAt: contact.createdAt,
      },
    });
  } catch (error) {
    console.error("Submit Contact Error:", error.message);

    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: error.message || "Invalid contact form submission",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to submit your message. Please try again later.",
    });
  }
};

// Get All Contact Enquiries (Admin Protected)
export const getAllContacts = async (req, res) => {
  try {
    const { search = "" } = req.query;

    if (typeof search !== "string" || search.length > 200) {
      return res.status(400).json({
        success: false,
        message: "Invalid search query",
      });
    }

    // Pagination
    const requestedPage = Math.max(1, parseInt(req.query.page, 10) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit, 10) || 10));

    // MongoDB Query
    const query = {};

    // Server-Side Search
    if (search.trim()) {
      const searchText = search.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

      query.$or = [
        { firstName: { $regex: searchText, $options: "i" } },
        { email: { $regex: searchText, $options: "i" } },
        { contactNumber: { $regex: searchText, $options: "i" } },
        { message: { $regex: searchText, $options: "i" } },
      ];
    }

    // Total counts at database level
    const [totalRecords, totalEnquiries] = await Promise.all([
      Contact.countDocuments(query),
      Contact.countDocuments(),
    ]);

    const totalPages = Math.max(1, Math.ceil(totalRecords / limit));
    const page = Math.min(requestedPage, totalPages);
    const skip = (page - 1) * limit;

    // Fetch Required Records Only
    const contacts = await Contact.find(query)
      .select("firstName contactNumber email message createdAt")
      .sort({ createdAt: -1, _id: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    return res.status(200).json({
      success: true,
      message: "Contact enquiries fetched successfully",
      total: totalRecords,
      stats: {
        totalEnquiries,
      },
      pagination: {
        currentPage: page,
        limit,
        totalRecords,
        totalPages,
      },
      data: contacts,
    });
  } catch (error) {
    console.error("Get Contacts Error:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch contact enquiries",
    });
  }
};
