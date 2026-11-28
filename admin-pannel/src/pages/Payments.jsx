import { useEffect, useState } from "react";
import {
  Wallet,
  Clock,
  CheckCircle2,
  XCircle,
  Search,
  RefreshCw,
  Eye,
  Building2,
  HardHat,
  Store,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { getAllPayments } from "../api/paymentApi";
import StatCard from "../components/StatCard";
import StatusBadge from "../components/StatusBadge";
import PaymentDetails from "../components/PaymentDetails";

const Payments = () => {
  const [payments, setPayments] = useState([]);

  const [stats, setStats] = useState({
    totalPayments: 0,
    verifiedPayments: 0,
    pendingPayments: 0,
    rejectedPayments: 0,
  });

  const [categoryStats, setCategoryStats] = useState({
    architects: 0,
    engineers: 0,
    exhibitors: 0,
  });

  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 0,
    totalRecords: 0,
    limit: 10,
  });

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [paymentStatus, setPaymentStatus] = useState("all");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  // Search Debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  // Fetch Payments From Backend
  useEffect(() => {
    let active = true;

    const fetchPayments = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getAllPayments({
          page,
          limit: 10,
          search: debouncedSearch,
          category,
          paymentStatus,
        });

        if (!active) return;

        setPayments(response.data.data);
        setStats(response.data.stats);
        setCategoryStats(response.data.categoryStats);
        setPagination(response.data.pagination);
      } catch (err) {
        if (!active) return;

        setError(
          err.response?.data?.message ||
            "Failed to fetch payments data"
        );
      } finally {
        if (active) setLoading(false);
      }
    };

    fetchPayments();

    return () => {
      active = false;
    };
  }, [page, debouncedSearch, category, paymentStatus, refreshKey]);

  // Refresh Payments
  const refreshPayments = () => {
    setRefreshKey((prev) => prev + 1);
  };

  // Format Amount
  const formatAmount = (amount) => {
    if (amount === null || amount === undefined) {
      return "Not set";
    }

    return `₹${Number(amount).toLocaleString("en-IN")}`;
  };

  // Format Date
  const formatDate = (date) => {
    if (!date) return "—";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // Statistics Cards List
  const statsList = [
    {
      title: "Total Payments",
      value: stats.totalPayments,
      icon: Wallet,
      description: "All payment records",
    },
    {
      title: "Pending",
      value: stats.pendingPayments,
      icon: Clock,
      description: "Awaiting verification",
    },
    {
      title: "Verified",
      value: stats.verifiedPayments,
      icon: CheckCircle2,
      description: "Verified transactions",
    },
    {
      title: "Rejected",
      value: stats.rejectedPayments,
      icon: XCircle,
      description: "Verification rejected",
    },
    {
      title: "Architects",
      value: categoryStats.architects,
      icon: Building2,
      description: "Architect entries",
    },
    {
      title: "Engineers",
      value: categoryStats.engineers,
      icon: HardHat,
      description: "Engineer entries",
    },
    {
      title: "Exhibitors",
      value: categoryStats.exhibitors,
      icon: Store,
      description: "Exhibitor entries",
    },
  ];

  const selectClass =
    "border border-neutral-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 bg-neutral-50/60 hover:bg-white font-medium text-neutral-700 cursor-pointer transition-all";

  const startRecord = pagination.totalRecords
    ? (pagination.currentPage - 1) * pagination.limit + 1
    : 0;
  const endRecord = pagination.totalRecords
    ? Math.min(
        (pagination.currentPage - 1) * pagination.limit + payments.length,
        pagination.totalRecords
      )
    : 0;

  return (
    <div className="space-y-4">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <p className="text-red-600 text-[11px] font-bold tracking-[2px] uppercase">
              LAF 3.0 • Payment Management
            </p>
          </div>

          <h1 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-0.5">
            Payments Management
          </h1>

          <p className="text-xs text-neutral-500 mt-0.5">
            Track, review and verify registration payments and transactions
          </p>
        </div>

        <button
          onClick={refreshPayments}
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
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
        {statsList.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            value={loading && !stats.totalPayments ? "—" : item.value}
            icon={item.icon}
            description={item.description}
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
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search applicant name, email, registration ID or transaction ID..."
              className="w-full pl-9 pr-4 py-2 border border-neutral-200 rounded-lg text-xs outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 bg-neutral-50/60 hover:bg-white transition-all placeholder:text-neutral-400"
            />
          </div>

          <div className="flex flex-wrap gap-2.5">
            <select
              aria-label="Filter by category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setPage(1);
              }}
              className={selectClass}
            >
              <option value="all">All Categories</option>
              <option value="Architect">Architects</option>
              <option value="Engineer">Engineers</option>
              <option value="Exhibitor">Exhibitors</option>
            </select>

            <select
              aria-label="Filter by status"
              value={paymentStatus}
              onChange={(e) => {
                setPaymentStatus(e.target.value);
                setPage(1);
              }}
              className={selectClass}
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="verified">Verified</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        {/* Payment Table */}
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
                  "Applicant",
                  "Category",
                  "Transaction ID",
                  "Amount",
                  "Payment Date",
                  "Status",
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
                  <td colSpan={9} className="text-center py-12 text-neutral-400 text-sm">
                    <RefreshCw
                      size={20}
                      className="mx-auto mb-2 animate-spin text-red-600"
                    />
                    Loading payments...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td
                    colSpan={9}
                    className="text-center py-12 text-red-600 text-sm"
                  >
                    {error}
                  </td>
                </tr>
              ) : payments.length === 0 ? (
                <tr>
                  <td colSpan={9} className="text-center py-12 text-neutral-400 text-sm">
                    <Wallet
                      size={32}
                      className="mx-auto mb-2 text-neutral-300"
                    />
                    <p className="font-medium text-neutral-700">No payment records found</p>
                    <p className="mt-1 text-xs text-neutral-400">
                      Try adjusting your search query or filters.
                    </p>
                  </td>
                </tr>
              ) : (
                payments.map((payment, index) => (
                  <tr
                    key={`${payment.type}-${payment._id}`}
                    className="hover:bg-red-50/20 transition-colors group"
                  >
                    {/* S.No. (Sticky) */}
                    <td className="sticky left-0 z-10 bg-white group-hover:bg-red-50/50 w-14 min-w-[56px] px-3 py-2.5 text-center text-xs font-mono font-medium text-neutral-500 border-r border-neutral-100 transition-colors">
                      {(pagination.currentPage - 1) * pagination.limit + index + 1}
                    </td>

                    {/* Action (Sticky) */}
                    <td className="sticky left-[56px] z-10 bg-white group-hover:bg-red-50/50 w-20 min-w-[72px] px-3 py-2.5 text-center border-r border-neutral-100 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.06)] transition-colors">
                      <button
                        onClick={() => setSelectedPayment(payment)}
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
                        title={payment.registrationId}
                        className="font-mono text-xs text-neutral-700 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200 font-medium"
                      >
                        {payment.registrationId || "—"}
                      </span>
                    </td>

                    {/* Applicant */}
                    <td className="px-4 py-2.5">
                      <p className="font-semibold text-neutral-900 group-hover:text-red-600 transition-colors text-sm">
                        {payment.name || "—"}
                      </p>
                      <p className="text-[11px] text-neutral-400 mt-0.5">
                        {payment.email || "—"}
                      </p>
                    </td>

                    {/* Category */}
                    <td className="px-4 py-2.5">
                      <span
                        className={`px-2.5 py-0.5 rounded-md text-xs font-semibold inline-flex items-center gap-1.5 border ${
                          payment.type === "Architect"
                            ? "bg-red-50 text-red-700 border-red-200/80"
                            : payment.type === "Engineer"
                            ? "bg-blue-50 text-blue-700 border-blue-200/80"
                            : "bg-purple-50 text-purple-700 border-purple-200/80"
                        }`}
                      >
                        {payment.type === "Architect" && <Building2 size={12} />}
                        {payment.type === "Engineer" && <HardHat size={12} />}
                        {payment.type === "Exhibitor" && <Store size={12} />}
                        {payment.type}
                      </span>
                    </td>

                    {/* Transaction ID */}
                    <td className="px-4 py-2.5">
                      {payment.txnId ? (
                        <span
                          title={payment.txnId}
                          className="font-mono text-xs text-neutral-700 bg-neutral-50 px-2 py-0.5 rounded border border-neutral-200/80 font-medium"
                        >
                          {payment.txnId}
                        </span>
                      ) : (
                        <span className="text-xs text-neutral-400 italic">Not set</span>
                      )}
                    </td>

                    {/* Amount */}
                    <td className="px-4 py-2.5">
                      <span className="font-semibold text-xs text-neutral-900 bg-neutral-50 px-2.5 py-1 rounded border border-neutral-200/80">
                        {formatAmount(payment.amount)}
                      </span>
                    </td>

                    {/* Payment Date */}
                    <td className="px-4 py-2.5 text-xs text-neutral-500 font-medium">
                      {formatDate(payment.paymentDate)}
                    </td>

                    {/* Status Badge */}
                    <td className="px-4 py-2.5">
                      <StatusBadge status={payment.paymentStatus} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {pagination.totalRecords > 0 && (
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
                {pagination.totalRecords}
              </span>{" "}
              payments
            </p>

            <div className="flex items-center gap-2">
              <button
                aria-label="Previous page"
                disabled={page <= 1 || loading}
                onClick={() => setPage((prev) => prev - 1)}
                className="border border-neutral-200 p-1.5 rounded-lg cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:border-red-300 hover:text-red-600 transition-colors"
              >
                <ChevronLeft size={16} />
              </button>

              <span className="bg-red-600 text-white font-semibold px-3 py-1 rounded-lg text-xs shadow-sm shadow-red-600/30">
                {page}
              </span>

              <span className="text-xs text-neutral-400">
                of {Math.max(1, pagination.totalPages)}
              </span>

              <button
                aria-label="Next page"
                disabled={
                  page >= pagination.totalPages || loading
                }
                onClick={() => setPage((prev) => prev + 1)}
                className="border border-neutral-200 p-1.5 rounded-lg cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:border-red-300 hover:text-red-600 transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Payment Details Drawer / Modal */}
      {selectedPayment && (
        <PaymentDetails
          key={`${selectedPayment.type}-${selectedPayment._id}`}
          payment={selectedPayment}
          onClose={() => setSelectedPayment(null)}
          onUpdate={refreshPayments}
        />
      )}
    </div>
  );
};

export default Payments;
