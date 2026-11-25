import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  LoaderCircle,
  Building2,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();

  const { login, isAuthenticated, loading } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitting) return;

    if (!formData.email.trim() || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const result = await login(
        formData.email.trim(),
        formData.password
      );

      if (result.success) {
        navigate("/dashboard", { replace: true });
      } else {
        setError(result.message);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-950">
        <LoaderCircle
          size={40}
          className="animate-spin text-red-600"
        />
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-white">

      {/* Left Branding Section */}

      <div className="hidden lg:flex relative overflow-hidden bg-neutral-950 text-white flex-col justify-between p-16">

        {/* Architectural Background Pattern */}

        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "65px 65px",
          }}
        />

        <div className="absolute -right-40 -bottom-40 w-[500px] h-[500px] rounded-full border border-red-600/30" />

        <div className="absolute -right-24 -bottom-24 w-[350px] h-[350px] rounded-full border border-red-600/20" />

        {/* Logo */}

        <div className="relative z-10">

          <h1 className="text-5xl font-black tracking-tight">
            LAF<span className="text-red-600">3.0</span>
          </h1>

          <p className="text-xs uppercase tracking-[4px] text-neutral-400 mt-3">
            Administration Portal
          </p>

        </div>

        {/* Main Content */}

        <div className="relative z-10">

          <div className="w-14 h-1 bg-red-600 mb-8" />

          <Building2
            size={65}
            strokeWidth={1}
            className="text-red-600 mb-8"
          />

          <h2 className="text-5xl xl:text-6xl font-bold leading-tight">
            Lucknow
            <br />
            Architecture
            <br />
            <span className="text-red-600">
              Festival.
            </span>
          </h2>

          <p className="text-neutral-400 leading-relaxed max-w-md mt-6">
            A centralized platform to manage registrations,
            participants, exhibitors and event operations
            efficiently.
          </p>

        </div>

        {/* Footer */}

        <div className="relative z-10 border-t border-neutral-800 pt-6">

          <p className="text-neutral-500 text-xs tracking-widest uppercase">
            Authorized Personnel Only
          </p>

        </div>

      </div>

      {/* Right Login Section */}

      <div className="flex items-center justify-center px-6 py-12 sm:px-12">

        <div className="w-full max-w-[420px]">

          {/* Mobile Logo */}

          <div className="lg:hidden mb-10">

            <h1 className="text-4xl font-black">
              LAF<span className="text-red-600">3.0</span>
            </h1>

            <p className="text-sm text-neutral-500 mt-2">
              Administration Portal
            </p>

          </div>

          <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-7">

            <ShieldCheck
              size={28}
              className="text-red-600"
            />

          </div>

          <h2 className="text-4xl font-bold text-neutral-900">
            Welcome Back
          </h2>

          <p className="text-neutral-500 mt-3 text-sm">
            Sign in to access your administration dashboard.
          </p>

          {/* Error Message */}

          {error && (
            <div
              role="alert"
              className="mt-6 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg"
            >
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="mt-9 space-y-6"
          >

            {/* Email */}

            <div>

              <label
                htmlFor="email"
                className="block text-sm font-semibold text-neutral-800 mb-2"
              >
                Email Address
              </label>

              <div className="relative">

                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                />

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  autoComplete="username"
                  required
                  className="w-full h-13 pl-12 pr-4 border border-neutral-200 rounded-lg outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-all text-sm"
                />

              </div>

            </div>

            {/* Password */}

            <div>

              <label
                htmlFor="password"
                className="block text-sm font-semibold text-neutral-800 mb-2"
              >
                Password
              </label>

              <div className="relative">

                <LockKeyhole
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  className="w-full h-13 pl-12 pr-12 border border-neutral-200 rounded-lg outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-all text-sm"
                />

                <button
                  type="button"
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>

              </div>

            </div>

            {/* Login Button */}

            <button
              type="submit"
              disabled={submitting}
              className="w-full h-13 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold flex items-center justify-center gap-3 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >

              {submitting ? (
                <>
                  <LoaderCircle
                    size={20}
                    className="animate-spin"
                  />
                  Signing In...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight size={19} />
                </>
              )}

            </button>

          </form>

          <div className="flex items-center justify-center gap-2 mt-8 text-neutral-400 text-xs">

            <ShieldCheck size={15} />

            Secure Admin Portal

          </div>

          <p className="text-center text-xs text-neutral-400 mt-12">
            © {new Date().getFullYear()} LAF 3.0.
            All rights reserved.
          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;