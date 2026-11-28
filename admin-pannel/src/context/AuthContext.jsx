import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { getAdminProfile, loginAdmin } from "../api/authApi";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check existing admin session
  const checkAuth = async () => {
    const token = sessionStorage.getItem(
      "laf_admin_token"
    );

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await getAdminProfile();

      if (response.data.success) {
        setAdmin(response.data.admin);
      } else {
        sessionStorage.removeItem("laf_admin_token");
        setAdmin(null);
      }
    } catch (error) {
      sessionStorage.removeItem("laf_admin_token");
      setAdmin(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleSessionExpired = () => {
      setAdmin(null);
    };

    window.addEventListener(
      "admin-session-expired",
      handleSessionExpired
    );

    checkAuth();

    return () => {
      window.removeEventListener(
        "admin-session-expired",
        handleSessionExpired
      );
    };
  }, []);

  // Admin Login
  const login = async (email, password) => {
    try {
      const response = await loginAdmin({
        email,
        password,
      });

      if (response.data.success) {
        sessionStorage.setItem(
          "laf_admin_token",
          response.data.token
        );

        setAdmin(response.data.admin);

        return {
          success: true,
          message: response.data.message,
        };
      }

      return {
        success: false,
        message: "Login failed",
      };

    } catch (error) {
      return {
        success: false,
        message:
          error.response?.data?.message ||
          "Unable to connect to server",
      };
    }
  };

  // Admin Logout
  const logout = () => {
    sessionStorage.removeItem("laf_admin_token");
    setAdmin(null);
  };

  return (
    <AuthContext.Provider
      value={{
        admin,
        loading,
        login,
        logout,
        isAuthenticated: !!admin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used within AuthProvider"
    );
  }

  return context;
};