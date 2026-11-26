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

import api from "../services/api";
import StatCard from "../components/StatCard";
import StatusBadge from "../components/StatusBadge";
import ExhibitorDetails from "../components/ExhibitorDetails";

const Exhibitors = () => {
  const [exhibitors, setExhibitors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [stall, setStall] = useState("all");
  const [sector, setSector] = useState("all");
  const [status, setStatus] = useState("all");
  const [page, setPage] = useState(1);
  const [selectedId, setSelectedId] = useState(null);

  const fetchExhibitors = async () => {
    setLoading(true);
    setError("");
    try {
      const { data } = await api.get("/exhibitors");
      if (!data.success) throw new Error(data.message);
      setExhibitors(data.data);
      setPage(1);
    } catch (err) {
      setError(err.response?.data?.message || "Unable to fetch exhibitors");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExhibitors();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [search, stall, sector, status]);

  const stats = [
    ["Total Exhibitors", exhibitors.length, Store, "All registrations"],
    [
      "Pending",
      exhibitors.filter((x) => x.status === "pending").length,
      Clock,
      "Awaiting approval",
    ],
    [
      "Approved",
      exhibitors.filter((x) => x.status === "approved").length,
      CheckCircle2,
      "Approved applications",
    ],
    [
      "Rejected",
      exhibitors.filter((x) => x.status === "rejected").length,
      XCircle,
      "Rejected applications",
    ],
    [
      "Verified Payments",
      exhibitors.filter((x) => x.paymentStatus === "verified").length,
      Wallet,
      "Verified transactions",
    ],
    [
      "Pending Payments",
      exhibitors.filter((x) => x.paymentStatus === "pending").length,
      CreditCard,
      "Awaiting verification",
    ],
  ];

  const filtered = exhibitors.filter(
    (x) =>
      [
        x.companyName,
        x.contactPerson,
        x.email,
        x.phone,
        x.registrationId,
      ].some((v) =>
        String(v || "")
          .toLowerCase()
          .includes(search.trim().toLowerCase())
      ) &&
      (stall === "all" || x.spaceRequired === stall) &&
      (sector === "all" || x.industrySector === sector) &&
      (status === "all" || x.status === status)
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / 10));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * 10;

  const selectClass =
    "border border-neutral-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 bg-neutral-50/60 hover:bg-white font-medium text-neutral-700 cursor-pointer transition-all";

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
        {stats.map(([title, value, icon, description]) => (
          <StatCard
            key={title}
            title={title}
            value={loading || error ? "—" : value}
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
              onChange={(e) => setStall(e.target.value)}
              className={selectClass}
            >
              <option value="all">All Stalls</option>
              {[
                ...new Set(
                  exhibitors.map((x) => x.spaceRequired).filter(Boolean)
                ),
              ].map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>

            <select
              aria-label="Industry sector"
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              className={selectClass}
            >
              <option value="all">All Sectors</option>
              {[
                ...new Set(
                  exhibitors.map((x) => x.industrySector).filter(Boolean)
                ),
              ].map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>

            <select
              aria-label="Application status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
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
                  "Registration ID",
                  "Company",
                  "Contact",
                  "Industry Sector",
                  "Stall Type",
                  "Amount",
                  "Payment",
                  "Status",
                  "Date",
                  "Action",
                ].map((h) => (
                  <th key={h} className="px-5 py-3 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-neutral-100">
              {loading || error || !filtered.length ? (
                <tr>
                  <td
                    colSpan={10}
                    className="text-center py-12 text-neutral-400 text-sm"
                  >
                    {loading
                      ? "Loading exhibitors..."
                      : error || "No exhibitors found."}
                  </td>
                </tr>
              ) : (
                filtered.slice(start, start + 10).map((x) => (
                  <tr
                    key={x._id}
                    className="hover:bg-red-50/20 transition-colors group"
                  >
                    {/* Registration ID */}
                    <td className="px-5 py-3">
                      <span
                        title={x.registrationId}
                        className="font-mono text-xs text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200 font-medium"
                      >
                        {x.registrationId?.slice(0, 16)}...
                      </span>
                    </td>

                    {/* Company */}
                    <td className="px-5 py-3">
                      <p className="font-semibold text-neutral-900 group-hover:text-red-600 transition-colors text-sm">
                        {x.companyName}
                      </p>
                      <p className="text-[11px] text-neutral-400 mt-0.5">
                        {x.contactPerson}
                      </p>
                    </td>

                    {/* Contact */}
                    <td className="px-5 py-3">
                      <p className="text-xs font-medium text-neutral-800">
                        {x.email}
                      </p>
                      <p className="text-[11px] text-neutral-400 font-mono mt-0.5">
                        {x.phone}
                      </p>
                    </td>

                    {/* Industry Sector */}
                    <td className="px-5 py-3">
                      <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200/80 inline-block">
                        {x.industrySector}
                      </span>
                    </td>

                    {/* Stall Type */}
                    <td className="px-5 py-3">
                      <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-neutral-50 text-neutral-700 border border-neutral-200/80 inline-block">
                        {x.spaceRequired}
                      </span>
                    </td>

                    {/* Amount */}
                    <td className="px-5 py-3">
                      <span className="font-semibold text-xs text-neutral-900 bg-neutral-50 px-2 py-1 rounded border border-neutral-200/80">
                        {x.amount == null
                          ? "Not set"
                          : `₹${Number(x.amount).toLocaleString("en-IN")}`}
                      </span>
                    </td>

                    {/* Payment Status */}
                    <td className="px-5 py-3">
                      <StatusBadge status={x.paymentStatus} />
                    </td>

                    {/* Registration Status */}
                    <td className="px-5 py-3">
                      <StatusBadge status={x.status} />
                    </td>

                    {/* Registration Date */}
                    <td className="px-5 py-3 text-xs text-neutral-500 font-medium">
                      {new Date(x.createdAt).toLocaleDateString("en-IN")}
                    </td>

                    {/* Action */}
                    <td className="px-5 py-3">
                      <button
                        onClick={() => setSelectedId(x._id)}
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
        {filtered.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 sm:p-4 border-t border-neutral-100 text-xs text-neutral-500">
            <p>
              Showing{" "}
              <span className="font-semibold text-neutral-800">
                {filtered.length ? start + 1 : 0}
              </span>{" "}
              to{" "}
              <span className="font-semibold text-neutral-800">
                {Math.min(start + 10, filtered.length)}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-neutral-800">
                {filtered.length}
              </span>{" "}
              exhibitors
            </p>

            <div className="flex items-center gap-2">
              <button
                aria-label="Previous page"
                disabled={currentPage === 1}
                onClick={() => setPage(currentPage - 1)}
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
                disabled={currentPage >= totalPages}
                onClick={() => setPage(currentPage + 1)}
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
