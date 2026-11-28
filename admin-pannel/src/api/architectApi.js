import api from "../services/api";

// Get All Architects
export const getAllArchitects = (params = {}) => {
  return api.get("/architects", { params });
};

// Get Single Architect
export const getSingleArchitect = (id) => {
  return api.get(`/architects/${id}`);
};

// View Architect Document
export const viewArchitectDocument = (id, documentType) => {
  return api.get(
    `/architects/${id}/document/${documentType}`
  );
};

// Update Payment Status
export const updateArchitectPaymentStatus = (id, data) => {
  return api.patch(
    `/architects/${id}/payment-status`,
    data
  );
};

// Update Application Status
export const updateArchitectApplicationStatus = (id, data) => {
  return api.patch(
    `/architects/${id}/application-status`,
    data
  );
};