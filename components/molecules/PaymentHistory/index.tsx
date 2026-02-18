import * as React from "react";

interface PaymentHistoryProps {
  date: string;
  amount: string;
  totalPaid: string;
  stillOwes: string;
}

export default function PaymentHistory({
  date,
  amount,
  totalPaid,
  stillOwes,
}: PaymentHistoryProps) {
  return (
    <div className="mt-4 rounded-2xl border border-slate-200 bg-white px-4 py-3">
      <p className="text-sm font-semibold">Payment History:</p>
      <div className="mt-3 flex items-center justify-between border-b border-slate-100 pb-2 text-sm text-slate-500">
        <span>{date}</span>
        <span className="font-semibold text-emerald-600">{amount}</span>
      </div>
      <div className="mt-3 flex items-center justify-between text-sm">
        <span className="font-semibold">Total Paid:</span>
        <span className="font-semibold text-emerald-600">{totalPaid}</span>
      </div>
      <div className="mt-1 flex items-center justify-between text-sm">
        <span className="font-semibold text-red-500">Still Owes:</span>
        <span className="font-semibold text-red-500">{stillOwes}</span>
      </div>
    </div>
  );
}
