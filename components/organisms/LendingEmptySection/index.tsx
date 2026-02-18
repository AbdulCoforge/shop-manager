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
          className="basis-[280px] border-[var(--color-warning-bg)] bg-[var(--color-warning-bg)]"
          iconClassName="bg-[var(--color-secondary-soft)] text-[var(--color-text-warning)]"
          labelClassName="text-[var(--color-text-warning)]"
        />
        <StatCard
          icon={<LuCircleCheckBig className="text-xl" />}
          value={returned}
          label="Returned"
          className="basis-[280px] border-[var(--color-success-bg)] bg-[var(--color-success-bg)]"
          iconClassName="bg-[var(--color-tertiary-soft)] text-[var(--color-text-success)]"
          labelClassName="text-[var(--color-text-success)]"
        />
      </div>

      <div className="rounded-3xl border border-[var(--color-primary-soft)] bg-[var(--color-background)] p-6 shadow-[var(--shadow-panel)]">
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
