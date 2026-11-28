import api from "../services/api";

// Get All Exhibitors
export const getAllExhibitors = (params = {}) => {
  return api.get("/exhibitors", { params });
};

// Get Single Exhibitor
export const getSingleExhibitor = (id) => {
  return api.get(`/exhibitors/${id}`);
};

// View Exhibitor Document
export const viewExhibitorDocument = (id, documentType) => {
  return api.get(
    `/exhibitors/${id}/document/${documentType}`
  );
};

// Update Exhibitor Payment Status
export const updateExhibitorPaymentStatus = (id, data) => {
  return api.patch(
    `/exhibitors/${id}/payment-status`,
    data
  );
};

// Update Exhibitor Application Status
export const updateExhibitorApplicationStatus = (id, data) => {
  return api.patch(
    `/exhibitors/${id}/application-status`,
    data
  );
};
