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
          className="basis-[220px] border-blue-200 bg-blue-100/70"
          iconClassName="bg-blue-200 text-blue-700"
          labelClassName="text-blue-700"
        />
        <StatCard
          icon={<HiArrowTrendingUp className="text-xl" />}
          value={stats.active}
          label="Active"
          className="basis-[220px] border-orange-200 bg-orange-100/70"
          iconClassName="bg-orange-200 text-orange-700"
          labelClassName="text-orange-700"
        />
        <StatCard
          icon={<LuCircleCheckBig className="text-xl" />}
          value={stats.returned}
          label="Returned"
          className="basis-[220px] border-emerald-200 bg-emerald-100/70"
          iconClassName="bg-emerald-200 text-emerald-700"
          labelClassName="text-emerald-700"
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
