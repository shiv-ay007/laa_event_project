import { useState, useEffect } from "react";
import api from "../services/api";
import {
  Users,
  Building2,
  HardHat,
  Store,
  Wallet,
  Clock,
  CheckCircle2,
  XCircle,
  FileText,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

import StatCard from "../components/StatCard";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { admin } = useAuth();

  const [dashboardData, setDashboardData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

const [recentRegistrations, setRecentRegistrations] = useState([]);
const [recentLoading, setRecentLoading] = useState(true);
const [recentError, setRecentError] = useState("");

const fetchDashboardData = async () => {
  try {
    setLoading(true);
    setError("");

    const response = await api.get("/dashboard/stats");

    if (response.data.success) {
      setDashboardData(response.data.data);
    } else {
      setError("Failed to fetch dashboard data");
    }
  } catch (error) {
    console.log("Dashboard Error:", error);
    setError("Unable to load dashboard data");
  } finally {
    setLoading(false);
  }
};

const fetchRecentRegistrations = async () => {
  try {
    setRecentLoading(true);
    setRecentError("");

    const response = await api.get("/dashboard/recent");

    if (response.data.success) {
      setRecentRegistrations(response.data.data);
    } else {
      setRecentError("Failed to fetch registrations");
    }

  } catch (error) {
    console.log("Recent Registrations Error:", error);
    setRecentError("Unable to load recent registrations");
  } finally {
    setRecentLoading(false);
  }
};

useEffect(() => {
  fetchDashboardData();
  fetchRecentRegistrations();
}, []);

 const stats = [
  {
    title: "Total Registrations",
    value: dashboardData?.totalRegistrations ?? "—",
    icon: Users,
    description: "All registered participants",
  },
  {
    title: "Total Architects",
    value: dashboardData?.totalArchitects ?? "—",
    icon: Building2,
    description: "Architect registrations",
  },
  {
    title: "Total Engineers",
    value: dashboardData?.totalEngineers ?? "—",
    icon: HardHat,
    description: "Free and paid registrations",
  },
  {
    title: "Total Exhibitors",
    value: dashboardData?.totalExhibitors ?? "—",
    icon: Store,
    description: "Registered companies",
  },
  {
    title: "Verified Payments",
    value: dashboardData?.verifiedPayments ?? "—",
    icon: Wallet,
    description: "Successfully verified payments",
  },
  {
    title: "Pending Applications",
    value: dashboardData?.pendingApplications ?? "—",
    icon: Clock,
    description: "Awaiting admin review",
  },
  {
    title: "Approved Applications",
    value: dashboardData?.approvedApplications ?? "—",
    icon: CheckCircle2,
    description: "Successfully approved",
  },
  {
    title: "Rejected Applications",
    value: dashboardData?.rejectedApplications ?? "—",
    icon: XCircle,
    description: "Rejected registrations",
  },
];

const chartData = [
  {
    name: "Architects",
    total: dashboardData?.totalArchitects ?? 0,
  },
  {
    name: "Engineers",
    total: dashboardData?.totalEngineers ?? 0,
  },
  {
    name: "Exhibitors",
    total: dashboardData?.totalExhibitors ?? 0,
  },
];

const COLORS = ["#dc2626", "#171717", "#fca5a5"];

  return (
    <div className="space-y-3.5">

      {/* Welcome Section */}
      <section className="relative overflow-hidden bg-neutral-950 rounded-xl px-5 py-3.5 lg:px-6 lg:py-3.5 text-white shadow-sm border border-neutral-800">

        <div className="absolute -right-10 -top-16 w-60 h-60 rounded-full border border-red-600/20 pointer-events-none" />
        <div className="absolute -right-4 -top-8 w-40 h-40 rounded-full border border-red-600/15 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-2.5">

          <div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <p className="text-red-500 text-[10px] sm:text-[11px] font-bold tracking-[2.5px] uppercase">
                Lucknow Architecture Festival 3.0 • Live Portal
              </p>
            </div>

            <h1 className="text-base sm:text-lg lg:text-xl font-bold mt-1 text-white">
              LAF 3.0 Central Operations & Registration Hub
            </h1>

            <p className="text-neutral-400 text-xs mt-0.5 max-w-2xl">
              Real-time monitoring of participants, architect & engineer entries, exhibitor spaces, and fee payments.
            </p>

          </div>

          <div className="hidden sm:flex items-center gap-2 shrink-0 bg-neutral-900/90 border border-neutral-800 px-3 py-1.5 rounded-lg text-xs text-neutral-300">
            <span className="text-neutral-500">Event Date:</span>
            <span className="font-semibold text-white">
              {new Date().toLocaleDateString("en-IN", {
                weekday: "short",
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>

        </div>

      </section>

      {/* Statistics */}
      <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-3">

        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}

      </div>

      {loading && (
        <p className="text-sm text-neutral-500">
          Loading dashboard data...
        </p>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="text-red-600 text-sm">
            {error}
          </p>

          <button
            onClick={fetchDashboardData}
            className="mt-1.5 text-sm font-semibold text-red-600 cursor-pointer"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Analytics Section */}
      {dashboardData && (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-3">

          {/* Bar Chart */}
          <div className="xl:col-span-2 bg-white border border-neutral-200 rounded-xl p-3.5 sm:p-4 min-w-0">

            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm sm:text-base font-bold text-neutral-900">
                  Registration Overview
                </h2>
                <p className="text-[11px] text-neutral-400 mt-0.5">
                  Category-wise registration statistics
                </p>
              </div>
            </div>

            <div className="h-[195px] mt-2">

              <ResponsiveContainer width="100%" height="100%">

                <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>

                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#f3f4f6"
                  />

                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 11 }}
                  />

                  <YAxis
                    allowDecimals={false}
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 11 }}
                  />

                  <Tooltip contentStyle={{ fontSize: "12px", borderRadius: "8px" }} />

                  <Bar
                    dataKey="total"
                    name="Registrations"
                    radius={[6, 6, 0, 0]}
                    maxBarSize={48}
                  >

                    {chartData.map((item, index) => (
                      <Cell
                        key={item.name}
                        fill={COLORS[index]}
                      />
                    ))}

                  </Bar>

                </BarChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* Pie Chart */}
          <div className="bg-white border border-neutral-200 rounded-xl p-3.5 sm:p-4 min-w-0">

            <div>
              <h2 className="text-sm sm:text-base font-bold text-neutral-900">
                Registration Breakdown
              </h2>
              <p className="text-[11px] text-neutral-400 mt-0.5">
                Participant distribution
              </p>
            </div>

            <div className="h-[195px] mt-2">

              {dashboardData.totalRegistrations > 0 ? (

                <ResponsiveContainer width="100%" height="100%">

                  <PieChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>

                    <Pie
                      data={chartData}
                      dataKey="total"
                      nameKey="name"
                      cx="50%"
                      cy="44%"
                      innerRadius={45}
                      outerRadius={72}
                      paddingAngle={3}
                    >

                      {chartData.map((item, index) => (
                        <Cell
                          key={item.name}
                          fill={COLORS[index]}
                        />
                      ))}

                    </Pie>

                    <Tooltip contentStyle={{ fontSize: "12px", borderRadius: "8px" }} />

                    <Legend
                      verticalAlign="bottom"
                      iconType="circle"
                      wrapperStyle={{ fontSize: "11px", paddingTop: "4px" }}
                    />

                  </PieChart>

                </ResponsiveContainer>

              ) : (

                <div className="h-full flex items-center justify-center text-xs text-neutral-400">
                  No registrations available
                </div>

              )}

            </div>

          </div>

        </div>
      )}

      {/* Engineer Registration Summary */}
      <div className="bg-white border border-neutral-200 rounded-xl p-3.5 sm:p-4">

        <h2 className="text-sm sm:text-base font-bold text-neutral-900">
          Engineer Registration Summary
        </h2>

        <p className="text-[11px] text-neutral-400 mt-0.5">
          Free and paid engineer registrations
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">

          {/* Free Engineers */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3.5">

            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-neutral-600">
                Free Engineers
              </p>
              <Users size={19} className="text-neutral-700" />
            </div>

            <h3 className="text-2xl font-bold text-neutral-900 mt-1.5">
              {dashboardData?.freeEngineers ?? "—"}
            </h3>

            <p className="text-[11px] text-neutral-500 mt-1">
              LAA Members — Free Registration
            </p>

          </div>

          {/* Paid Engineers */}
          <div className="bg-red-50 border border-red-100 rounded-xl p-3.5">

            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-red-700">
                Paid Engineers
              </p>
              <Wallet size={19} className="text-red-600" />
            </div>

            <h3 className="text-2xl font-bold text-red-600 mt-1.5">
              {dashboardData?.paidEngineers ?? "—"}
            </h3>

            <p className="text-[11px] text-red-500 mt-1">
              Other than LAA — ₹2,000 Registration Fee
            </p>

          </div>

        </div>

      </div>
      

      {/* Recent Registrations */}
      <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm border-t-4 border-t-red-600">

        <div className="p-3.5 sm:p-4 border-b border-neutral-100 bg-gradient-to-r from-red-50/40 via-white to-white flex items-center justify-between">

          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-red-600/10 text-red-600 flex items-center justify-center font-bold shrink-0">
              <FileText size={16} />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-neutral-900 flex items-center gap-2">
                Recent Registrations
                <span className="text-[10px] bg-red-100 text-red-700 font-semibold px-2 py-0.5 rounded-full">
                  Latest 10
                </span>
              </h2>
              <p className="text-[11px] text-neutral-400 mt-0.5">
                Live applicant stream & status tracking
              </p>
            </div>
          </div>

          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-100">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
            Live Stream
          </span>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full text-left text-sm whitespace-nowrap">

            <thead className="bg-neutral-900 text-neutral-200 text-xs font-semibold uppercase tracking-wider">

              <tr>
                {[
                  "Registration ID",
                  "Name",
                  "Category",
                  "Date",
                  "Payment",
                  "Status",
                ].map((heading) => (
                  <th
                    key={heading}
                    className="px-5 py-3 font-semibold"
                  >
                    {heading}
                  </th>
                ))}
              </tr>

            </thead>

            <tbody className="divide-y divide-neutral-100">

              {recentLoading ? (
                <tr>
                  <td
                    colSpan={6}
                    className="text-center text-neutral-400 py-12 text-sm"
                  >
                    Loading registrations...
                  </td>
                </tr>
              ) : recentError ? (
                <tr>
                  <td
                    colSpan={6}
                    className="text-center text-red-600 py-12 text-sm"
                  >
                    {recentError}
                    <button
                      onClick={fetchRecentRegistrations}
                      className="block mx-auto mt-2 font-semibold text-xs text-red-700 underline cursor-pointer"
                    >
                      Try Again
                    </button>
                  </td>
                </tr>
              ) : recentRegistrations.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="text-center text-neutral-400 py-12 text-sm"
                  >
                    No registrations found
                  </td>
                </tr>
              ) : (
                recentRegistrations.map((item) => {
                  const cat = (item.category || "").toLowerCase();
                  const catClass = cat.includes("architect")
                    ? "bg-red-50 text-red-700 border border-red-200/80 font-semibold"
                    : cat.includes("paid")
                    ? "bg-rose-50 text-rose-700 border border-rose-200/80 font-semibold"
                    : cat.includes("free")
                    ? "bg-blue-50 text-blue-700 border border-blue-200/80 font-semibold"
                    : cat.includes("exhibitor")
                    ? "bg-purple-50 text-purple-700 border border-purple-200/80 font-semibold"
                    : "bg-neutral-100 text-neutral-700 border border-neutral-200 font-semibold";

                  const pay = (item.paymentStatus || "").toLowerCase();
                  const payClass = pay === "verified"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200/80"
                    : pay === "not_required"
                    ? "bg-neutral-100 text-neutral-600 border border-neutral-200/80"
                    : pay === "rejected"
                    ? "bg-red-50 text-red-700 border border-red-200/80"
                    : "bg-amber-50 text-amber-700 border border-amber-200/80";

                  const st = (item.status || "").toLowerCase();
                  const stClass = st === "approved"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200/80"
                    : st === "rejected"
                    ? "bg-red-50 text-red-700 border border-red-200/80"
                    : "bg-amber-50 text-amber-700 border border-amber-200/80";

                  return (
                    <tr
                      key={item.registrationId}
                      className="hover:bg-red-50/20 transition-colors group"
                    >
                      {/* Registration ID */}
                      <td className="px-5 py-3">
                        <span
                          title={item.registrationId}
                          className="font-mono text-xs text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200"
                        >
                          {item.registrationId?.slice(0, 16)}...
                        </span>
                      </td>

                      {/* Name */}
                      <td className="px-5 py-3 font-semibold text-neutral-900 group-hover:text-red-600 transition-colors">
                        {item.name}
                      </td>

                      {/* Category */}
                      <td className="px-5 py-3">
                        <span className={`px-2.5 py-0.5 rounded-md text-xs ${catClass}`}>
                          {item.category}
                        </span>
                      </td>

                      {/* Date */}
                      <td className="px-5 py-3 text-xs text-neutral-500 font-medium">
                        {new Date(item.createdAt).toLocaleDateString("en-IN")}
                      </td>

                      {/* Payment Status */}
                      <td className="px-5 py-3">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-semibold capitalize inline-flex items-center gap-1 ${payClass}`}
                        >
                          {pay === "verified" && <CheckCircle2 size={12} className="text-emerald-600" />}
                          {pay === "rejected" && <XCircle size={12} className="text-red-600" />}
                          {pay === "pending" && <Clock size={12} className="text-amber-600" />}
                          {item.paymentStatus === "not_required"
                            ? "Not Required"
                            : item.paymentStatus}
                        </span>
                      </td>

                      {/* Registration Status */}
                      <td className="px-5 py-3">
                        <span
                          className={`px-2.5 py-1 rounded-full text-xs font-semibold capitalize inline-flex items-center gap-1 ${stClass}`}
                        >
                          {st === "approved" && <CheckCircle2 size={12} className="text-emerald-600" />}
                          {st === "rejected" && <XCircle size={12} className="text-red-600" />}
                          {st === "pending" && <Clock size={12} className="text-amber-600" />}
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  );
                })
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;