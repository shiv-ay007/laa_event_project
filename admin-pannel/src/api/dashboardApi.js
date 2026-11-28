import api from "../services/api";

// Get Dashboard Statistics and Chart Data
export const getDashboardStats = () => {
  return api.get("/dashboard/stats");
};

// Get Recent Registrations
export const getRecentRegistrations = () => {
  return api.get("/dashboard/recent");
};
