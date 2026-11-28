import api from "../services/api";

// Get All Payments
export const getAllPayments = (params = {}) => {
  return api.get("/payments", { params });
};

// Category Routes
const categoryRoutes = {
  Architect: "/architects",
  Engineer: "/engineers",
  Exhibitor: "/exhibitors",
};

const getCategoryRoute = (type) => {
  const route = categoryRoutes[type];

  if (!route) {
    throw new Error("Invalid payment category");
  }

  return route;
};

// Get Payment Details
export const getPaymentDetails = (type, id) => {
  const route = getCategoryRoute(type);

  return api.get(`${route}/${id}`);
};

// View Payment Receipt
export const viewPaymentReceipt = (type, id) => {
  const route = getCategoryRoute(type);

  return api.get(`${route}/${id}/document/receipt`);
};

// Verify or Reject Payment
export const updatePaymentStatus = (type, id, data) => {
  const route = getCategoryRoute(type);

  return api.patch(`${route}/${id}/payment-status`, data);
};