import { useEffect, useState } from "react";
import {
  Mail,
  Search,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Calendar,
  Phone,
  User,
  X,
} from "lucide-react";

import { getAllContacts } from "../api/contactApi";
import StatCard from "../components/StatCard";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Search
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const itemsPerPage = 10;

  // Refresh State
  const [refreshKey, setRefreshKey] = useState(0);

  // Statistics
  const [totalEnquiries, setTotalEnquiries] = useState(0);

  // Selected Message Modal
  const [selectedContact, setSelectedContact] = useState(null);

  // Search Debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search.trim());
      setCurrentPage(1);
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  // Fetch Contacts From Backend
  useEffect(() => {
    let active = true;

    const loadContacts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await getAllContacts({
          page: currentPage,
          limit: itemsPerPage,
          search: debouncedSearch,
        });

        if (!active) return;

        if (response.data.success) {
          const { data, stats, pagination } = response.data;

          setContacts(data);
          setTotalEnquiries(stats.totalEnquiries);
          setTotalPages(pagination.totalPages);
          setTotalRecords(pagination.totalRecords);
          setCurrentPage(pagination.currentPage);
        } else {
          setError("Failed to fetch contact enquiries");
        }
      } catch (err) {
        if (!active) return;

        console.error("Contacts Error:", err);
        setError(
          err.response?.data?.message || "Unable to fetch contact enquiries"
        );
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    loadContacts();

    return () => {
      active = false;
    };
  }, [currentPage, debouncedSearch, refreshKey]);

  const fetchContacts = () => {
    setRefreshKey((prev) => prev + 1);
  };

  const startRecord = totalRecords
    ? (currentPage - 1) * itemsPerPage + 1
    : 0;
  const endRecord = totalRecords
    ? Math.min((currentPage - 1) * itemsPerPage + contacts.length, totalRecords)
    : 0;

  const formatDate = (dateString) => {
    if (!dateString) return "—";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="space-y-4">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <p className="text-red-600 text-[11px] font-bold tracking-[2px] uppercase">
              LAF 3.0 • Contact Enquiries
            </p>
          </div>

          <h1 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-0.5">
            Contact Enquiries
          </h1>

          <p className="text-xs text-neutral-500 mt-0.5">
            View all visitor messages and inquiries submitted via the Get In Touch form
          </p>
        </div>

        <button
          onClick={fetchContacts}
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

      {/* Statistics Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <StatCard
          title="Total Enquiries"
          value={loading && !totalEnquiries ? "—" : totalEnquiries}
          icon={MessageSquare}
          description="All submitted messages"
        />
      </div>

      {/* Main Table Section */}
      <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm border-t-4 border-t-red-600">
        {/* Search */}
        <div className="p-3.5 sm:p-4 border-b border-neutral-100 bg-gradient-to-r from-red-50/30 via-white to-white flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by first name, contact number, email, or message..."
              className="w-full pl-9 pr-4 py-2 border border-neutral-200 rounded-lg text-xs outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 bg-neutral-50/60 hover:bg-white transition-all placeholder:text-neutral-400"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-neutral-900 text-neutral-200 text-xs font-semibold uppercase tracking-wider">
              <tr>
                {[
                  "First Name",
                  "Contact Number",
                  "Email",
                  "Message",
                  "Submission Date",
                ].map((header) => (
                  <th key={header} className="px-5 py-3 font-semibold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-neutral-100">
              {loading && !contacts.length ? (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center py-12 text-neutral-400 text-sm"
                  >
                    Loading enquiries...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center py-12 text-red-500 text-sm"
                  >
                    {error}
                  </td>
                </tr>
              ) : !contacts.length ? (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center py-12 text-neutral-400 text-sm"
                  >
                    No contact enquiries found.
                  </td>
                </tr>
              ) : (
                contacts.map((item) => (
                  <tr
                    key={item._id}
                    className="hover:bg-red-50/20 transition-colors group"
                  >
                    {/* First Name */}
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold uppercase shrink-0">
                          {item.firstName?.charAt(0) || "U"}
                        </div>
                        <p className="font-semibold text-neutral-900 text-sm group-hover:text-red-600 transition-colors">
                          {item.firstName}
                        </p>
                      </div>
                    </td>

                    {/* Contact Number */}
                    <td className="px-5 py-3.5">
                      {item.contactNumber ? (
                        <span className="font-mono text-xs text-neutral-800 bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">
                          {item.contactNumber}
                        </span>
                      ) : (
                        <span className="text-xs text-neutral-400 italic">
                          Not provided
                        </span>
                      )}
                    </td>

                    {/* Email */}
                    <td className="px-5 py-3.5">
                      <a
                        href={`mailto:${item.email}`}
                        className="text-xs font-medium text-neutral-800 hover:text-red-600 transition-colors"
                      >
                        {item.email}
                      </a>
                    </td>

                    {/* Message */}
                    <td className="px-5 py-3.5 max-w-xs sm:max-w-md">
                      <div
                        onClick={() => setSelectedContact(item)}
                        title="Click to view full message"
                        className="text-xs text-neutral-600 hover:text-neutral-900 cursor-pointer truncate"
                      >
                        {item.message}
                      </div>
                    </td>

                    {/* Submission Date */}
                    <td className="px-5 py-3.5 text-xs text-neutral-500 font-medium whitespace-nowrap">
                      {formatDate(item.createdAt)}
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
              enquiries
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

      {/* Message Detail View Modal (Read-Only) */}
      {selectedContact && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl overflow-hidden border border-neutral-200 animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50">
              <div className="flex items-center gap-2">
                <MessageSquare size={18} className="text-red-600" />
                <h3 className="font-bold text-neutral-900 text-sm">
                  Enquiry Details
                </h3>
              </div>
              <button
                onClick={() => setSelectedContact(null)}
                className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                    <User size={13} />
                    First Name
                  </p>
                  <p className="text-sm font-semibold text-neutral-900 mt-1">
                    {selectedContact.firstName}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Phone size={13} />
                    Contact Number
                  </p>
                  <p className="text-sm font-semibold text-neutral-900 mt-1">
                    {selectedContact.contactNumber || "—"}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Mail size={13} />
                  Email
                </p>
                <p className="text-sm font-semibold text-neutral-900 mt-1">
                  <a
                    href={`mailto:${selectedContact.email}`}
                    className="text-red-600 hover:underline"
                  >
                    {selectedContact.email}
                  </a>
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar size={13} />
                  Submission Date
                </p>
                <p className="text-xs text-neutral-600 mt-1 font-medium">
                  {formatDate(selectedContact.createdAt)}
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">
                  Message
                </p>
                <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200 text-xs text-neutral-800 leading-relaxed whitespace-pre-wrap max-h-60 overflow-y-auto">
                  {selectedContact.message}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 bg-neutral-50 border-t border-neutral-200 flex justify-end">
              <button
                onClick={() => setSelectedContact(null)}
                className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg text-xs font-semibold cursor-pointer transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
