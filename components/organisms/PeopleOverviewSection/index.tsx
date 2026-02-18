'use client'

import * as React from "react";
import {
  BsBoxSeam,
  FaPlus,
  HiArrowTrendingUp,
  IoIosMic,
  LuCircleCheckBig,
  RiUser3Line,
} from "@/app/icons";
import SectionHeader from "@/components/molecules/SectionHeader";
import StatCard from "@/components/molecules/StatCard";
import PersonCard from "@/components/molecules/PersonCard";
import TabToggle from "@/components/molecules/TabToggle";
import EmptyState from "@/components/molecules/EmptyState";
import InputField from "@/components/atoms/InputField";

interface PersonSummary {
  id: number;
  name: string;
  totalItems: number;
  active: number;
  returned: number;
  paid: string;
  remaining: string;
  total: string;
}

interface PeopleOverviewSectionProps {
  stats: {
    people: number;
    active: number;
    returned: number;
  };
  people: PersonSummary[];
  active: number;
  returned: number;
}

export default function PeopleOverviewSection({
  stats,
  people,
  active,
  returned,
}: PeopleOverviewSectionProps) {


  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <section className="space-y-6">
      <SectionHeader
        icon={<BsBoxSeam className="text-xl" />}
        title="Shop Tracker"
        subtitle="Track lending by person"
        actionLabel="Add New"
        actionIcon={<FaPlus />}
      />

      <div className="flex flex-wrap gap-4">
        <StatCard
          icon={<RiUser3Line className="text-xl" />}
          value={stats.people}
          label="People"
          className="basis-[220px] border-(--color-primary-soft) bg-(--color-bg-primary)"
          iconClassName="bg-(--color-primary-soft) text-(--color-primary)"
          labelClassName="text-(--color-primary)"
        />
        <StatCard
          icon={<HiArrowTrendingUp className="text-xl" />}
          value={stats.active}
          label="Active"
          className="basis-[220px] border-(--color-warning-bg) bg-(--color-warning-bg)"
          iconClassName="bg-(--color-secondary-soft) text-(--color-text-warning)"
          labelClassName="text-(--color-text-warning)"
        />
        <StatCard
          icon={<LuCircleCheckBig className="text-xl" />}
          value={stats.returned}
          label="Returned"
          className="basis-[220px] border-(--color-success-bg) bg-(--color-success-bg)"
          iconClassName="bg-(--color-tertiary-soft) text-(--color-text-success)"
          labelClassName="text-(--color-text-success)"
        />
      </div>

      <InputField
        icon={<RiUser3Line className="text-xl" />}
        placeholder="Search by person name or number..."
        actionLabel="Speak"
        actionIcon={<IoIosMic />}
      />


      <div className="rounded-3xl border border-(--color-primary-soft) bg-(--color-background) p-6 shadow-(--shadow-panel)">
        {/* <TabToggle tabs={[`Active (${active})`, `Returned (${returned})`]} activeIndex={0} /> */}
        <TabToggle
          tabs={[`Active (${active})`, `Returned (${returned})`]}
          activeIndex={activeTab}
          onTabChange={setActiveTab}   // ✅ now updates
        />
        <EmptyState
          icon={<BsBoxSeam className="text-2xl" />}
          title="No Active Lendings"
          description='Click "Add New" to start tracking'
        />
      </div>

      {/* <div className="space-y-6">
        {people.map((person) => (
          <PersonCard key={person.id} {...person} />
        ))}
      </div> */}
    </section>
  );
}
