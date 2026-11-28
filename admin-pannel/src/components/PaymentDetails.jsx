import { useEffect, useState } from "react";
import {
  X,
  Wallet,
  FileText,
  ExternalLink,
  ShieldCheck,
  XCircle,
  Loader2,
  User,
  CreditCard,
  AlertCircle,
} from "lucide-react";
import Swal from "sweetalert2";

import {
  viewPaymentReceipt,
  updatePaymentStatus,
} from "../api/paymentApi";
import StatusBadge from "./StatusBadge";

const PaymentDetails = ({
  payment,
  onClose,
  onUpdate,
}) => {
  const [currentStatus, setCurrentStatus] = useState(
    payment.paymentStatus
  );

  const [updating, setUpdating] = useState(false);
  const [receiptLoading, setReceiptLoading] = useState(false);

  // Disable Background Scrolling
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const formatDate = (date) => {
    if (!date) return "—";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatAmount = (amount) => {
    if (amount === null || amount === undefined) {
      return "Not set";
    }

    return `₹${Number(amount).toLocaleString("en-IN")}`;
  };

  // View Payment Receipt
  const handleViewReceipt = async () => {
    const receiptWindow = window.open("about:blank", "_blank");

    if (!receiptWindow) {
      Swal.fire(
        "Popup Blocked",
        "Please allow popups to view the receipt.",
        "warning"
      );
      return;
    }

    receiptWindow.opener = null;

    try {
      setReceiptLoading(true);

      const response = await viewPaymentReceipt(
        payment.type,
        payment._id
      );

      const result = response.data;

      const receiptUrl =
        result.url ||
        result.signedUrl ||
        result.documentUrl ||
        result.data?.url ||
        result.data?.signedUrl ||
        result.data?.documentUrl;

      if (
        typeof receiptUrl !== "string" ||
        !receiptUrl.startsWith("https://")
      ) {
        throw new Error("Receipt URL not found");
      }

      receiptWindow.location.href = receiptUrl;
    } catch (error) {
      receiptWindow.close();

      Swal.fire(
        "Error",
        error.response?.data?.message ||
          error.message ||
          "Unable to open payment receipt",
        "error"
      );
    } finally {
      setReceiptLoading(false);
    }
  };

  // Verify or Reject Payment
  const handleUpdateStatus = async (newStatus) => {
    const isVerify = newStatus === "verified";

    const result = await Swal.fire({
      title: isVerify
        ? "Verify Payment?"
        : "Reject Payment?",
      text: isVerify
        ? "Confirm that you have checked the actual bank transaction before verifying this payment."
        : "Are you sure you want to reject this payment?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: isVerify ? "#15803d" : "#dc2626",
      cancelButtonColor: "#737373",
      confirmButtonText: isVerify
        ? "Yes, Verify"
        : "Yes, Reject",
    });

    if (!result.isConfirmed) return;

    try {
      setUpdating(true);

      await updatePaymentStatus(
        payment.type,
        payment._id,
        {
          paymentStatus: newStatus,
        }
      );

      setCurrentStatus(newStatus);
      onUpdate?.();

      await Swal.fire({
        title: "Success",
        text: `Payment ${newStatus} successfully`,
        icon: "success",
        confirmButtonColor: "#dc2626",
      });
    } catch (error) {
      Swal.fire(
        "Error",
        error.response?.data?.message ||
          "Failed to update payment status",
        "error"
      );
    } finally {
      setUpdating(false);
    }
  };

  const applicantInfo = [
    { label: "Applicant Name", value: payment.name },
    { label: "Registration ID", value: payment.registrationId },
    { label: "Category", value: payment.type },
    { label: "Email Address", value: payment.email },
    { label: "Phone Number", value: payment.phone },
  ];

  const transactionInfo = [
    { label: "Transaction ID", value: payment.txnId },
    { label: "Bank Name", value: payment.bankName },
    {
      label: "Payment Date",
      value: formatDate(payment.paymentDate),
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Background Overlay */}
      <div
        onClick={updating ? undefined : onClose}
        className="absolute inset-0 bg-neutral-900/50 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Payment Details"
        className="relative flex h-full w-full max-w-[500px] flex-col bg-white shadow-2xl border-l border-neutral-200"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-4 bg-white">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <p className="text-[11px] font-bold uppercase tracking-[2px] text-red-600">
                LAF 3.0 • Payment Verification
              </p>
            </div>

            <h2 className="mt-1 text-lg font-bold text-neutral-900">
              Payment Details
            </h2>
          </div>

          <button
            onClick={onClose}
            disabled={updating}
            aria-label="Close payment details"
            className="rounded-lg p-1.5 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 disabled:opacity-40 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 space-y-5 overflow-y-auto p-6">
          {/* Amount Card */}
          <div className="rounded-xl bg-neutral-950 border border-neutral-800 p-5 text-white shadow-sm relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">
                  Registration Amount
                </p>

                <h3 className="mt-2 text-3xl font-bold text-white tracking-tight">
                  {formatAmount(payment.amount)}
                </h3>
              </div>

              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-red-400">
                <Wallet size={22} />
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 pt-3 border-t border-neutral-800">
              <span className="text-xs text-neutral-400">Current Status:</span>
              <StatusBadge status={currentStatus} />
            </div>
          </div>

          {/* Applicant Information */}
          <div className="border border-neutral-200 rounded-xl p-4 bg-white">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-700 mb-3.5">
              <User size={15} className="text-red-600" />
              Applicant Information
            </h3>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {applicantInfo.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg bg-neutral-50/80 border border-neutral-100 p-2.5"
                >
                  <p className="text-[11px] text-neutral-400 font-medium">
                    {item.label}
                  </p>

                  <p className="mt-0.5 break-all text-xs font-semibold text-neutral-800">
                    {item.value || "—"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Transaction Information */}
          <div className="border border-neutral-200 rounded-xl p-4 bg-white">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-700 mb-3.5">
              <CreditCard size={15} className="text-red-600" />
              Transaction Information
            </h3>

            <div className="divide-y divide-neutral-100">
              {transactionInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 py-2.5"
                >
                  <p className="text-xs text-neutral-500 font-medium">
                    {item.label}
                  </p>

                  <p className="break-all text-right text-xs font-semibold text-neutral-800 font-mono">
                    {item.value || "—"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Receipt */}
          <div className="border border-neutral-200 rounded-xl p-4 bg-white">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-700 mb-3.5">
              <FileText size={15} className="text-red-600" />
              Payment Receipt Document
            </h3>

            <button
              onClick={handleViewReceipt}
              disabled={receiptLoading}
              className="flex w-full items-center gap-3 rounded-lg border border-neutral-200 p-3 text-left transition-all hover:border-red-300 hover:bg-red-50/30 disabled:opacity-50 group cursor-pointer"
            >
              <div className="rounded-lg bg-red-50 p-2 text-red-600 group-hover:bg-red-100 transition-colors">
                <FileText size={20} />
              </div>

              <div className="flex-1">
                <p className="text-xs font-semibold text-neutral-800 group-hover:text-red-600 transition-colors">
                  View Payment Receipt
                </p>

                <p className="text-[11px] text-neutral-400">
                  Click to open uploaded receipt document in new tab
                </p>
              </div>

              {receiptLoading ? (
                <Loader2 size={16} className="animate-spin text-red-600" />
              ) : (
                <ExternalLink
                  size={15}
                  className="text-neutral-400 group-hover:text-red-600 transition-colors"
                />
              )}
            </button>
          </div>

          {/* Verification Notice */}
          <div className="rounded-lg border border-amber-200/80 bg-amber-50/70 p-3 flex items-start gap-2.5">
            <AlertCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs leading-relaxed text-amber-800">
              Please verify the transaction ID and receipt with your bank account statement before approving or rejecting this transaction.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex gap-2.5 border-t border-neutral-200 bg-neutral-50/50 p-4">
          <button
            onClick={() => handleUpdateStatus("rejected")}
            disabled={
              updating || currentStatus === "rejected"
            }
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-red-200 bg-white px-4 py-2.5 text-xs font-semibold text-red-600 hover:bg-red-50 disabled:opacity-40 cursor-pointer transition-all active:scale-95 shadow-sm"
          >
            <XCircle size={16} />
            Reject Payment
          </button>

          <button
            onClick={() => handleUpdateStatus("verified")}
            disabled={
              updating || currentStatus === "verified"
            }
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 px-4 py-2.5 text-xs font-semibold text-white disabled:opacity-40 cursor-pointer transition-all active:scale-95 shadow-sm shadow-emerald-600/30"
          >
            {updating ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <ShieldCheck size={16} />
            )}
            Verify Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
