import * as React from "react";
import IconBadge from "@/components/atoms/IconBadge";

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function EmptyState({ icon, title, description }: EmptyStateProps) {
  return (
    <div className="mt-6 flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-100 bg-white py-16 text-center">
      <IconBadge className="h-12 w-12 rounded-2xl bg-slate-100 text-slate-400">
        {icon}
      </IconBadge>
      <h3 className="text-lg font-semibold text-slate-500">{title}</h3>
      <p className="text-sm text-slate-400">{description}</p>
    </div>
  );
}
