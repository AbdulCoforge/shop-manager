import * as React from "react";
import IconBadge from "@/components/atoms/IconBadge";

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function EmptyState({ icon, title, description }: EmptyStateProps) {
  return (
    <div className="mt-6 flex flex-col items-center justify-center gap-3 rounded-2xl border border-(--color-primary-soft) bg-(--color-background) py-16 text-center">
      <IconBadge className="h-12 w-12 rounded-2xl bg-(--color-primary-soft) text-(--color-text-tertiary)">
        {icon}
      </IconBadge>
      <h3 className="text-lg font-semibold text-(--color-text-tertiary)">{title}</h3>
      <p className="text-sm text-(--color-text-tertiary)">{description}</p>
    </div>
  );
}
