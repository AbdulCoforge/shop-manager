'use client'
import * as React from "react";
import AdvanceButton from "@/components/atoms/AdvanceButton";
import IconBadge from "@/components/atoms/IconBadge";
import { useAddUserButtonStore } from "@/app/store/addUserStore";

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
  ...props
}: SectionHeaderProps) {

  const {isAddUserClicked, toggleAddUserClicked} = useAddUserButtonStore();
  console.log("isAddUserClicked : from top add user button",isAddUserClicked)
  

  return (
    <header className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <IconBadge className="h-12 w-12 rounded-2xl bg-(--color-primary) text-(--color-text-secondary) shadow-(--shadow-primary)">
          {icon}
        </IconBadge>
        <div>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-sm text-(--color-text-tertiary)">{subtitle}</p>
        </div>
      </div>
      <AdvanceButton
        className="rounded-2xl bg-(--color-primary) px-6 py-3 text-sm font-semibold text-(--color-text-secondary) shadow-(--shadow-primary)"
        onClick={toggleAddUserClicked}
      >
        {actionIcon}
        {actionLabel}
      </AdvanceButton>
    </header>
  );
}
