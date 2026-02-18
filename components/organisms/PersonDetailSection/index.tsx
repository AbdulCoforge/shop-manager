import * as React from "react";
import {
  BsBoxSeam,
  FaPlus,
  LuCircleCheckBig,
  RiUser3Line,
  RxSpeakerLoud,
} from "@/app/icons";
import AdvanceButton from "@/components/atoms/AdvanceButton";
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
        <button className="text-sm text-(--color-text-tertiary)">← Back to All People</button>
        <AdvanceButton className="rounded-2xl bg-(--color-primary) px-6 py-3 text-sm font-semibold text-(--color-text-secondary) shadow-(--shadow-primary)">
          <FaPlus />
          Add Item
        </AdvanceButton>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-(--color-primary) text-(--color-text-secondary)">
          <RiUser3Line className="text-xl" />
          <span className="absolute -right-2 -top-2 rounded-full bg-(--color-text-warning) px-2 py-0.5 text-[10px] font-semibold text-(--color-text-secondary)">
            #{personId}
          </span>
        </div>
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-sm text-(--color-text-tertiary)">Borrowing &amp; Payment History</p>
        </div>
      </div>

      <div className="rounded-3xl border border-(--color-warning-bg) bg-(--color-warning-bg) p-6 shadow-(--shadow-warning)">
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
          className="basis-[260px] border-(--color-warning-bg) bg-(--color-warning-bg)"
          iconClassName="bg-(--color-secondary-soft) text-(--color-text-warning)"
          labelClassName="text-(--color-text-warning)"
        />
        <StatCard
          icon={<LuCircleCheckBig className="text-xl" />}
          value={stats.returnedItems}
          label="Returned"
          className="basis-[260px] border-(--color-success-bg) bg-(--color-success-bg)"
          iconClassName="bg-(--color-tertiary-soft) text-(--color-text-success)"
          labelClassName="text-(--color-text-success)"
        />
      </div>

      <div className="rounded-3xl border border-(--color-primary-soft) bg-(--color-background) p-6 shadow-(--shadow-panel)">
        <TabToggle
          tabs={[`Active (${stats.activeItems})`, `Returned (${stats.returnedItems})`]}
          activeIndex={0}
        />

        <div className="mt-6 rounded-3xl border border-(--color-primary-soft) bg-(--color-bg-primary) p-6">
          <AdvanceButton className="w-full justify-center rounded-2xl bg-(--color-secondary) px-4 py-2 text-sm font-semibold text-(--color-text-secondary)">
            <RxSpeakerLoud className="text-base" />
            Hear Details
          </AdvanceButton>

          <div className="mt-5 flex items-center gap-4">
            <IconBadge className="h-10 w-10 rounded-full bg-(--color-bg-primary) text-(--color-primary)">
              <BsBoxSeam />
            </IconBadge>
            <div>
              <p className="text-xs text-(--color-text-tertiary)">Item</p>
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
