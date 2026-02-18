import * as React from "react";

interface AmountBreakdownProps {
  total: string;
  paid: string;
  remaining: string;
}

export default function AmountBreakdown({ total, paid, remaining }: AmountBreakdownProps) {
  return (
    <div className="mt-4 flex flex-wrap gap-3 rounded-2xl border border-yellow-200 bg-yellow-50 px-4 py-3 text-center">
      <div className="flex-1 basis-[140px]">
        <p className="text-xs text-slate-500">Total</p>
        <p className="font-semibold">{total}</p>
      </div>
      <div className="flex-1 basis-[140px]">
        <p className="text-xs text-slate-500">Paid</p>
        <p className="font-semibold text-emerald-600">{paid}</p>
      </div>
      <div className="flex-1 basis-[140px]">
        <p className="text-xs text-slate-500">Remaining</p>
        <p className="font-semibold text-red-500">{remaining}</p>
      </div>
    </div>
  );
}
