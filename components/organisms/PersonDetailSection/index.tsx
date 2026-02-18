import * as React from "react";
import {
  BsBoxSeam,
  FaPlus,
  LuCircleCheckBig,
  RiUser3Line,
  RxSpeakerLoud,
} from "@/app/icons";
import ActionButton from "@/components/atoms/ActionButton";
import IconBadge from "@/components/atoms/IconBadge";
import StatCard from "@/components/molecules/StatCard";
import SummaryTiles from "@/components/molecules/SummaryTiles";
import TabToggle from "@/components/molecules/TabToggle";
import AmountBreakdown from "@/components/molecules/AmountBreakdown";
import PaymentHistory from "@/components/molecules/PaymentHistory";

interface PersonDetailSectionProps {
  personId: number;
  name: string;
  summary: {
    total: string;
    paid: string;
    remaining: string;
  };
  stats: {
    activeItems: number;
    returnedItems: number;
  };
}

export default function PersonDetailSection({
  personId,
  name,
  summary,
  stats,
}: PersonDetailSectionProps) {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <button className="text-sm text-slate-500">← Back to All People</button>
        <ActionButton className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30">
          <FaPlus />
          Add Item
        </ActionButton>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
          <RiUser3Line className="text-xl" />
          <span className="absolute -right-2 -top-2 rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-semibold text-white">
            #{personId}
          </span>
        </div>
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-sm text-slate-500">Borrowing &amp; Payment History</p>
        </div>
      </div>

      <div className="rounded-3xl border border-yellow-300 bg-yellow-100/70 p-6 shadow-[0_12px_30px_rgba(250,204,21,0.2)]">
        <SummaryTiles
          total={summary.total}
          paid={summary.paid}
          remaining={summary.remaining}
        />
      </div>

      <div className="flex flex-wrap gap-4">
        <StatCard
          icon={<BsBoxSeam className="text-xl" />}
          value={stats.activeItems}
          label="Active Items"
          className="basis-[260px] border-orange-200 bg-orange-100/70"
          iconClassName="bg-orange-200 text-orange-700"
          labelClassName="text-orange-700"
        />
        <StatCard
          icon={<LuCircleCheckBig className="text-xl" />}
          value={stats.returnedItems}
          label="Returned"
          className="basis-[260px] border-emerald-200 bg-emerald-100/70"
          iconClassName="bg-emerald-200 text-emerald-700"
          labelClassName="text-emerald-700"
        />
      </div>

      <div className="rounded-3xl border border-blue-200/60 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <TabToggle
          tabs={[`Active (${stats.activeItems})`, `Returned (${stats.returnedItems})`]}
          activeIndex={0}
        />

        <div className="mt-6 rounded-3xl border border-blue-200 bg-blue-50/80 p-6">
          <ActionButton className="w-full justify-center rounded-2xl bg-purple-600 px-4 py-2 text-sm font-semibold text-white">
            <RxSpeakerLoud className="text-base" />
            Hear Details
          </ActionButton>

          <div className="mt-5 flex items-center gap-4">
            <IconBadge className="h-10 w-10 rounded-full bg-blue-100 text-blue-600">
              <BsBoxSeam />
            </IconBadge>
            <div>
              <p className="text-xs text-slate-500">Item</p>
              <p className="text-base font-semibold">test</p>
            </div>
          </div>

          <AmountBreakdown total="$30.00" paid="$10.00" remaining="$20.00" />

          <PaymentHistory
            date="26/01/2026"
            amount="+$10.00"
            totalPaid="$10.00"
            stillOwes="$20.00"
          />
        </div>
      </div>
    </section>
  );
}
