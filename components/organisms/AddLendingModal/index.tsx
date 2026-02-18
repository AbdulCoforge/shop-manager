import * as React from "react";
import {
  BsBoxSeam,
  CiCalendar,
  FaPlus,
  IoIosMic,
  RiUser3Line,
  RxSpeakerLoud,
} from "@/app/icons";
import ActionButton from "@/components/atoms/ActionButton";
import IconBadge from "@/components/atoms/IconBadge";

export default function AddLendingModal() {
  return (
    <section className="space-y-6">
      <div className="rounded-3xl bg-black/40 p-8">
        <div className="mx-auto max-w-xl rounded-3xl bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.2)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <FaPlus className="text-blue-600" />
              Add New Lending
            </div>
            <span className="text-slate-400">✕</span>
          </div>

          <div className="mt-5 rounded-2xl bg-blue-50 p-4">
            <div className="flex items-center gap-3">
              <IconBadge className="h-10 w-10 rounded-full bg-white text-blue-600">
                <RiUser3Line />
              </IconBadge>
              <input
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none"
                placeholder="Person's Name"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <ActionButton className="flex flex-1 basis-[180px] items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white">
                <IoIosMic />
                Speak Name
              </ActionButton>
              <ActionButton className="flex flex-1 basis-[180px] items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-3 text-sm font-semibold text-white">
                <RxSpeakerLoud />
                Hear Name
              </ActionButton>
            </div>
          </div>

          <div className="mt-4 rounded-2xl bg-emerald-50 p-4">
            <div className="flex items-center gap-3">
              <IconBadge className="h-10 w-10 rounded-full bg-white text-emerald-600">
                <BsBoxSeam />
              </IconBadge>
              <input
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none"
                placeholder="Item Name"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <ActionButton className="flex flex-1 basis-[180px] items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white">
                <IoIosMic />
                Speak Item
              </ActionButton>
              <ActionButton className="flex flex-1 basis-[180px] items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-3 text-sm font-semibold text-white">
                <RxSpeakerLoud />
                Hear Item
              </ActionButton>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3 rounded-2xl bg-purple-50 px-4 py-3 text-sm font-medium text-slate-600">
            <IconBadge className="h-8 w-8 rounded-xl bg-white text-purple-600">
              <CiCalendar />
            </IconBadge>
            Today: 25/01/2026
          </div>

          <ActionButton className="mt-6 w-full justify-center rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white">
            <FaPlus />
            Add Record
          </ActionButton>
        </div>
      </div>
    </section>
  );
}
