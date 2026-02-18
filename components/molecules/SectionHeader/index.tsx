import * as React from "react";
import AdvanceButton from "@/components/atoms/AdvanceButton";
import IconBadge from "@/components/atoms/IconBadge";

interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  actionLabel: string;
  actionIcon?: React.ReactNode;
  onAction?: () => void;
}

export default function SectionHeader({
  icon,
  title,
  subtitle,
  actionLabel,
  actionIcon,
  onAction,
}: SectionHeaderProps) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <IconBadge className="h-12 w-12 rounded-2xl bg-[var(--color-primary)] text-[var(--color-text-secondary)] shadow-[var(--shadow-primary)]">
          {icon}
        </IconBadge>
        <div>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-sm text-[var(--color-text-tertiary)]">{subtitle}</p>
        </div>
      </div>
      <AdvanceButton
        className="rounded-2xl bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-[var(--color-text-secondary)] shadow-[var(--shadow-primary)]"
        onClick={onAction}
      >
        {actionIcon}
        {actionLabel}
      </AdvanceButton>
    </header>
  );
}
