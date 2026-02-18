import * as React from "react";
import ActionButton from "@/components/atoms/ActionButton";
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
        <IconBadge className="h-12 w-12 rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
          {icon}
        </IconBadge>
        <div>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-sm text-slate-500">{subtitle}</p>
        </div>
      </div>
      <ActionButton
        className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30"
        onClick={onAction}
      >
        {actionIcon}
        {actionLabel}
      </ActionButton>
    </header>
  );
}
