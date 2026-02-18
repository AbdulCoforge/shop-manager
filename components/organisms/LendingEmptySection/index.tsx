import * as React from "react";
import { BsBoxSeam, FaPlus, HiArrowTrendingUp, LuCircleCheckBig } from "@/app/icons";
import SectionHeader from "@/components/molecules/SectionHeader";
import StatCard from "@/components/molecules/StatCard";
import TabToggle from "@/components/molecules/TabToggle";
import EmptyState from "@/components/molecules/EmptyState";

interface LendingEmptySectionProps {
  active: number;
  returned: number;
}

export default function LendingEmptySection({
  active,
  returned,
}: LendingEmptySectionProps) {
  return (
    <section className="space-y-6">
      <SectionHeader
        icon={<BsBoxSeam className="text-xl" />}
        title="Shop Tracker"
        subtitle="Track your lendings"
        actionLabel="Add New"
        actionIcon={<FaPlus />}
      />

      <div className="flex flex-wrap gap-4">
        <StatCard
          icon={<HiArrowTrendingUp className="text-xl" />}
          value={active}
          label="Active Lendings"
          className="basis-[280px] border-orange-200 bg-orange-100/70"
          iconClassName="bg-orange-200 text-orange-700"
          labelClassName="text-orange-700"
        />
        <StatCard
          icon={<LuCircleCheckBig className="text-xl" />}
          value={returned}
          label="Returned"
          className="basis-[280px] border-emerald-200 bg-emerald-100/70"
          iconClassName="bg-emerald-200 text-emerald-700"
          labelClassName="text-emerald-700"
        />
      </div>

      <div className="rounded-3xl border border-blue-200/60 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <TabToggle tabs={[`Active (${active})`, `Returned (${returned})`]} activeIndex={0} />
        <EmptyState
          icon={<BsBoxSeam className="text-2xl" />}
          title="No Active Lendings"
          description='Click "Add New" to start tracking'
        />
      </div>
    </section>
  );
}
