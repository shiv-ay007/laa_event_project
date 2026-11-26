import { useState, useEffect } from "react";

import {
    X,
    User,
    Building2,
    FileText,
    Wallet,
    Eye,
    CheckCircle2,
    XCircle,
    ClipboardCheck,
} from "lucide-react";
import Swal from "sweetalert2";
import api from "../services/api";
import StatusBadge from "./StatusBadge";

// Reusable Detail Component

const DetailItem = ({ label, value }) => {
    return (
        <div>
            <p className="text-xs text-neutral-500 mb-1">
                {label}
            </p>

            <p className="text-sm font-medium text-neutral-900 break-words">
                {value ?? "—"}
            </p>
        </div>
    );
};

const ArchitectDetails = ({
    architectId,
    onClose,
    onUpdate,
}) => {

    const [architect, setArchitect] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [documentLoading, setDocumentLoading] = useState("");

    const [adminRemarks, setAdminRemarks] = useState("");
    const [updating, setUpdating] = useState(false);
    // Fetch Single Architect

    const fetchArchitectDetails = async () => {
        try {
            setLoading(true);
            setError("");

            const response = await api.get(
                `/architects/${architectId}`
            );

            if (response.data.success) {
                setArchitect(response.data.data);

                setAdminRemarks(
                    response.data.data.adminRemarks || ""
                );

            } else {
                setError("Failed to fetch architect details");
            }

        } catch (error) {
            console.log("Architect Details Error:", error);
            setError("Unable to load architect details");

        } finally {
            setLoading(false);
        }
    };

    // View Uploaded Document
    const handleViewDocument = async (documentType) => {

        const documentWindow = window.open("about:blank", "_blank");

        if (!documentWindow) {
            alert("Please allow browser popups");
            return;
        }

        documentWindow.opener = null;

        try {
            setDocumentLoading(documentType);

            const response = await api.get(
                `/architects/${architectId}/document/${documentType}`
            );

            if (response.data.success && response.data.url) {
                documentWindow.location.href = response.data.url;
            } else {
                documentWindow.close();
                alert("Unable to open document");
            }

        } catch (error) {

            documentWindow.close();

            alert(
                error.response?.data?.message ||
                "Unable to open document"
            );

        } finally {
            setDocumentLoading("");
        }
    };


    // Update Payment Status

    const handlePaymentStatus = async (paymentStatus) => {

        const result = await Swal.fire({
            title:
                paymentStatus === "verified"
                    ? "Verify Payment?"
                    : "Reject Payment?",

            text:
                paymentStatus === "verified"
                    ? "Confirm that the actual bank transaction has been verified."
                    : "Reject this payment? An approved application will return to pending.",

            icon: "warning",
            showCancelButton: true,

            confirmButtonColor:
                paymentStatus === "verified"
                    ? "#16a34a"
                    : "#dc2626",

            cancelButtonColor: "#737373",
            confirmButtonText: "Yes, Confirm",
        });

        if (!result.isConfirmed) return;

        try {

            setUpdating(true);

            const response = await api.patch(
                `/architects/${architectId}/payment-status`,
                {
                    paymentStatus,
                }
            );

            if (response.data.success) {

                setArchitect(response.data.data);

                onUpdate?.();

                Swal.fire({
                    icon: "success",
                    title: "Payment Status Updated",
                    text: response.data.message,
                    timer: 1800,
                    showConfirmButton: false,
                });

            }

        } catch (error) {

            Swal.fire({
                icon: "error",
                title: "Update Failed",
                text:
                    error.response?.data?.message ||
                    "Unable to update payment status",
            });

        } finally {

            setUpdating(false);

        }
    };

    // Update Application Status

    const handleApplicationStatus = async (status) => {

        if (
            status === "approved" &&
            architect.paymentStatus !== "verified"
        ) {

            Swal.fire({
                icon: "warning",
                title: "Payment Not Verified",
                text: "Please verify payment before approving the application.",
            });

            return;
        }

        const result = await Swal.fire({

            title:
                status === "approved"
                    ? "Approve Application?"
                    : "Reject Application?",

            text: "Are you sure you want to update this application?",

            icon: "warning",
            showCancelButton: true,

            confirmButtonColor:
                status === "approved"
                    ? "#16a34a"
                    : "#dc2626",

            cancelButtonColor: "#737373",
            confirmButtonText: "Yes, Confirm",

        });

        if (!result.isConfirmed) return;

        try {

            setUpdating(true);

            const response = await api.patch(
                `/architects/${architectId}/application-status`,
                {
                    status,
                    adminRemarks,
                }
            );

            if (response.data.success) {

                setArchitect(response.data.data);

                setAdminRemarks(
                    response.data.data.adminRemarks || ""
                );

                onUpdate?.();

                Swal.fire({
                    icon: "success",
                    title: "Application Status Updated",
                    text: response.data.message,
                    timer: 1800,
                    showConfirmButton: false,
                });

            }

        } catch (error) {

            Swal.fire({
                icon: "error",
                title: "Update Failed",
                text:
                    error.response?.data?.message ||
                    "Unable to update application",
            });

        } finally {

            setUpdating(false);

        }
    };

    useEffect(() => {
        if (architectId) {
            fetchArchitectDetails();
        }
    }, [architectId]);

    // Date Format

    const formatDate = (date) => {
        return date
            ? new Date(date).toLocaleDateString("en-IN")
            : "—";
    };

    return (

        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">

            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="architect-details-title"
                className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-xl flex flex-col overflow-hidden"
            >

                {/* Modal Header */}

                <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-200">

                    <div>

                        <h2
                            id="architect-details-title"
                            className="text-xl font-bold text-neutral-900"
                        >
                            Architect Details
                        </h2>

                        <p className="text-sm text-neutral-500 mt-1">
                            Complete registration information
                        </p>

                    </div>

                    <button
                        onClick={onClose}
                        aria-label="Close architect details"
                        className="p-2 rounded-full hover:bg-neutral-100 cursor-pointer"
                    >
                        <X size={23} />
                    </button>

                </div>

                {/* Scrollable Modal Body */}

                <div className="overflow-y-auto p-6 space-y-6 flex-1">

                    {loading ? (

                        <div className="flex flex-col items-center justify-center py-20">

                            <div className="w-9 h-9 border-4 border-red-100 border-t-red-600 rounded-full animate-spin" />

                            <p className="text-sm text-neutral-500 mt-4">
                                Loading architect details...
                            </p>

                        </div>

                    ) : error ? (

                        <div className="text-center py-14">

                            <p className="text-red-600 text-sm">
                                {error}
                            </p>

                            <button
                                onClick={fetchArchitectDetails}
                                className="mt-4 text-red-600 font-semibold text-sm cursor-pointer"
                            >
                                Try Again
                            </button>

                        </div>

                    ) : architect && (

                        <>

                            {/* Profile Summary */}

                            <div className="flex flex-wrap items-center gap-4 bg-neutral-50 border border-neutral-200 rounded-xl p-5">

                                <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-2xl font-bold">

                                    {architect.fullName?.charAt(0).toUpperCase()}

                                </div>

                                <div className="flex-1 min-w-0">

                                    <h3 className="text-xl font-bold text-neutral-900">
                                        {architect.title} {architect.fullName}
                                    </h3>

                                    <p className="text-xs text-neutral-500 mt-1 break-all">
                                        {architect.registrationId}
                                    </p>

                                    <p className="text-xs text-neutral-400 mt-1">
                                        Registered on {formatDate(architect.createdAt)}
                                    </p>

                                </div>

                                <StatusBadge status={architect.status} />

                            </div>

                            {/* Personal Information */}

                            <section className="border border-neutral-200 rounded-xl p-5">

                                <div className="flex items-center gap-2 mb-5">

                                    <User size={20} className="text-red-600" />

                                    <h3 className="font-bold text-neutral-900">
                                        Personal Information
                                    </h3>

                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                                    <DetailItem
                                        label="Full Name"
                                        value={`${architect.title || ""} ${architect.fullName || ""}`}
                                    />

                                    <DetailItem
                                        label="Email Address"
                                        value={architect.email}
                                    />

                                    <DetailItem
                                        label="Phone Number"
                                        value={architect.phone}
                                    />

                                    <DetailItem
                                        label="COA Number"
                                        value={architect.coaNumber}
                                    />

                                </div>

                            </section>

                            {/* Professional Information */}

                            <section className="border border-neutral-200 rounded-xl p-5">

                                <div className="flex items-center gap-2 mb-5">

                                    <Building2
                                        size={20}
                                        className="text-red-600"
                                    />

                                    <h3 className="font-bold text-neutral-900">
                                        Professional & Membership Information
                                    </h3>

                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                                    <DetailItem
                                        label="Category"
                                        value={architect.category}
                                    />

                                    <DetailItem
                                        label="Firm Name"
                                        value={architect.firmName || "Not provided"}
                                    />

                                    <DetailItem
                                        label="Proposer Name"
                                        value={architect.proposerName}
                                    />

                                    <DetailItem
                                        label="LAA Number"
                                        value={architect.laaNumber}
                                    />

                                    <div className="sm:col-span-2">

                                        <DetailItem
                                            label="Office Address"
                                            value={architect.officeAddress}
                                        />

                                    </div>

                                </div>

                            </section>

                            {/* Uploaded Documents */}

                            {/* Uploaded Documents */}

                            <section className="border border-neutral-200 rounded-xl p-5">

                                <div className="flex items-center gap-2 mb-5">

                                    <FileText size={20} className="text-red-600" />

                                    <h3 className="font-bold text-neutral-900">
                                        Uploaded Documents
                                    </h3>

                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                    {/* COA Certificate */}

                                    <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-5">

                                        <FileText size={32} className="text-red-600 mb-3" />

                                        <h4 className="text-sm font-semibold">
                                            COA Certificate
                                        </h4>

                                        <p className="text-xs text-neutral-500 mt-2">
                                            {architect.coaCertificate?.publicId
                                                ? "Document uploaded"
                                                : "Not uploaded"}
                                        </p>

                                        <button
                                            onClick={() => handleViewDocument("certificate")}
                                            disabled={
                                                !architect.coaCertificate?.publicId ||
                                                !!documentLoading
                                            }
                                            className="flex items-center justify-center gap-2 w-full mt-4 bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-lg text-sm font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <Eye size={16} />

                                            {documentLoading === "certificate"
                                                ? "Opening..."
                                                : "View Certificate"}

                                        </button>

                                    </div>

                                    {/* Payment Receipt */}

                                    <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-5">

                                        <FileText size={32} className="text-red-600 mb-3" />

                                        <h4 className="text-sm font-semibold">
                                            Payment Receipt
                                        </h4>

                                        <p className="text-xs text-neutral-500 mt-2">
                                            {architect.paymentReceipt?.publicId
                                                ? "Document uploaded"
                                                : "Not uploaded"}
                                        </p>

                                        <button
                                            onClick={() => handleViewDocument("receipt")}
                                            disabled={
                                                !architect.paymentReceipt?.publicId ||
                                                !!documentLoading
                                            }
                                            className="flex items-center justify-center gap-2 w-full mt-4 bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-lg text-sm font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <Eye size={16} />

                                            {documentLoading === "receipt"
                                                ? "Opening..."
                                                : "View Receipt"}

                                        </button>

                                    </div>

                                </div>

                            </section>
                            {/* Payment Information */}

                            <section className="border border-neutral-200 rounded-xl p-5">

                                <div className="flex items-center gap-2 mb-5">

                                    <Wallet
                                        size={20}
                                        className="text-red-600"
                                    />

                                    <h3 className="font-bold text-neutral-900">
                                        Payment Information
                                    </h3>

                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                                    <DetailItem
                                        label="Registration Fee"
                                        value={
                                            architect.amount != null
                                                ? `₹${Number(architect.amount).toLocaleString("en-IN")}`
                                                : "—"
                                        }
                                    />

                                    <DetailItem
                                        label="Transaction ID"
                                        value={architect.txnId}
                                    />

                                    <DetailItem
                                        label="Cheque Number"
                                        value={architect.chequeNumber || "Not provided"}
                                    />

                                    <DetailItem
                                        label="Bank Name"
                                        value={architect.bankName}
                                    />

                                    <DetailItem
                                        label="Payment Date"
                                        value={formatDate(architect.paymentDate)}
                                    />

                                    <div>

                                        <p className="text-xs text-neutral-500 mb-2">
                                            Payment Status
                                        </p>

                                        <StatusBadge status={architect.paymentStatus} />

                                    </div>

                                </div>

                            </section>


                            {/* Payment Verification */}

                            <section className="border border-neutral-200 rounded-xl p-5">

                                <div className="flex items-center gap-2 mb-5">

                                    <Wallet size={20} className="text-red-600" />

                                    <h3 className="font-bold text-neutral-900">
                                        Payment Verification
                                    </h3>

                                </div>

                                <div className="flex items-center justify-between bg-neutral-50 rounded-lg p-4 mb-5">

                                    <p className="text-sm text-neutral-600">
                                        Current Payment Status
                                    </p>

                                    <StatusBadge status={architect.paymentStatus} />

                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                                    <button
                                        onClick={() => handlePaymentStatus("verified")}
                                        disabled={
                                            updating ||
                                            architect.paymentStatus === "verified"
                                        }
                                        className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-sm font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                    >

                                        <CheckCircle2 size={18} />

                                        {architect.paymentStatus === "verified"
                                            ? "Payment Verified"
                                            : "Verify Payment"}

                                    </button>

                                    <button
                                        onClick={() => handlePaymentStatus("rejected")}
                                        disabled={
                                            updating ||
                                            architect.paymentStatus === "rejected"
                                        }
                                        className="flex items-center justify-center gap-2 border border-red-600 text-red-600 hover:bg-red-50 py-3 rounded-lg text-sm font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                    >

                                        <XCircle size={18} />

                                        {architect.paymentStatus === "rejected"
                                            ? "Payment Rejected"
                                            : "Reject Payment"}

                                    </button>

                                </div>

                                <p className="text-xs text-neutral-500 mt-4">
                                    Verify the payment receipt and actual bank transaction
                                    before confirming the payment.
                                </p>

                            </section>

                            {/* Declaration */}

                            <section className="bg-neutral-50 border border-neutral-200 rounded-xl p-5">

                                <h3 className="font-bold text-neutral-900 mb-3">
                                    Declaration
                                </h3>

                                <p className="text-sm text-neutral-600">
                                    {architect.declaration
                                        ? "Declaration accepted by the applicant."
                                        : "Declaration not accepted."}
                                </p>

                            </section>

                            {/* Application Management */}

                            <section className="border border-neutral-200 rounded-xl p-5">

                                <div className="flex items-center gap-2 mb-5">

                                    <ClipboardCheck
                                        size={20}
                                        className="text-red-600"
                                    />

                                    <h3 className="font-bold text-neutral-900">
                                        Application Management
                                    </h3>

                                </div>

                                {/* Current Status */}

                                <div className="flex items-center justify-between bg-neutral-50 rounded-lg p-4 mb-5">

                                    <p className="text-sm text-neutral-600">
                                        Application Status
                                    </p>

                                    <StatusBadge status={architect.status} />

                                </div>

                                {/* Admin Remarks */}

                                <div className="mb-5">

                                    <label
                                        htmlFor="adminRemarks"
                                        className="block text-sm font-semibold text-neutral-700 mb-2"
                                    >
                                        Admin Remarks
                                    </label>

                                    <textarea
                                        id="adminRemarks"
                                        rows={4}
                                        value={adminRemarks}
                                        onChange={(e) => setAdminRemarks(e.target.value)}
                                        disabled={updating}
                                        placeholder="Enter remarks regarding this application..."
                                        className="w-full border border-neutral-200 rounded-lg p-3 text-sm outline-none focus:border-red-500 resize-none"
                                    />

                                    <p className="text-xs text-neutral-500 mt-2">
                                        Remarks will be saved when the application is
                                        approved or rejected.
                                    </p>

                                </div>

                                {/* Approve and Reject Buttons */}

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                                    <button
                                        onClick={() => handleApplicationStatus("approved")}
                                        disabled={
                                            updating ||
                                            architect.status === "approved" ||
                                            architect.paymentStatus !== "verified"
                                        }
                                        className="flex items-center justify-center gap-2 bg-neutral-900 hover:bg-black text-white py-3 rounded-lg text-sm font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                    >

                                        <CheckCircle2 size={18} />

                                        {architect.status === "approved"
                                            ? "Application Approved"
                                            : "Approve Application"}

                                    </button>

                                    <button
                                        onClick={() => handleApplicationStatus("rejected")}
                                        disabled={
                                            updating ||
                                            architect.status === "rejected"
                                        }
                                        className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg text-sm font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                    >

                                        <XCircle size={18} />

                                        {architect.status === "rejected"
                                            ? "Application Rejected"
                                            : "Reject Application"}

                                    </button>

                                </div>

                                {architect.paymentStatus !== "verified" && (

                                    <p className="text-xs text-amber-600 mt-4">
                                        Please verify payment before approving this application.
                                    </p>

                                )}

                                {updating && (

                                    <p className="text-sm text-neutral-500 text-center mt-4">
                                        Updating application details...
                                    </p>

                                )}

                            </section>



                        </>

                    )}

                </div>

                {/* Modal Footer */}

                <div className="flex justify-end px-6 py-4 border-t border-neutral-200">

                    <button
                        onClick={onClose}
                        className="bg-neutral-900 hover:bg-black text-white px-6 py-3 rounded-lg text-sm font-medium cursor-pointer"
                    >
                        Close Details
                    </button>

                </div>

            </div>

        </div>

    );
};

export default ArchitectDetails;