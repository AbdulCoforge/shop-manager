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
    <article className="rounded-3xl border border-orange-200 bg-orange-50/70 p-6 shadow-[0_12px_30px_rgba(249,115,22,0.12)]">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <IconBadge className="h-12 w-12 rounded-full bg-orange-100 text-orange-600">
            <RiUser3Line className="text-xl" />
          </IconBadge>
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-xs text-slate-500">
              Total: {totalItems} items borrowed
            </p>
          </div>
        </div>
        <span className="text-sm text-slate-400">#{id}</span>
      </div>

      <div className="mt-4 flex flex-wrap items-stretch gap-3">
        <div className="flex-1 basis-[220px] rounded-2xl bg-orange-100/70 px-4 py-3">
          <div className="flex items-center gap-2 text-xs text-orange-700">
            <HiArrowTrendingUp />
            Active
          </div>
          <p className="text-sm font-semibold">{active}</p>
        </div>
        <div className="flex-1 basis-[220px] rounded-2xl bg-emerald-100/80 px-4 py-3">
          <div className="flex items-center gap-2 text-xs text-emerald-700">
            <LuCircleCheckBig />
            Returned
          </div>
          <p className="text-sm font-semibold">{returned}</p>
        </div>
        <div className="flex h-full min-h-[56px] w-7 items-center justify-center text-slate-300">
          ›
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-yellow-200 bg-yellow-50 px-4 py-3">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>Remaining</span>
          <span>
            Paid: <span className="font-semibold text-emerald-600">{paid}</span>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-red-500">{remaining}</p>
          <span>
            Total: <span className="font-semibold">{total}</span>
          </span>
        </div>
      </div>
    </article>
  );
}
