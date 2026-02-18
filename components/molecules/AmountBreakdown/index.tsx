import * as React from "react";

interface AmountBreakdownProps {
  total: string;
  paid: string;
  remaining: string;
}

export default function AmountBreakdown({ total, paid, remaining }: AmountBreakdownProps) {
  return (
    <div className="mt-4 flex flex-wrap gap-3 rounded-2xl border border-[var(--color-warning-bg)] bg-[var(--color-warning-bg)] px-4 py-3 text-center">
      <div className="flex-1 basis-[140px]">
        <p className="text-xs text-[var(--color-text-tertiary)]">Total</p>
        <p className="font-semibold">{total}</p>
      </div>
      <div className="flex-1 basis-[140px]">
        <p className="text-xs text-[var(--color-text-tertiary)]">Paid</p>
        <p className="font-semibold text-[var(--color-text-success)]">{paid}</p>
      </div>
      <div className="flex-1 basis-[140px]">
        <p className="text-xs text-[var(--color-text-tertiary)]">Remaining</p>
        <p className="font-semibold text-[var(--color-error)]">{remaining}</p>
      </div>
    </div>
  );
}
