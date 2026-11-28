import api from "../services/api";

// Admin Login
export const loginAdmin = (data) => {
  return api.post("/admin/login", data);
};

// Get Admin Profile
export const getAdminProfile = () => {
  return api.get("/admin/profile");
};
