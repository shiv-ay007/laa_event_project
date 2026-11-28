import { useEffect, useState } from "react";
import {
  Store,
  Clock,
  CheckCircle2,
  XCircle,
  Wallet,
  CreditCard,
  Search,
  Eye,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { getAllExhibitors } from "../api/exhibitorApi";
import StatCard from "../components/StatCard";
import StatusBadge from "../components/StatusBadge";
import ExhibitorDetails from "../components/ExhibitorDetails";

const Exhibitors = () => {
  const [exhibitors, setExhibitors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  // Search and Filters
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [stall, setStall] = useState("all");
  const [sector, setSector] = useState("all");
  const [status, setStatus] = useState("all");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);

  const itemsPerPage = 10;

  // Refresh State
  const [refreshKey, setRefreshKey] = useState(0);

  // Server Side Statistics
  const [statistics, setStatistics] = useState({
    totalExhibitors: 0,
    pendingApplications: 0,
    approvedApplications: 0,
    rejectedApplications: 0,
    verifiedPayments: 0,
    pendingPayments: 0,
  });

  // Search Debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search.trim());
      setCurrentPage(1);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  // Fetch Exhibitors From Backend
  useEffect(() => {
    let active = true;

    const loadExhibitors = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getAllExhibitors({
          page: currentPage,
          limit: itemsPerPage,
          search: debouncedSearch,
          stall,
          sector,
          status,
        });

        if (!active) return;

        if (response.data.success) {
          const { data, stats, pagination } = response.data;

          setExhibitors(data);
          setStatistics(stats);

          setTotalPages(pagination.totalPages);
          setTotalRecords(pagination.totalRecords);
          setCurrentPage(pagination.currentPage);
        } else {
          setError("Failed to fetch exhibitors");
        }
      } catch (err) {
        if (!active) return;

        console.log("Exhibitors Error:", err);
        setError(
          err.response?.data?.message || "Unable to fetch exhibitors"
        );
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    loadExhibitors();

    return () => {
      active = false;
    };
  }, [
    currentPage,
    debouncedSearch,
    stall,
    sector,
    status,
    refreshKey,
  ]);

  const fetchExhibitors = () => {
    setRefreshKey((prev) => prev + 1);
  };

  const stats = [
    {
      title: "Total Exhibitors",
      value: statistics.totalExhibitors,
      icon: Store,
      description: "All registrations",
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
    {
      title: "Verified Payments",
      value: statistics.verifiedPayments,
      icon: Wallet,
      description: "Verified transactions",
    },
    {
      title: "Pending Payments",
      value: statistics.pendingPayments,
      icon: CreditCard,
      description: "Awaiting verification",
    },
  ];

  const selectClass =
    "border border-neutral-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 bg-neutral-50/60 hover:bg-white font-medium text-neutral-700 cursor-pointer transition-all";

  const startRecord = totalRecords
    ? (currentPage - 1) * itemsPerPage + 1
    : 0;
  const endRecord = totalRecords
    ? Math.min((currentPage - 1) * itemsPerPage + exhibitors.length, totalRecords)
    : 0;

  const stallOptions = [
    "Executive Stall (9 sqm)",
    "Gold Stall (18 sqm)",
    "Platinum Pavilion (36 sqm)",
    "Custom Open Space / Sponsor Deck",
  ];

  const sectorOptions = [
    "Luxury Interiors & Decor",
    "Architectural Lighting & Automation",
    "Structural & Facade Materials",
    "Tiles, Bathware & Stone",
    "Furniture & Outdoor Solutions",
    "Green Building Tech & HVAC",
    "Other Premium Products",
  ];

  return (
    <div className="space-y-4">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <p className="text-red-600 text-[11px] font-bold tracking-[2px] uppercase">
              LAF 3.0 • Exhibitor Management
            </p>
          </div>

          <h1 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-0.5">
            Exhibitors Management
          </h1>

          <p className="text-xs text-neutral-500 mt-0.5">
            Manage exhibitor registrations, space requirements and stall bookings
          </p>
        </div>

        <button
          onClick={fetchExhibitors}
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
        {stats.map(({ title, value, icon, description }) => (
          <StatCard
            key={title}
            title={title}
            value={loading && !statistics.totalExhibitors ? "—" : value}
            icon={icon}
            description={description}
          />
        ))}
      </div>

      {/* Main Table Section */}
      <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm border-t-4 border-t-red-600">
        {/* Search and Filters */}
        <div className="p-3.5 sm:p-4 border-b border-neutral-100 bg-gradient-to-r from-red-50/30 via-white to-white flex flex-col lg:flex-row gap-3">
          <div className="relative flex-1 min-w-[200px]">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search company, contact person, email, phone or ID..."
              className="w-full pl-9 pr-4 py-2 border border-neutral-200 rounded-lg text-xs outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 bg-neutral-50/60 hover:bg-white transition-all placeholder:text-neutral-400"
            />
          </div>

          <div className="flex flex-wrap gap-2.5">
            <select
              aria-label="Stall type"
              value={stall}
              onChange={(e) => {
                setStall(e.target.value);
                setCurrentPage(1);
              }}
              className={selectClass}
            >
              <option value="all">All Stalls</option>
              {stallOptions.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>

            <select
              aria-label="Industry sector"
              value={sector}
              onChange={(e) => {
                setSector(e.target.value);
                setCurrentPage(1);
              }}
              className={selectClass}
            >
              <option value="all">All Sectors</option>
              {sectorOptions.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>

            <select
              aria-label="Application status"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
                setCurrentPage(1);
              }}
              className={selectClass}
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
                  "S.No.",
                  "Actions",
                  "Registration ID",
                  "Company",
                  "Contact",
                  "Industry Sector",
                  "Stall Type",
                  "Amount",
                  "Payment",
                  "Status",
                  "Date",
                ].map((h) => (
                  <th
                    key={h}
                    className={`px-4 py-3 font-semibold ${
                      h === "S.No." || h === "Actions" ? "text-center" : ""
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-neutral-100">
              {loading && !exhibitors.length ? (
                <tr>
                  <td
                    colSpan={11}
                    className="text-center py-12 text-neutral-400 text-sm"
                  >
                    Loading exhibitors...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td
                    colSpan={11}
                    className="text-center py-12 text-red-500 text-sm"
                  >
                    {error}
                  </td>
                </tr>
              ) : !exhibitors.length ? (
                <tr>
                  <td
                    colSpan={11}
                    className="text-center py-12 text-neutral-400 text-sm"
                  >
                    No exhibitors found.
                  </td>
                </tr>
              ) : (
                exhibitors.map((x, index) => (
                  <tr
                    key={x._id}
                    className="hover:bg-red-50/20 transition-colors group"
                  >
                    {/* S.No. */}
                    <td className="px-4 py-2.5 text-center text-xs font-mono font-medium text-neutral-500">
                      {(currentPage - 1) * itemsPerPage + index + 1}
                    </td>

                    {/* Action */}
                    <td className="px-4 py-2.5 text-center">
                      <button
                        onClick={() => setSelectedId(x._id)}
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
                        title={x.registrationId}
                        className="font-mono text-xs text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200 font-medium"
                      >
                        {x.registrationId}
                      </span>
                    </td>

                    {/* Company */}
                    <td className="px-4 py-2.5">
                      <p className="font-semibold text-neutral-900 group-hover:text-red-600 transition-colors text-sm">
                        {x.companyName}
                      </p>
                      <p className="text-[11px] text-neutral-400 mt-0.5">
                        {x.contactPerson}
                      </p>
                    </td>

                    {/* Contact */}
                    <td className="px-4 py-2.5">
                      <p className="text-xs font-medium text-neutral-800">
                        {x.email}
                      </p>
                      <p className="text-[11px] text-neutral-400 font-mono mt-0.5">
                        {x.phone}
                      </p>
                    </td>

                    {/* Industry Sector */}
                    <td className="px-4 py-2.5">
                      <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200/80 inline-block">
                        {x.industrySector}
                      </span>
                    </td>

                    {/* Stall Type */}
                    <td className="px-4 py-2.5">
                      <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-neutral-50 text-neutral-700 border border-neutral-200/80 inline-block">
                        {x.spaceRequired}
                      </span>
                    </td>

                    {/* Amount */}
                    <td className="px-4 py-2.5">
                      <span className="font-semibold text-xs text-neutral-900 bg-neutral-50 px-2 py-1 rounded border border-neutral-200/80">
                        {x.amount == null
                          ? "Not set"
                          : `₹${Number(x.amount).toLocaleString("en-IN")}`}
                      </span>
                    </td>

                    {/* Payment Status */}
                    <td className="px-4 py-2.5">
                      <StatusBadge status={x.paymentStatus} />
                    </td>

                    {/* Registration Status */}
                    <td className="px-4 py-2.5">
                      <StatusBadge status={x.status} />
                    </td>

                    {/* Registration Date */}
                    <td className="px-4 py-2.5 text-xs text-neutral-500 font-medium">
                      {new Date(x.createdAt).toLocaleDateString("en-IN")}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalRecords > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 sm:p-4 border-t border-neutral-100 text-xs text-neutral-500">
            <p>
              Showing{" "}
              <span className="font-semibold text-neutral-800">
                {startRecord}
              </span>{" "}
              to{" "}
              <span className="font-semibold text-neutral-800">
                {endRecord}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-neutral-800">
                {totalRecords}
              </span>{" "}
              exhibitors
            </p>

            <div className="flex items-center gap-2">
              <button
                aria-label="Previous page"
                disabled={currentPage <= 1 || loading}
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
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
                aria-label="Next page"
                disabled={currentPage >= totalPages || loading}
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                className="border border-neutral-200 p-1.5 rounded-lg cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:border-red-300 hover:text-red-600 transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Exhibitor Details Modal */}
      {selectedId && (
        <ExhibitorDetails
          key={selectedId}
          exhibitorId={selectedId}
          onClose={() => setSelectedId(null)}
          onUpdate={fetchExhibitors}
        />
      )}
    </div>
  );
};

export default Exhibitors;
