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
    <div className="space-y-7">

      {/* Welcome Section */}

      <section className="relative overflow-hidden bg-neutral-950 rounded-xl p-7 lg:p-9 text-white">

        <div className="absolute -right-16 -top-24 w-80 h-80 rounded-full border border-red-600/30" />

        <div className="absolute -right-8 -top-12 w-56 h-56 rounded-full border border-red-600/20" />

        <div className="relative z-10">

          <p className="text-red-500 text-xs font-semibold tracking-[3px] uppercase">
            Event Management Dashboard
          </p>

          <h1 className="text-2xl lg:text-4xl font-bold mt-3">
            Welcome, {admin?.name || "Admin"}
          </h1>

          <p className="text-neutral-400 text-sm mt-3">
            Manage registrations, participants and payments
            for Lucknow Architecture Festival 3.0.
          </p>

          <p className="text-neutral-500 text-xs mt-5">
            {new Date().toLocaleDateString("en-IN", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>

        </div>

      </section>

      {/* Statistics */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

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
  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
    <p className="text-red-600 text-sm">
      {error}
    </p>

    <button
      onClick={fetchDashboardData}
      className="mt-2 text-sm font-semibold text-red-600 cursor-pointer"
    >
      Try Again
    </button>
  </div>
)}

     {/* Analytics Section */}

{dashboardData && (
  <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">

    {/* Bar Chart */}

    <div className="xl:col-span-2 bg-white border border-neutral-200 rounded-xl p-6 min-w-0">

      <h2 className="text-lg font-bold text-neutral-900">
        Registration Overview
      </h2>

      <p className="text-sm text-neutral-400 mt-1">
        Category-wise registration statistics
      </p>

      <div className="h-[300px] mt-6">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={chartData}>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e5e7eb"
            />

            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />

            <YAxis
              allowDecimals={false}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip />

            <Bar
              dataKey="total"
              name="Registrations"
              radius={[6, 6, 0, 0]}
              maxBarSize={65}
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

    <div className="bg-white border border-neutral-200 rounded-xl p-6 min-w-0">

      <h2 className="text-lg font-bold text-neutral-900">
        Registration Breakdown
      </h2>

      <p className="text-sm text-neutral-400 mt-1">
        Participant distribution
      </p>

      <div className="h-[300px] mt-6">

        {dashboardData.totalRegistrations > 0 ? (

          <ResponsiveContainer width="100%" height="100%">

            <PieChart>

              <Pie
                data={chartData}
                dataKey="total"
                nameKey="name"
                cx="50%"
                cy="45%"
                innerRadius={60}
                outerRadius={95}
                paddingAngle={3}
              >

                {chartData.map((item, index) => (
                  <Cell
                    key={item.name}
                    fill={COLORS[index]}
                  />
                ))}

              </Pie>

              <Tooltip />

              <Legend
                verticalAlign="bottom"
                iconType="circle"
              />

            </PieChart>

          </ResponsiveContainer>

        ) : (

          <div className="h-full flex items-center justify-center text-sm text-neutral-400">
            No registrations available
          </div>

        )}

      </div>

    </div>

  </div>
)}



{/* Engineer Registration Summary */}

<div className="bg-white border border-neutral-200 rounded-xl p-6">

  <h2 className="text-lg font-bold text-neutral-900">
    Engineer Registration Summary
  </h2>

  <p className="text-sm text-neutral-400 mt-1">
    Free and paid engineer registrations
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">

    {/* Free Engineers */}

    <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">

      <div className="flex items-center justify-between">

        <p className="text-sm font-medium text-neutral-600">
          Free Engineers
        </p>

        <Users size={23} className="text-neutral-700" />

      </div>

      <h3 className="text-4xl font-bold text-neutral-900 mt-4">
        {dashboardData?.freeEngineers ?? "—"}
      </h3>

      <p className="text-xs text-neutral-500 mt-3">
        LAA Members — Free Registration
      </p>

    </div>

    {/* Paid Engineers */}

    <div className="bg-red-50 border border-red-100 rounded-xl p-6">

      <div className="flex items-center justify-between">

        <p className="text-sm font-medium text-red-700">
          Paid Engineers
        </p>

        <Wallet size={23} className="text-red-600" />

      </div>

      <h3 className="text-4xl font-bold text-red-600 mt-4">
        {dashboardData?.paidEngineers ?? "—"}
      </h3>

      <p className="text-xs text-red-500 mt-3">
        Other than LAA — ₹2,000 Registration Fee
      </p>

    </div>

  </div>

</div>
      

      {/* Recent Registrations */}

      <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden">

        <div className="p-6 border-b border-neutral-100">

          <h2 className="text-lg font-bold text-neutral-900">
            Recent Registrations
          </h2>

          <p className="text-sm text-neutral-400 mt-1">
  Latest 10 applications received
</p>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full text-left text-sm whitespace-nowrap">

            <thead className="bg-neutral-50 text-neutral-500">

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
                    className="px-6 py-4 font-medium"
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
        className="text-center text-neutral-400 py-14"
      >
        Loading registrations...
      </td>
    </tr>

  ) : recentError ? (
    <tr>
      <td
        colSpan={6}
        className="text-center text-red-600 py-14"
      >
        {recentError}

        <button
          onClick={fetchRecentRegistrations}
          className="block mx-auto mt-3 font-semibold cursor-pointer"
        >
          Try Again
        </button>
      </td>
    </tr>

  ) : recentRegistrations.length === 0 ? (
    <tr>
      <td
        colSpan={6}
        className="text-center text-neutral-400 py-14"
      >
        No registrations found
      </td>
    </tr>

  ) : (
    recentRegistrations.map((item) => (
      <tr
        key={item.registrationId}
        className="hover:bg-neutral-50 transition-colors"
      >

        {/* Registration ID */}
        <td
          title={item.registrationId}
          className="px-6 py-4 text-xs text-neutral-500"
        >
          {item.registrationId?.slice(0, 18)}...
        </td>

        {/* Name */}
        <td className="px-6 py-4 font-semibold text-neutral-900">
          {item.name}
        </td>

        {/* Category */}
        <td className="px-6 py-4 text-neutral-600">
          {item.category}
        </td>

        {/* Date */}
        <td className="px-6 py-4 text-neutral-500">
          {new Date(item.createdAt).toLocaleDateString("en-IN")}
        </td>

        {/* Payment Status */}
        <td className="px-6 py-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
              item.paymentStatus === "verified"
                ? "bg-green-100 text-green-700"
                : item.paymentStatus === "not_required"
                ? "bg-neutral-100 text-neutral-600"
                : item.paymentStatus === "rejected"
                ? "bg-red-100 text-red-700"
                : "bg-amber-100 text-amber-700"
            }`}
          >
            {item.paymentStatus === "not_required"
              ? "Not Required"
              : item.paymentStatus}
          </span>
        </td>

        {/* Registration Status */}
        <td className="px-6 py-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
              item.status === "approved"
                ? "bg-green-100 text-green-700"
                : item.status === "rejected"
                ? "bg-red-100 text-red-700"
                : "bg-amber-100 text-amber-700"
            }`}
          >
            {item.status}
          </span>
        </td>

      </tr>
    ))
  )}

</tbody>
          </table>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;