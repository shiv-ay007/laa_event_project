import { CheckCircle2, Clock, XCircle, MinusCircle } from "lucide-react";

const StatusBadge = ({ status }) => {
  const s = (status || "").toLowerCase();

  const styles = {
    pending: "bg-amber-50 text-amber-700 border-amber-200/80",
    approved: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    verified: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    rejected: "bg-red-50 text-red-700 border-red-200/80",
    not_required: "bg-neutral-100 text-neutral-600 border-neutral-200/80",
  };

  const style =
    styles[s] || "bg-neutral-100 text-neutral-600 border-neutral-200/80";

  return (
    <span
      className={`px-2.5 py-1 rounded-full text-xs font-semibold capitalize inline-flex items-center gap-1 border ${style}`}
    >
      {(s === "approved" || s === "verified") && (
        <CheckCircle2 size={12} className="text-emerald-600" />
      )}
      {s === "pending" && <Clock size={12} className="text-amber-600" />}
      {s === "rejected" && <XCircle size={12} className="text-red-600" />}
      {s === "not_required" && (
        <MinusCircle size={12} className="text-neutral-500" />
      )}
      {s === "not_required" ? "Not Required" : status || "Unknown"}
    </span>
  );
};

export default StatusBadge;
