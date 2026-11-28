import api from "../services/api";

// Get All Contact Enquiries (Admin)
export const getAllContacts = (params = {}) => {
  return api.get("/contacts", { params });
};
