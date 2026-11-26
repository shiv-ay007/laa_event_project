import { useState, useEffect } from "react";

import {
    Users,
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
import ArchitectDetails from "../components/ArchitectDetails";

const Architects = () => {

    // States

    const [architects, setArchitects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedArchitectId, setSelectedArchitectId] = useState(null);

    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [categoryFilter, setCategoryFilter] = useState("all");

    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;

    // Fetch All Architects

    const fetchArchitects = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await api.get("/architects");

            if (response.data.success) {
                setArchitects(response.data.data);
                setCurrentPage(1);
            } else {
                setError("Failed to fetch architects");
            }

        } catch (error) {
            console.log("Architects Error:", error);
            setError("Unable to load architects");

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArchitects();
    }, []);

    // Statistics Cards Data

    const stats = [
        {
            title: "Total Architects",
            value: architects.length,
            icon: Users,
            description: "Total registrations",
        },
        {
            title: "Pending Applications",
            value: architects.filter(
                (item) => item.status === "pending"
            ).length,
            icon: Clock,
            description: "Awaiting approval",
        },
        {
            title: "Approved Applications",
            value: architects.filter(
                (item) => item.status === "approved"
            ).length,
            icon: CheckCircle2,
            description: "Approved registrations",
        },
        {
            title: "Rejected Applications",
            value: architects.filter(
                (item) => item.status === "rejected"
            ).length,
            icon: XCircle,
            description: "Rejected registrations",
        },
    ];

    // Search and Filters

    const filteredArchitects = architects.filter((item) => {

        const searchText = search.toLowerCase().trim();

        const matchesSearch =
            item.fullName?.toLowerCase().includes(searchText) ||
            item.email?.toLowerCase().includes(searchText) ||
            item.phone?.includes(searchText) ||
            item.coaNumber?.toLowerCase().includes(searchText) ||
            item.registrationId?.toLowerCase().includes(searchText);

        const matchesStatus =
            statusFilter === "all" ||
            item.status === statusFilter;

        const matchesCategory =
            categoryFilter === "all" ||
            item.category === categoryFilter;

        return matchesSearch && matchesStatus && matchesCategory;
    });

    // Pagination

    const totalPages = Math.max(
        1,
        Math.ceil(filteredArchitects.length / itemsPerPage)
    );

    const startIndex = (currentPage - 1) * itemsPerPage;

    const paginatedArchitects = filteredArchitects.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    useEffect(() => {
        setCurrentPage(1);
    }, [search, statusFilter, categoryFilter]);

    return (
        <div className="space-y-4">

            {/* Page Heading */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">

                <div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                        <p className="text-red-600 text-[11px] font-bold tracking-[2px] uppercase">
                            LAF 3.0 • Architect Management
                        </p>
                    </div>

                    <h1 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-0.5">
                        Architect Registrations
                    </h1>

                    <p className="text-xs text-neutral-500 mt-0.5">
                        View, search and manage all architect delegate applications
                    </p>
                </div>

                <button
                    onClick={fetchArchitects}
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
            <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-3">

                {stats.map((item) => (
                    <StatCard
                        key={item.title}
                        {...item}
                        value={loading || error ? "—" : item.value}
                    />
                ))}

            </div>

            {/* Main Table Section */}
            <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm border-t-4 border-t-red-600">

                {/* Search and Filters */}
                <div className="p-3.5 sm:p-4 border-b border-neutral-100 bg-gradient-to-r from-red-50/30 via-white to-white">

                    <div className="flex flex-col xl:flex-row gap-3">

                        {/* Search */}
                        <div className="relative flex-1">

                            <Search
                                size={16}
                                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
                            />

                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search by name, email, phone, COA number or registration ID..."
                                className="w-full pl-9 pr-4 py-2 border border-neutral-200 rounded-lg text-xs outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 bg-neutral-50/60 hover:bg-white transition-all placeholder:text-neutral-400"
                            />

                        </div>

                        {/* Status Filter */}
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="border border-neutral-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 bg-neutral-50/60 hover:bg-white font-medium text-neutral-700 cursor-pointer transition-all"
                        >
                            <option value="all">All Status</option>
                            <option value="pending">Pending</option>
                            <option value="approved">Approved</option>
                            <option value="rejected">Rejected</option>
                        </select>

                        {/* Category Filter */}
                        <select
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                            className="border border-neutral-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 bg-neutral-50/60 hover:bg-white font-medium text-neutral-700 cursor-pointer transition-all"
                        >
                            <option value="all">All Categories</option>
                            <option value="Life Member Architect">Life Member Architect</option>
                            <option value="Executive Member">Executive Member</option>
                            <option value="Associate Architect">Associate Architect</option>
                            <option value="Student Architect">Student Architect</option>
                        </select>

                    </div>

                </div>

                {/* Architects Table */}
                <div className="overflow-x-auto">

                    <table className="w-full text-left text-sm whitespace-nowrap">

                        <thead className="bg-neutral-900 text-neutral-200 text-xs font-semibold uppercase tracking-wider">

                            <tr>

                                {[
                                    "Registration ID",
                                    "Architect Name",
                                    "Contact",
                                    "COA Number",
                                    "Category",
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
                                    <td
                                        colSpan={9}
                                        className="text-center py-12 text-neutral-400 text-sm"
                                    >
                                        Loading architects...
                                    </td>
                                </tr>

                            ) : error ? (

                                <tr>
                                    <td
                                        colSpan={9}
                                        className="text-center py-12 text-red-600 text-sm"
                                    >
                                        {error}

                                        <button
                                            onClick={fetchArchitects}
                                            className="block mx-auto mt-2 font-semibold text-xs text-red-700 underline cursor-pointer"
                                        >
                                            Try Again
                                        </button>
                                    </td>
                                </tr>

                            ) : paginatedArchitects.length === 0 ? (

                                <tr>
                                    <td
                                        colSpan={9}
                                        className="text-center py-12 text-neutral-400 text-sm"
                                    >
                                        No architects found
                                    </td>
                                </tr>

                            ) : (

                                paginatedArchitects.map((item) => (

                                    <tr
                                        key={item._id}
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

                                        {/* Architect Name */}
                                        <td className="px-5 py-3 font-semibold text-neutral-900 group-hover:text-red-600 transition-colors">
                                            {item.title} {item.fullName}
                                        </td>

                                        {/* Contact */}
                                        <td className="px-5 py-3">
                                            <p className="text-xs font-medium text-neutral-800">
                                                {item.email}
                                            </p>
                                            <p className="text-[11px] text-neutral-400 font-mono mt-0.5">
                                                {item.phone}
                                            </p>
                                        </td>

                                        {/* COA Number */}
                                        <td className="px-5 py-3">
                                            <span className="font-mono text-xs text-neutral-800 bg-neutral-50 px-2 py-0.5 rounded border border-neutral-200 font-semibold">
                                                {item.coaNumber}
                                            </span>
                                        </td>

                                        {/* Category */}
                                        <td className="px-5 py-3">
                                            <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-red-50 text-red-700 border border-red-200/80 inline-block">
                                                {item.category}
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
                                                onClick={() => setSelectedArchitectId(item._id)}
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
                {!loading && !error && filteredArchitects.length > 0 && (

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 sm:p-4 border-t border-neutral-100 text-xs text-neutral-500">

                        <p>
                            Showing <span className="font-semibold text-neutral-800">{startIndex + 1}</span> to{" "}
                            <span className="font-semibold text-neutral-800">
                                {Math.min(
                                    startIndex + itemsPerPage,
                                    filteredArchitects.length
                                )}
                            </span>{" "}
                            of <span className="font-semibold text-neutral-800">{filteredArchitects.length}</span> architects
                        </p>

                        <div className="flex items-center gap-2">

                            <button
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage((prev) => prev - 1)}
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
                                disabled={currentPage >= totalPages}
                                onClick={() => setCurrentPage((prev) => prev + 1)}
                                className="border border-neutral-200 p-1.5 rounded-lg cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:border-red-300 hover:text-red-600 transition-colors"
                            >
                                <ChevronRight size={16} />
                            </button>

                        </div>

                    </div>

                )}

            </div>

            {/* Architect Details Modal */}

            {selectedArchitectId && (
                <ArchitectDetails
                    key={selectedArchitectId}
                    architectId={selectedArchitectId}
                    onClose={() => setSelectedArchitectId(null)}
                    onUpdate={fetchArchitects}
                />
            )}

        </div>
    );
};

export default Architects;