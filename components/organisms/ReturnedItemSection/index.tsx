import * as React from "react";
import { BsBoxSeam, CiCalendar, RxSpeakerLoud } from "@/app/icons";
import ActionButton from "@/components/atoms/ActionButton";
import IconBadge from "@/components/atoms/IconBadge";
import AmountBreakdown from "@/components/molecules/AmountBreakdown";
import PaymentHistory from "@/components/molecules/PaymentHistory";
import TabToggle from "@/components/molecules/TabToggle";

export default function ReturnedItemSection() {
  return (
    <section className="space-y-6">
      <div className="rounded-3xl border border-blue-200/60 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <TabToggle tabs={["Active (1)", "Returned (1)"]} activeIndex={1} />

        <div className="mt-6 rounded-3xl border border-emerald-300 bg-emerald-50/80 p-6">
          <ActionButton className="w-full justify-center rounded-2xl bg-purple-600 px-4 py-2 text-sm font-semibold text-white">
            <RxSpeakerLoud className="text-base" />
            Hear Details
          </ActionButton>

          <div className="mt-5 flex items-center gap-4">
            <IconBadge className="h-10 w-10 rounded-full bg-emerald-100 text-emerald-600">
              <BsBoxSeam />
            </IconBadge>
            <div>
              <p className="text-xs text-slate-500">Item</p>
              <p className="text-base font-semibold">test</p>
            </div>
          </div>

          <AmountBreakdown total="$40.00" paid="$30.00" remaining="$10.00" />

          <PaymentHistory
            date="26/01/2026"
            amount="+$30.00"
            totalPaid="$30.00"
            stillOwes="$10.00"
          />

          <div className="mt-4 flex items-center gap-3 text-sm text-slate-600">
            <IconBadge className="h-9 w-9 rounded-full bg-emerald-100 text-emerald-600">
              <CiCalendar />
            </IconBadge>
            Returned on 26/01/2026
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <ActionButton className="flex flex-1 basis-[180px] items-center justify-center gap-2 rounded-xl bg-orange-600 px-4 py-3 text-sm font-semibold text-white">
              <span>$</span>
              Pay
            </ActionButton>
            <ActionButton className="flex flex-1 basis-[180px] items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white">
              <span>$</span>
              All Paid
            </ActionButton>
          </div>

          <div className="mt-4 rounded-2xl bg-emerald-200/70 px-4 py-3 text-center text-sm font-semibold text-emerald-700">
            RETURNED
          </div>
        </div>
      </div>
    </section>
  );
}
