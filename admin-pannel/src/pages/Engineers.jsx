
import { useState, useEffect } from "react";

import {
  Users,
  UserCheck,
  Wallet,
  Clock,
  CheckCircle2,
  XCircle,
  Search,
  Eye,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import api from "../services/api";
import StatCard from "../components/StatCard";
import StatusBadge from "../components/StatusBadge";
import EngineerDetails from "../components/EngineerDetails";

const Engineers = () => {
  const [engineers, setEngineers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEngineerId, setSelectedEngineerId] = useState(null);
  const itemsPerPage = 10;

  // Fetch Engineers

  const fetchEngineers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/engineers");

      if (response.data.success) {
        setEngineers(response.data.data);
        setCurrentPage(1);
      } else {
        setError("Unable to fetch engineers");
      }
    } catch (error) {
      setError(
        error.response?.data?.message ||
        "Failed to fetch engineers"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEngineers();
  }, []);

  // Statistics

  const stats = [
    {
      title: "Total Engineers",
      value: engineers.length,
      icon: Users,
      description: "All registered engineers",
    },
    {
      title: "Free Engineers",
      value: engineers.filter(
        (item) => item.category === "LAA Member"
      ).length,
      icon: UserCheck,
      description: "LAA members",
    },
    {
      title: "Paid Engineers",
      value: engineers.filter(
        (item) => item.category === "Other than LAA"
      ).length,
      icon: Wallet,
      description: "Non-LAA members",
    },
    {
      title: "Pending",
      value: engineers.filter(
        (item) => item.status === "pending"
      ).length,
      icon: Clock,
      description: "Awaiting approval",
    },
    {
      title: "Approved",
      value: engineers.filter(
        (item) => item.status === "approved"
      ).length,
      icon: CheckCircle2,
      description: "Approved applications",
    },
    {
      title: "Rejected",
      value: engineers.filter(
        (item) => item.status === "rejected"
      ).length,
      icon: XCircle,
      description: "Rejected applications",
    },
  ];

  // Search and Filters

  const filteredEngineers = engineers.filter((item) => {
    const searchValue = search.trim().toLowerCase();

    const matchesSearch = [
      item.fullName,
      item.email,
      item.phone,
      item.regNumber,
      item.registrationId,
    ].some((value) =>
      String(value || "")
        .toLowerCase()
        .includes(searchValue)
    );

    const matchesCategory =
      categoryFilter === "all" ||
      item.category === categoryFilter;

    const matchesStatus =
      statusFilter === "all" ||
      item.status === statusFilter;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesStatus
    );
  });

  // Pagination

  const totalPages = Math.max(
    1,
    Math.ceil(filteredEngineers.length / itemsPerPage)
  );

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentEngineers = filteredEngineers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search, categoryFilter, statusFilter]);

  return (
    <div className="space-y-4">

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">

        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <p className="text-red-600 text-[11px] font-bold tracking-[2px] uppercase">
              LAF 3.0 • Engineer Management
            </p>
          </div>

          <h1 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-0.5">
            Engineers Management
          </h1>

          <p className="text-xs text-neutral-500 mt-0.5">
            Manage free and paid engineer registrations and applications
          </p>
        </div>

        <button
          onClick={fetchEngineers}
          disabled={loading}
          className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-lg text-xs font-semibold shadow-sm shadow-red-600/30 cursor-pointer disabled:opacity-50 transition-all hover:scale-[1.02] active:scale-95 shrink-0"
        >
          <RefreshCw
            size={15}
            className={loading ? "animate-spin" : ""}
          />
          Refresh Data
        </button>

      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3">

        {stats.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            value={loading || error ? "—" : item.value}
            icon={item.icon}
            description={item.description}
          />
        ))}

      </div>

      {/* Engineers Table */}
      <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm border-t-4 border-t-red-600">

        {/* Search and Filters */}
        <div className="p-3.5 sm:p-4 border-b border-neutral-100 bg-gradient-to-r from-red-50/30 via-white to-white">

          <div className="flex flex-col lg:flex-row gap-3">

            <div className="relative flex-1">

              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, email, phone, registration no. or ID..."
                className="w-full pl-9 pr-4 py-2 border border-neutral-200 rounded-lg text-xs outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 bg-neutral-50/60 hover:bg-white transition-all placeholder:text-neutral-400"
              />

            </div>

            <select
              value={categoryFilter}
              onChange={(e) =>
                setCategoryFilter(e.target.value)
              }
              className="border border-neutral-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 bg-neutral-50/60 hover:bg-white font-medium text-neutral-700 cursor-pointer transition-all"
            >
              <option value="all">All Categories</option>
              <option value="LAA Member">
                Free Engineers (LAA)
              </option>
              <option value="Other than LAA">
                Paid Engineers
              </option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value)
              }
              className="border border-neutral-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 bg-neutral-50/60 hover:bg-white font-medium text-neutral-700 cursor-pointer transition-all"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>

          </div>

        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full text-left text-sm whitespace-nowrap">

            <thead className="bg-neutral-900 text-neutral-200 text-xs font-semibold uppercase tracking-wider">

              <tr>

                {[
                  "Registration ID",
                  "Engineer Name",
                  "Contact",
                  "Registration No.",
                  "Category",
                  "Amount",
                  "Payment",
                  "Status",
                  "Date",
                  "Action",
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

              {loading ? (

                <tr>
                  <td colSpan={10} className="text-center py-12 text-neutral-400 text-sm">
                    Loading engineers...
                  </td>
                </tr>

              ) : error ? (

                <tr>
                  <td colSpan={10} className="text-center py-12 text-red-600 text-sm">
                    {error}
                    <button
                      onClick={fetchEngineers}
                      className="block mx-auto mt-2 font-semibold text-xs text-red-700 underline cursor-pointer"
                    >
                      Try Again
                    </button>
                  </td>
                </tr>

              ) : currentEngineers.length === 0 ? (

                <tr>
                  <td colSpan={10} className="text-center py-12 text-neutral-400 text-sm">
                    No engineers found.
                  </td>
                </tr>

              ) : (

                currentEngineers.map((item) => (

                  <tr
                    key={item._id}
                    className="hover:bg-red-50/20 transition-colors group"
                  >

                    {/* Registration ID */}
                    <td className="px-5 py-3">
                      <span
                        title={item.registrationId}
                        className="font-mono text-xs text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200 font-medium"
                      >
                        {item.registrationId?.slice(0, 16)}...
                      </span>
                    </td>

                    {/* Engineer Name */}
                    <td className="px-5 py-3 font-semibold text-neutral-900 group-hover:text-red-600 transition-colors">
                      {item.title} {item.fullName}
                    </td>

                    {/* Contact */}
                    <td className="px-5 py-3">
                      <p className="text-xs font-medium text-neutral-800">{item.email}</p>
                      <p className="text-[11px] text-neutral-400 font-mono mt-0.5">
                        {item.phone}
                      </p>
                    </td>

                    {/* Registration No. */}
                    <td className="px-5 py-3">
                      <span className="font-mono text-xs text-neutral-800 bg-neutral-50 px-2 py-0.5 rounded border border-neutral-200 font-semibold">
                        {item.regNumber}
                      </span>
                    </td>

                    {/* Category */}
                    <td className="px-5 py-3">
                      <div className="flex flex-col gap-0.5">
                        <span
                          className={`px-2.5 py-0.5 rounded-md text-xs font-semibold inline-block w-fit border ${
                            item.category === "LAA Member"
                              ? "bg-blue-50 text-blue-700 border-blue-200/80"
                              : "bg-rose-50 text-rose-700 border-rose-200/80"
                          }`}
                        >
                          {item.category === "LAA Member"
                            ? "Free (LAA)"
                            : "Paid"}
                        </span>
                        <span className="text-[10px] text-neutral-400 font-medium">
                          {item.category}
                        </span>
                      </div>
                    </td>

                    {/* Amount */}
                    <td className="px-5 py-3">
                      <span className="font-semibold text-xs text-neutral-900 bg-neutral-50 px-2 py-1 rounded border border-neutral-200/80">
                        ₹{Number(item.amount || 0).toLocaleString("en-IN")}
                      </span>
                    </td>

                    {/* Payment Status */}
                    <td className="px-5 py-3">
                      <StatusBadge status={item.paymentStatus} />
                    </td>

                    {/* Registration Status */}
                    <td className="px-5 py-3">
                      <StatusBadge status={item.status} />
                    </td>

                    {/* Registration Date */}
                    <td className="px-5 py-3 text-xs text-neutral-500 font-medium">
                      {new Date(item.createdAt).toLocaleDateString("en-IN")}
                    </td>

                    {/* Action Button */}
                    <td className="px-5 py-3">
                      <button
                        onClick={() => setSelectedEngineerId(item._id)}
                        className="flex items-center gap-1.5 text-white bg-red-600 hover:bg-red-700 shadow-sm shadow-red-600/20 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all hover:scale-105 active:scale-95"
                      >
                        <Eye size={13} />
                        View
                      </button>
                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 sm:p-4 border-t border-neutral-100 text-xs text-neutral-500">

          <p>
            Showing{" "}
            <span className="font-semibold text-neutral-800">
              {filteredEngineers.length === 0 ? 0 : startIndex + 1}
            </span>{" "}
            to{" "}
            <span className="font-semibold text-neutral-800">
              {Math.min(startIndex + itemsPerPage, filteredEngineers.length)}
            </span>{" "}
            of <span className="font-semibold text-neutral-800">{filteredEngineers.length}</span> engineers
          </p>

          <div className="flex items-center gap-2">

            <button
              onClick={() =>
                setCurrentPage((prev) => prev - 1)
              }
              disabled={currentPage === 1}
              className="border border-neutral-200 p-1.5 rounded-lg cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:border-red-300 hover:text-red-600 transition-colors"
            >
              <ChevronLeft size={16} />
            </button>

            <span className="bg-red-600 text-white font-semibold px-3 py-1 rounded-lg text-xs shadow-sm shadow-red-600/30">
              {currentPage}
            </span>

            <span className="text-xs text-neutral-400">
              of {totalPages}
            </span>

            <button
              onClick={() =>
                setCurrentPage((prev) => prev + 1)
              }
              disabled={currentPage >= totalPages}
              className="border border-neutral-200 p-1.5 rounded-lg cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:border-red-300 hover:text-red-600 transition-colors"
            >
              <ChevronRight size={16} />
            </button>

          </div>

        </div>

      </div>

      {/* Engineer Details Modal */}

      {selectedEngineerId && (
        <EngineerDetails
          key={selectedEngineerId}
          engineerId={selectedEngineerId}
          onClose={() => setSelectedEngineerId(null)}
          onUpdate={fetchEngineers}
        />
      )}

    </div>
  );
};

export default Engineers;
