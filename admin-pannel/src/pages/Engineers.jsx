
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

import { getAllEngineers } from "../api/engineerApi";
import StatCard from "../components/StatCard";
import StatusBadge from "../components/StatusBadge";
import EngineerDetails from "../components/EngineerDetails";

const Engineers = () => {

  // States
  const [engineers, setEngineers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedEngineerId, setSelectedEngineerId] =
    useState(null);

  // Search and Filters
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);

  const itemsPerPage = 10;

  // Refresh State
  const [refreshKey, setRefreshKey] = useState(0);

  // Server Side Statistics
  const [statistics, setStatistics] = useState({
    totalEngineers: 0,
    freeEngineers: 0,
    paidEngineers: 0,
    pendingApplications: 0,
    approvedApplications: 0,
    rejectedApplications: 0,
  });

  // Search Debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search.trim());
      setCurrentPage(1);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  // Server Side Data Fetching
  useEffect(() => {
    let active = true;

    const loadEngineers = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getAllEngineers({
          page: currentPage,
          limit: itemsPerPage,
          search: debouncedSearch,
          category: categoryFilter,
          status: statusFilter,
        });

        if (!active) return;

        if (response.data.success) {

          const {
            data,
            stats,
            pagination,
          } = response.data;

          setEngineers(data);
          setStatistics(stats);

          setTotalRecords(pagination.totalRecords);
          setTotalPages(pagination.totalPages);
          setCurrentPage(pagination.currentPage);

        } else {
          setError("Unable to fetch engineers");
        }

      } catch (error) {

        if (!active) return;

        console.log("Engineers Error:", error);

        setError(
          error.response?.data?.message ||
          "Failed to fetch engineers"
        );

      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    loadEngineers();

    return () => {
      active = false;
    };

  }, [
    currentPage,
    debouncedSearch,
    categoryFilter,
    statusFilter,
    refreshKey,
  ]);

  // Refresh Engineers
  const fetchEngineers = () => {
    setRefreshKey((prev) => prev + 1);
  };

  // Statistics Cards
  const stats = [
    {
      title: "Total Engineers",
      value: statistics.totalEngineers,
      icon: Users,
      description: "All registered engineers",
    },
    {
      title: "Free Engineers",
      value: statistics.freeEngineers,
      icon: UserCheck,
      description: "LAA members",
    },
    {
      title: "Paid Engineers",
      value: statistics.paidEngineers,
      icon: Wallet,
      description: "Non-LAA members",
    },
    {
      title: "Pending",
      value: statistics.pendingApplications,
      icon: Clock,
      description: "Awaiting approval",
    },
    {
      title: "Approved",
      value: statistics.approvedApplications,
      icon: CheckCircle2,
      description: "Approved applications",
    },
    {
      title: "Rejected",
      value: statistics.rejectedApplications,
      icon: XCircle,
      description: "Rejected applications",
    },
  ];

  // Pagination Starting Index
  const startIndex = (currentPage - 1) * itemsPerPage;
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
              onChange={(e) => {
                setCategoryFilter(e.target.value);
                setCurrentPage(1);
              }}
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
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
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

                {/* S.No. (Sticky) */}
                <th className="sticky left-0 z-20 bg-neutral-900 w-14 min-w-[56px] px-3 py-3 font-semibold text-center border-r border-neutral-800">
                  S.No.
                </th>

                {/* Actions (Sticky) */}
                <th className="sticky left-[56px] z-20 bg-neutral-900 w-20 min-w-[72px] px-3 py-3 font-semibold text-center border-r border-neutral-800 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.4)]">
                  Actions
                </th>

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
                ].map((heading) => (
                  <th
                    key={heading}
                    className="px-4 py-3 font-semibold"
                  >
                    {heading}
                  </th>
                ))}

              </tr>

            </thead>

            <tbody className="divide-y divide-neutral-100">

              {loading ? (

                <tr>
                  <td colSpan={11} className="text-center py-12 text-neutral-400 text-sm">
                    Loading engineers...
                  </td>
                </tr>

              ) : error ? (

                <tr>
                  <td colSpan={11} className="text-center py-12 text-red-600 text-sm">
                    {error}
                    <button
                      onClick={fetchEngineers}
                      className="block mx-auto mt-2 font-semibold text-xs text-red-700 underline cursor-pointer"
                    >
                      Try Again
                    </button>
                  </td>
                </tr>

             ) : engineers.length === 0 ? (

                <tr>
                  <td colSpan={11} className="text-center py-12 text-neutral-400 text-sm">
                    No engineers found.
                  </td>
                </tr>

              ) : (

                engineers.map((item, index) => (

                  <tr
                    key={item._id}
                    className="hover:bg-red-50/20 transition-colors group"
                  >

                    {/* S.No. (Sticky) */}
                    <td className="sticky left-0 z-10 bg-white group-hover:bg-red-50/50 w-14 min-w-[56px] px-3 py-2.5 text-center text-xs font-mono font-medium text-neutral-500 border-r border-neutral-100 transition-colors">
                      {startIndex + index + 1}
                    </td>

                    {/* Action Button (Sticky) */}
                    <td className="sticky left-[56px] z-10 bg-white group-hover:bg-red-50/50 w-20 min-w-[72px] px-3 py-2.5 text-center border-r border-neutral-100 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.06)] transition-colors">
                      <button
                        onClick={() => setSelectedEngineerId(item._id)}
                        title="View Details"
                        aria-label="View Details"
                        className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-red-600 hover:bg-red-700 text-white shadow-xs shadow-red-600/30 cursor-pointer transition-all hover:scale-105 active:scale-95"
                      >
                        <Eye size={15} />
                      </button>
                    </td>

                    {/* Registration ID */}
                    <td className="px-4 py-2.5">
                      <span
                        title={item.registrationId}
                        className="font-mono text-xs text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200 font-medium"
                      >
                        {item.registrationId?.slice(0, 16)}...
                      </span>
                    </td>

                    {/* Engineer Name */}
                    <td className="px-4 py-2.5 font-semibold text-neutral-900 group-hover:text-red-600 transition-colors">
                      {item.title} {item.fullName}
                    </td>

                    {/* Contact */}
                    <td className="px-4 py-2.5">
                      <p className="text-xs font-medium text-neutral-800">{item.email}</p>
                      <p className="text-[11px] text-neutral-400 font-mono mt-0.5">
                        {item.phone}
                      </p>
                    </td>

                    {/* Registration No. */}
                    <td className="px-4 py-2.5">
                      <span className="font-mono text-xs text-neutral-800 bg-neutral-50 px-2 py-0.5 rounded border border-neutral-200 font-semibold">
                        {item.regNumber}
                      </span>
                    </td>

                    {/* Category */}
                    <td className="px-4 py-2.5">
                      <div className="flex flex-col gap-0.5">
                        <span
                          className={`px-2.5 py-0.5 rounded-md text-xs font-semibold inline-block w-fit border ${item.category === "LAA Member"
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
                    <td className="px-4 py-2.5">
                      <span className="font-semibold text-xs text-neutral-900 bg-neutral-50 px-2 py-1 rounded border border-neutral-200/80">
                        ₹{Number(item.amount || 0).toLocaleString("en-IN")}
                      </span>
                    </td>

                    {/* Payment Status */}
                    <td className="px-4 py-2.5">
                      <StatusBadge status={item.paymentStatus} />
                    </td>

                    {/* Registration Status */}
                    <td className="px-4 py-2.5">
                      <StatusBadge status={item.status} />
                    </td>

                    {/* Registration Date */}
                    <td className="px-4 py-2.5 text-xs text-neutral-500 font-medium">
                      {new Date(item.createdAt).toLocaleDateString("en-IN")}
                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

        {/* Pagination */}
         {/* Pagination */}
{!loading && !error && (

  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 sm:p-4 border-t border-neutral-100 text-xs text-neutral-500">

    <p>
      Showing{" "}

      <span className="font-semibold text-neutral-800">
        {totalRecords === 0 ? 0 : startIndex + 1}
      </span>

      {" "}to{" "}

      <span className="font-semibold text-neutral-800">
        {Math.min(
          startIndex + engineers.length,
          totalRecords
        )}
      </span>

      {" "}of{" "}

      <span className="font-semibold text-neutral-800">
        {totalRecords}
      </span>

      {" "}engineers
    </p>

    <div className="flex items-center gap-2">

      {/* Previous Button */}
      <button
        onClick={() =>
          setCurrentPage((prev) => prev - 1)
        }
        disabled={currentPage <= 1 || loading}
        className="border border-neutral-200 p-1.5 rounded-lg cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:border-red-300 hover:text-red-600 transition-colors"
      >
        <ChevronLeft size={16} />
      </button>

      {/* Current Page */}
      <span className="bg-red-600 text-white font-semibold px-3 py-1 rounded-lg text-xs shadow-sm shadow-red-600/30">
        {currentPage}
      </span>

      {/* Total Pages */}
      <span className="text-xs text-neutral-400">
        of {totalPages}
      </span>

      {/* Next Button */}
      <button
        onClick={() =>
          setCurrentPage((prev) => prev + 1)
        }
        disabled={currentPage >= totalPages || loading}
        className="border border-neutral-200 p-1.5 rounded-lg cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:border-red-300 hover:text-red-600 transition-colors"
      >
        <ChevronRight size={16} />
      </button>

    </div>

  </div>

)}

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
