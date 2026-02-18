import PeopleOverviewSection from "@/components/organisms/PeopleOverviewSection";
import LendingEmptySection from "@/components/organisms/LendingEmptySection";
import PersonDetailSection from "@/components/organisms/PersonDetailSection";
import AddLendingModal from "@/components/organisms/AddLendingModal";
import ReturnedItemSection from "@/components/organisms/ReturnedItemSection";

const people = [
  {
    id: 1,
    name: "test",
    totalItems: 2,
    active: 1,
    returned: 1,
    paid: "$40.00",
    remaining: "$30.00",
    total: "$70.00",
  },
  {
    id: 2,
    name: "test1",
    totalItems: 1,
    active: 1,
    returned: 0,
    paid: "$0.00",
    remaining: "$12.00",
    total: "$12.00",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f3f6ff] text-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-12">
        <PeopleOverviewSection
          stats={{ people: 3, active: 3, returned: 1 }}
          people={people}
        />

        <LendingEmptySection active={0} returned={0} />

        <PersonDetailSection
          personId={1}
          name="test"
          summary={{ total: "$70.00", paid: "$40.00", remaining: "$30.00" }}
          stats={{ activeItems: 1, returnedItems: 1 }}
        />

        <AddLendingModal />

        <ReturnedItemSection />
      </div>
    </div>
  );
}
