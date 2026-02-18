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
import SearchBar from "@/components/molecules/SearchBar";
import PersonCard from "@/components/molecules/PersonCard";

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
}

export default function PeopleOverviewSection({
  stats,
  people,
}: PeopleOverviewSectionProps) {
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
          className="basis-[220px] border-[var(--color-primary-soft)] bg-[var(--color-bg-primary)]"
          iconClassName="bg-[var(--color-primary-soft)] text-[var(--color-primary)]"
          labelClassName="text-[var(--color-primary)]"
        />
        <StatCard
          icon={<HiArrowTrendingUp className="text-xl" />}
          value={stats.active}
          label="Active"
          className="basis-[220px] border-[var(--color-warning-bg)] bg-[var(--color-warning-bg)]"
          iconClassName="bg-[var(--color-secondary-soft)] text-[var(--color-text-warning)]"
          labelClassName="text-[var(--color-text-warning)]"
        />
        <StatCard
          icon={<LuCircleCheckBig className="text-xl" />}
          value={stats.returned}
          label="Returned"
          className="basis-[220px] border-[var(--color-success-bg)] bg-[var(--color-success-bg)]"
          iconClassName="bg-[var(--color-tertiary-soft)] text-[var(--color-text-success)]"
          labelClassName="text-[var(--color-text-success)]"
        />
      </div>

      <SearchBar
        icon={<RiUser3Line className="text-xl" />}
        placeholder="Search by person name or number..."
        actionLabel="Speak"
        actionIcon={<IoIosMic />}
      />

      <div className="space-y-6">
        {people.map((person) => (
          <PersonCard key={person.id} {...person} />
        ))}
      </div>
    </section>
  );
}
