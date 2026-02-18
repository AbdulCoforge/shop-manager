import * as React from "react";
import AdvanceButton from "@/components/atoms/AdvanceButton";
import IconBadge from "@/components/atoms/IconBadge";

interface SearchBarProps {
  icon: React.ReactNode;
  placeholder: string;
  actionLabel: string;
  actionIcon?: React.ReactNode;
}

export default function SearchBar({
  icon,
  placeholder,
  actionLabel,
  actionIcon,
}: SearchBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-[var(--color-primary-soft)] bg-[var(--color-background)] px-4 py-3 shadow-sm">
      <IconBadge className="h-10 w-10 rounded-xl bg-[var(--color-bg-primary)] text-[var(--color-primary)]">
        {icon}
      </IconBadge>
      <input
        className="min-w-[220px] flex-1 bg-transparent text-sm text-[var(--color-text-tertiary)] outline-none"
        placeholder={placeholder}
      />
      <AdvanceButton className="rounded-xl bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-[var(--color-text-secondary)]">
        {actionIcon}
        {actionLabel}
      </AdvanceButton>
    </div>
  );
}
