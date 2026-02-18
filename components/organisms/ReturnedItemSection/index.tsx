import * as React from "react";
import { BsBoxSeam, CiCalendar, RxSpeakerLoud } from "@/app/icons";
import AdvanceButton from "@/components/atoms/AdvanceButton";
import IconBadge from "@/components/atoms/IconBadge";
import AmountBreakdown from "@/components/molecules/AmountBreakdown";
import PaymentHistory from "@/components/molecules/PaymentHistory";
import TabToggle from "@/components/molecules/TabToggle";

export default function ReturnedItemSection() {
  return (
    <section className="space-y-6">
      <div className="rounded-3xl border border-[var(--color-primary-soft)] bg-[var(--color-background)] p-6 shadow-[var(--shadow-panel)]">
        <TabToggle tabs={["Active (1)", "Returned (1)"]} activeIndex={1} />

        <div className="mt-6 rounded-3xl border border-[var(--color-success-bg)] bg-[var(--color-bg-tertiary)] p-6">
          <AdvanceButton className="w-full justify-center rounded-2xl bg-[var(--color-secondary)] px-4 py-2 text-sm font-semibold text-[var(--color-text-secondary)]">
            <RxSpeakerLoud className="text-base" />
            Hear Details
          </AdvanceButton>

          <div className="mt-5 flex items-center gap-4">
            <IconBadge className="h-10 w-10 rounded-full bg-[var(--color-success-bg)] text-[var(--color-text-success)]">
              <BsBoxSeam />
            </IconBadge>
            <div>
              <p className="text-xs text-[var(--color-text-tertiary)]">Item</p>
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

          <div className="mt-4 flex items-center gap-3 text-sm text-[var(--color-text-tertiary)]">
            <IconBadge className="h-9 w-9 rounded-full bg-[var(--color-success-bg)] text-[var(--color-text-success)]">
              <CiCalendar />
            </IconBadge>
            Returned on 26/01/2026
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <AdvanceButton className="flex flex-1 basis-[180px] items-center justify-center gap-2 rounded-xl bg-[var(--color-text-warning)] px-4 py-3 text-sm font-semibold text-[var(--color-text-secondary)]">
              <span>$</span>
              Pay
            </AdvanceButton>
            <AdvanceButton className="flex flex-1 basis-[180px] items-center justify-center gap-2 rounded-xl bg-[var(--color-tertiary)] px-4 py-3 text-sm font-semibold text-[var(--color-text-secondary)]">
              <span>$</span>
              All Paid
            </AdvanceButton>
          </div>

          <div className="mt-4 rounded-2xl bg-[var(--color-success-bg)] px-4 py-3 text-center text-sm font-semibold text-[var(--color-text-success)]">
            RETURNED
          </div>
        </div>
      </div>
    </section>
  );
}
