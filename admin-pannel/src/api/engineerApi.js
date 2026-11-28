import api from "../services/api";

// Get All Engineers
export const getAllEngineers = (params = {}) => {
  return api.get("/engineers", { params });
};

// Get Single Engineer
export const getSingleEngineer = (id) => {
  return api.get(`/engineers/${id}`);
};

// View Engineer Document
export const viewEngineerDocument = (id, documentType) => {
  return api.get(
    `/engineers/${id}/document/${documentType}`
  );
};

// Update Engineer Payment Status
export const updateEngineerPaymentStatus = (id, data) => {
  return api.patch(
    `/engineers/${id}/payment-status`,
    data
  );
};

// Update Engineer Application Status
export const updateEngineerApplicationStatus = (id, data) => {
  return api.patch(
    `/engineers/${id}/application-status`,
    data
  );
};