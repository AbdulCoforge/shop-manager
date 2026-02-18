import * as React from "react";
import ActionButton from "@/components/atoms/ActionButton";
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
    <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-blue-200/70 bg-white px-4 py-3 shadow-sm">
      <IconBadge className="h-10 w-10 rounded-xl bg-blue-100 text-blue-600">
        {icon}
      </IconBadge>
      <input
        className="min-w-[220px] flex-1 bg-transparent text-sm text-slate-600 outline-none"
        placeholder={placeholder}
      />
      <ActionButton className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
        {actionIcon}
        {actionLabel}
      </ActionButton>
    </div>
  );
}
