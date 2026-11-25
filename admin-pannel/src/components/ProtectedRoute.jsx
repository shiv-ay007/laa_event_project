import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-950">

        <div className="w-12 h-12 rounded-full border-4 border-neutral-700 border-t-red-600 animate-spin"></div>

        <p className="mt-4 text-sm text-gray-400 tracking-widest uppercase">
          Verifying Session...
        </p>

      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;