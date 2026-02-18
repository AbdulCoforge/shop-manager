import * as React from "react";
import {
  BsBoxSeam,
  CiCalendar,
  FaPlus,
  IoIosMic,
  RiUser3Line,
  RxSpeakerLoud,
} from "@/app/icons";
import AdvanceButton from "@/components/atoms/AdvanceButton";
import IconBadge from "@/components/atoms/IconBadge";

export default function AddLendingModal() {
  return (
    <section className="space-y-6">
      <div className="rounded-3xl bg-(--color-overlay) p-8">
        <div className="mx-auto max-w-xl rounded-3xl bg-(--color-background) p-6 shadow-(--shadow-modal)">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <FaPlus className="text-(--color-primary)" />
              Add New Lending
            </div>
            <span className="text-(--color-text-tertiary)">✕</span>
          </div>

          <div className="mt-5 rounded-2xl bg-(--color-bg-primary) p-4">
            <div className="flex items-center gap-3">
              <IconBadge className="h-10 w-10 rounded-full bg-(--color-background) text-(--color-primary)">
                <RiUser3Line />
              </IconBadge>
              <input
                className="w-full rounded-xl border border-(--color-primary-soft) bg-(--color-background) px-4 py-3 text-sm outline-none"
                placeholder="Person's Name"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <AdvanceButton className="flex flex-1 basis-[180px] items-center justify-center gap-2 rounded-xl bg-(--color-primary) px-4 py-3 text-sm font-semibold text-(--color-text-secondary)">
                <IoIosMic />
                Speak Name
              </AdvanceButton>
              <AdvanceButton className="flex flex-1 basis-[180px] items-center justify-center gap-2 rounded-xl bg-(--color-secondary) px-4 py-3 text-sm font-semibold text-(--color-text-secondary)">
                <RxSpeakerLoud />
                Hear Name
              </AdvanceButton>
            </div>
          </div>

          <div className="mt-4 rounded-2xl bg-(--color-bg-tertiary) p-4">
            <div className="flex items-center gap-3">
              <IconBadge className="h-10 w-10 rounded-full bg-(--color-background) text-(--color-text-success)">
                <BsBoxSeam />
              </IconBadge>
              <input
                className="w-full rounded-xl border border-(--color-primary-soft) bg-(--color-background) px-4 py-3 text-sm outline-none"
                placeholder="Item Name"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <AdvanceButton className="flex flex-1 basis-[180px] items-center justify-center gap-2 rounded-xl bg-(--color-tertiary) px-4 py-3 text-sm font-semibold text-(--color-text-secondary)">
                <IoIosMic />
                Speak Item
              </AdvanceButton>
              <AdvanceButton className="flex flex-1 basis-[180px] items-center justify-center gap-2 rounded-xl bg-(--color-secondary) px-4 py-3 text-sm font-semibold text-(--color-text-secondary)">
                <RxSpeakerLoud />
                Hear Item
              </AdvanceButton>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3 rounded-2xl bg-(--color-bg-secondary) px-4 py-3 text-sm font-medium text-(--color-text-tertiary)">
            <IconBadge className="h-8 w-8 rounded-xl bg-(--color-background) text-(--color-secondary)">
              <CiCalendar />
            </IconBadge>
            Today: 25/01/2026
          </div>

          <AdvanceButton className="mt-6 w-full justify-center rounded-2xl bg-(--color-primary) px-4 py-3 text-sm font-semibold text-(--color-text-secondary)">
            <FaPlus />
            Add Record
          </AdvanceButton>
        </div>
      </div>
    </section>
  );
}
