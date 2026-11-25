import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./components/AdminLayout";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const ComingSoon = ({ title }) => {
  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-10">

      <h1 className="text-2xl font-bold text-neutral-900">
        {title}
      </h1>

      <p className="text-neutral-500 mt-3">
        This module is under development.
      </p>

    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>

      <AuthProvider>

        <Routes>

          {/* Public Routes */}

          <Route
            path="/"
            element={<Navigate to="/dashboard" replace />}
          />

          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}

          <Route element={<ProtectedRoute />}>

            <Route element={<AdminLayout />}>

              <Route
                path="/dashboard"
                element={<Dashboard />}
              />

              <Route
                path="/architects"
                element={<ComingSoon title="Architects" />}
              />

              <Route
                path="/engineers"
                element={<ComingSoon title="Engineers" />}
              />

              <Route
                path="/exhibitors"
                element={<ComingSoon title="Exhibitors" />}
              />

              <Route
                path="/payments"
                element={<ComingSoon title="Payments" />}
              />

              <Route
                path="/settings"
                element={<ComingSoon title="Settings" />}
              />

            </Route>

          </Route>

          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />

        </Routes>

      </AuthProvider>

    </BrowserRouter>
  );
};

export default App;