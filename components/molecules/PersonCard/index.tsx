import * as React from "react";
import { HiArrowTrendingUp, LuCircleCheckBig, RiUser3Line } from "@/app/icons";
import IconBadge from "@/components/atoms/IconBadge";

interface PersonCardProps {
  name: string;
  id: number;
  totalItems: number;
  active: number;
  returned: number;
  paid: string;
  remaining: string;
  total: string;
}

export default function PersonCard({
  name,
  id,
  totalItems,
  active,
  returned,
  paid,
  remaining,
  total,
}: PersonCardProps) {
  return (
    <article className="rounded-3xl border border-[var(--color-warning-bg)] bg-[var(--color-warning-bg)] p-6 shadow-[var(--shadow-warning-soft)]">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <IconBadge className="h-12 w-12 rounded-full bg-[var(--color-warning-bg)] text-[var(--color-text-warning)]">
            <RiUser3Line className="text-xl" />
          </IconBadge>
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-xs text-[var(--color-text-tertiary)]">
              Total: {totalItems} items borrowed
            </p>
          </div>
        </div>
        <span className="text-sm text-[var(--color-text-tertiary)]">#{id}</span>
      </div>

      <div className="mt-4 flex flex-wrap items-stretch gap-3">
        <div className="flex-1 basis-[220px] rounded-2xl bg-[var(--color-warning-bg)] px-4 py-3">
          <div className="flex items-center gap-2 text-xs text-[var(--color-text-warning)]">
            <HiArrowTrendingUp />
            Active
          </div>
          <p className="text-sm font-semibold">{active}</p>
        </div>
        <div className="flex-1 basis-[220px] rounded-2xl bg-[var(--color-success-bg)] px-4 py-3">
          <div className="flex items-center gap-2 text-xs text-[var(--color-text-success)]">
            <LuCircleCheckBig />
            Returned
          </div>
          <p className="text-sm font-semibold">{returned}</p>
        </div>
        <div className="flex h-full min-h-[56px] w-7 items-center justify-center text-[var(--color-primary-soft)]">
          ›
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-[var(--color-warning-bg)] bg-[var(--color-warning-bg)] px-4 py-3">
        <div className="flex items-center justify-between text-xs text-[var(--color-text-tertiary)]">
          <span>Remaining</span>
          <span>
            Paid: <span className="font-semibold text-[var(--color-text-success)]">{paid}</span>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-[var(--color-error)]">{remaining}</p>
          <span>
            Total: <span className="font-semibold">{total}</span>
          </span>
        </div>
      </div>
    </article>
  );
}
