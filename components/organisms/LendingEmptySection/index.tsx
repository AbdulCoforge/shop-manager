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
      {/* <SectionHeader
        icon={<BsBoxSeam className="text-xl" />}
        title="Shop Tracker"
        subtitle="Track your lendings"
        actionLabel="Add New"
        actionIcon={<FaPlus />}
      /> */}

      {/* <div className="flex flex-wrap gap-4">
        <StatCard
          icon={<HiArrowTrendingUp className="text-xl" />}
          value={active}
          label="Active Lendings"
          className="basis-[280px] border-(--color-warning-bg) bg-(--color-warning-bg)"
          iconClassName="bg-(--color-secondary-soft) text-(--color-text-warning)"
          labelClassName="text-(--color-text-warning)"
        />
        <StatCard
          icon={<LuCircleCheckBig className="text-xl" />}
          value={returned}
          label="Returned"
          className="basis-[280px] border-(--color-success-bg) bg-(--color-success-bg)"
          iconClassName="bg-(--color-tertiary-soft) text-(--color-text-success)"
          labelClassName="text-(--color-text-success)"
        />
      </div> */}

      <div className="rounded-3xl border border-(--color-primary-soft) bg-(--color-background) p-6 shadow-(--shadow-panel)">
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
