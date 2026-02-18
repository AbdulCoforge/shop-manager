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
    <div className="mt-4 rounded-2xl border border-(--color-primary-soft) bg-(--color-background) px-4 py-3">
      <p className="text-sm font-semibold">Payment History:</p>
      <div className="mt-3 flex items-center justify-between border-b border-(--color-primary-soft) pb-2 text-sm text-(--color-text-tertiary)">
        <span>{date}</span>
        <span className="font-semibold text-(--color-text-success)">{amount}</span>
      </div>
      <div className="mt-3 flex items-center justify-between text-sm">
        <span className="font-semibold">Total Paid:</span>
        <span className="font-semibold text-(--color-text-success)">{totalPaid}</span>
      </div>
      <div className="mt-1 flex items-center justify-between text-sm">
        <span className="font-semibold text-(--color-error)">Still Owes:</span>
        <span className="font-semibold text-(--color-error)">{stillOwes}</span>
      </div>
    </div>
  );
}
