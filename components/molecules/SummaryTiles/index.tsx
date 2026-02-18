import * as React from "react";

interface SummaryTilesProps {
  total: string;
  paid: string;
  remaining: string;
}

export default function SummaryTiles({ total, paid, remaining }: SummaryTilesProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex-1 basis-[220px] rounded-2xl bg-(--color-background) px-4 py-3 text-center">
        <p className="text-xs text-(--color-text-tertiary)">Total Amount</p>
        <p className="text-xl font-semibold">{total}</p>
      </div>
      <div className="flex-1 basis-[220px] rounded-2xl bg-(--color-background) px-4 py-3 text-center">
        <p className="text-xs text-(--color-text-tertiary)">Total Paid</p>
        <p className="text-xl font-semibold text-(--color-text-success)">{paid}</p>
      </div>
      <div className="flex-1 basis-[220px] rounded-2xl bg-(--color-background) px-4 py-3 text-center">
        <p className="text-xs text-(--color-text-tertiary)">Remaining</p>
        <p className="text-xl font-semibold text-(--color-error)">{remaining}</p>
      </div>
    </div>
  );
}
