import { useEffect, useState } from "react";
import { X, Building2, User, FileText, Eye, Wallet, ClipboardCheck, CheckCircle2, XCircle } from "lucide-react";
import Swal from "sweetalert2";
import {
  getSingleExhibitor,
  viewExhibitorDocument,
  updateExhibitorPaymentStatus,
  updateExhibitorApplicationStatus,
} from "../api/exhibitorApi";
import StatusBadge from "./StatusBadge";

const DetailItem = ({label,value}) => <div><p className="text-xs text-neutral-500 mb-1">{label}</p><p className="text-sm font-medium break-words">{value || "—"}</p></div>;
const Section = ({title,icon: Icon,children}) => <section className="border border-neutral-200 rounded-xl p-5"><h3 className="flex items-center gap-2 font-bold mb-5"><Icon size={20} className="text-red-600"/>{title}</h3>{children}</section>;
const ExhibitorDetails = ({exhibitorId,onClose,onUpdate}) => {
  const [exhibitor,setExhibitor] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState("");
  const [remarks,setRemarks] = useState("");
  const [updating,setUpdating] = useState(false);
  const [documentLoading,setDocumentLoading] = useState("");
  const fetchDetails = async () => {
    setLoading(true); setError("");
    try { const {data} = await getSingleExhibitor(exhibitorId); if (!data.success) throw new Error(data.message); setExhibitor(data.data); setRemarks(data.data.adminRemarks || ""); }
    catch(err) { setError(err.response?.data?.message || "Unable to load exhibitor details"); }
    finally {setLoading(false);}
  };
  useEffect(()=>{fetchDetails();},[exhibitorId]);
  const viewDocument = async type => {
    const tab = window.open("about:blank","_blank");
    if (!tab) { alert("Please allow browser popups"); return; }
    tab.opener = null; setDocumentLoading(type);
    try { const {data} = await viewExhibitorDocument(exhibitorId, type); if (!data.success || !data.url) throw new Error("Unable to open document"); tab.location.href=data.url; }
    catch(err) {tab.close(); alert(err.response?.data?.message || "Unable to open document");}
    finally {setDocumentLoading("");}
  };
  const updateStatus = async (type,value) => {
    if (updating) return;
    if (type === "application" && value === "approved" && exhibitor.paymentStatus !== "verified") return;
    setUpdating(true);
    try {
      const result = await Swal.fire({title:`Confirm ${value === "verified" ? "payment verification" : value === "approved" ? "application approval" : type + " rejection"}?`,text:type === "payment" && value === "verified" ? "Confirm the required deposit amount and actual bank transaction before verifying." : type === "payment" ? "An approved application will return to pending." : "Confirm that the application has been reviewed.",icon:"warning",showCancelButton:true,confirmButtonColor:"#dc2626"});
      if (!result.isConfirmed) return;
      const body = type === "payment" ? {paymentStatus:value} : {status:value,adminRemarks:remarks};
      const {data} = type === "payment"
        ? await updateExhibitorPaymentStatus(exhibitorId, body)
        : await updateExhibitorApplicationStatus(exhibitorId, body);
      if (!data.success) throw new Error(data.message);
      setExhibitor(data.data);
      if (type === "application") setRemarks(data.data.adminRemarks || "");
      onUpdate?.();
      await Swal.fire({icon:"success",title:"Status updated",text:data.message,timer:1800,showConfirmButton:false});
    } catch(err) {await Swal.fire({icon:"error",title:"Update failed",text:err.response?.data?.message || err.message || "Unable to update status"});}
    finally {setUpdating(false);}
  };
  const date = v => v ? new Date(v).toLocaleDateString("en-IN") : "—";
  const grid = "grid grid-cols-1 sm:grid-cols-2 gap-5";
  const btn = "flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  return <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
    <div role="dialog" aria-modal="true" aria-labelledby="exhibitor-details-title" className="bg-white w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-xl flex flex-col overflow-hidden">
      <header className="flex items-center justify-between px-6 py-5 border-b border-neutral-200"><div><h2 id="exhibitor-details-title" className="text-xl font-bold">Exhibitor Details</h2><p className="text-sm text-neutral-500">Complete registration information</p></div><button aria-label="Close details" onClick={onClose} disabled={updating} className="p-2 rounded-full hover:bg-neutral-100"><X size={23}/></button></header>
      <div className="overflow-y-auto p-6 space-y-6 flex-1">
        {loading ? <p className="text-center py-16">Loading exhibitor details...</p> : error ? <div className="text-center py-14 text-red-600">{error}<button onClick={fetchDetails} className="block mx-auto mt-4 font-semibold">Try Again</button></div> : exhibitor && <>
          <div className="flex flex-wrap items-center gap-4 bg-neutral-50 border border-neutral-200 rounded-xl p-5"><div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-2xl font-bold">{exhibitor.companyName?.charAt(0).toUpperCase()}</div><div className="flex-1 min-w-0"><h3 className="text-xl font-bold">{exhibitor.companyName}</h3><p className="text-xs text-neutral-500 break-all">{exhibitor.registrationId}</p><p className="text-xs text-neutral-500">Registered on {date(exhibitor.createdAt)}</p></div><StatusBadge status={exhibitor.status}/></div>
          <Section title="Company & Contact Information" icon={User}><div className={grid}>{[["Company Name",exhibitor.companyName],["Contact Person",exhibitor.contactPerson],["Designation",exhibitor.designation],["Email",exhibitor.email],["Phone",exhibitor.phone],["Website",exhibitor.website]].map(([label,value])=><DetailItem key={label} label={label} value={value}/>)}</div></Section>
          <Section title="Exhibition & Stall Information" icon={Building2}><div className={grid}><DetailItem label="Industry Sector" value={exhibitor.industrySector}/><DetailItem label="Space Required" value={exhibitor.spaceRequired}/><div className="sm:col-span-2"><DetailItem label="Special Requirements" value={exhibitor.specialRequirements}/></div></div></Section>
          <Section title="Uploaded Documents" icon={FileText}><div className={grid}>{[["logo","Brand Logo",exhibitor.brandLogo],["receipt","Payment Receipt",exhibitor.paymentReceipt]].map(([type,title,doc])=><div key={type} className="bg-neutral-50 border border-neutral-200 rounded-xl p-5"><FileText size={32} className="text-red-600 mb-3"/><h4 className="font-semibold text-sm">{title}</h4><p className="text-xs text-neutral-500 mt-2">{doc?.publicId ? "Document uploaded" : type === "logo" ? "Not uploaded (optional)" : "Not uploaded"}</p><button disabled={!doc?.publicId || !!documentLoading} onClick={()=>viewDocument(type)} className={`${btn} bg-red-600 text-white w-full mt-4`}><Eye size={16}/>{documentLoading===type ? "Opening..." : `View ${type === "logo" ? "Logo" : "Receipt"}`}</button></div>)}</div></Section>
          <Section title="Payment Information" icon={Wallet}><div className={grid}><DetailItem label="Deposit Amount" value={exhibitor.amount == null ? "Not set — confirm required deposit" : `₹${Number(exhibitor.amount).toLocaleString("en-IN")}`}/><DetailItem label="Transaction ID" value={exhibitor.txnId}/><DetailItem label="Payment Date" value={date(exhibitor.paymentDate)}/><div><p className="text-xs text-neutral-500 mb-2">Payment Status</p><StatusBadge status={exhibitor.paymentStatus}/></div></div></Section>
          <Section title="Payment Verification" icon={Wallet}><div className="flex justify-between bg-neutral-50 rounded-lg p-4 mb-4"><span className="text-sm">Current Payment Status</span><StatusBadge status={exhibitor.paymentStatus}/></div><div className={grid}><button disabled={updating || exhibitor.paymentStatus==="verified"} onClick={()=>updateStatus("payment","verified")} className={`${btn} bg-green-600 text-white`}><CheckCircle2 size={18}/>Verify Payment</button><button disabled={updating || exhibitor.paymentStatus==="rejected"} onClick={()=>updateStatus("payment","rejected")} className={`${btn} border border-red-600 text-red-600`}><XCircle size={18}/>Reject Payment</button></div><p className="text-xs text-neutral-500 mt-4">Confirm the required deposit and actual bank transaction before verifying payment.</p></Section>
          <Section title="Declaration" icon={FileText}><p className="text-sm">{exhibitor.declaration ? "Declaration accepted by the applicant." : "Declaration not accepted."}</p></Section>
          <Section title="Application Management" icon={ClipboardCheck}><div className="flex justify-between bg-neutral-50 rounded-lg p-4 mb-4"><span className="text-sm">Application Status</span><StatusBadge status={exhibitor.status}/></div><label htmlFor="exhibitorRemarks" className="block text-sm font-semibold mb-2">Admin Remarks</label><textarea id="exhibitorRemarks" rows={4} value={remarks} disabled={updating} onChange={e=>setRemarks(e.target.value)} placeholder="Enter remarks regarding this application..." className="w-full border border-neutral-200 rounded-lg p-3 text-sm resize-none"/><p className="text-xs text-neutral-500 mb-4">Remarks are saved when approving or rejecting.</p><div className={grid}><button disabled={updating || exhibitor.status==="approved" || exhibitor.paymentStatus!=="verified"} onClick={()=>updateStatus("application","approved")} className={`${btn} bg-neutral-900 text-white`}><CheckCircle2 size={18}/>Approve Application</button><button disabled={updating || exhibitor.status==="rejected"} onClick={()=>updateStatus("application","rejected")} className={`${btn} bg-red-600 text-white`}><XCircle size={18}/>Reject Application</button></div>{exhibitor.paymentStatus!=="verified" && <p className="text-xs text-amber-600 mt-4">Please verify payment before approving this application.</p>}{updating && <p className="text-sm text-neutral-500 mt-4">Updating application...</p>}</Section>
        </>}
      </div><footer className="flex justify-end px-6 py-4 border-t border-neutral-200"><button onClick={onClose} disabled={updating} className="bg-neutral-900 text-white px-6 py-3 rounded-lg text-sm disabled:opacity-50">Close Details</button></footer>
    </div>
  </div>;
};
export default ExhibitorDetails;
