import * as React from "react";

interface SummaryTilesProps {
  total: string;
  paid: string;
  remaining: string;
}

export default function SummaryTiles({ total, paid, remaining }: SummaryTilesProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex-1 basis-[220px] rounded-2xl bg-white px-4 py-3 text-center">
        <p className="text-xs text-slate-500">Total Amount</p>
        <p className="text-xl font-semibold">{total}</p>
      </div>
      <div className="flex-1 basis-[220px] rounded-2xl bg-white px-4 py-3 text-center">
        <p className="text-xs text-slate-500">Total Paid</p>
        <p className="text-xl font-semibold text-emerald-600">{paid}</p>
      </div>
      <div className="flex-1 basis-[220px] rounded-2xl bg-white px-4 py-3 text-center">
        <p className="text-xs text-slate-500">Remaining</p>
        <p className="text-xl font-semibold text-red-500">{remaining}</p>
      </div>
    </div>
  );
}
