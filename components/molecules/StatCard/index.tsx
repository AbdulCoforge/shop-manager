import * as React from "react";
import { cn } from "@/lib/utils";
import IconBadge from "@/components/atoms/IconBadge";

interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  className?: string;
  iconClassName?: string;
  labelClassName?: string;
}

const baseClass =
  "flex items-center gap-4 rounded-2xl border px-5 py-4 shadow-[0_8px_20px_rgba(15,23,42,0.08)]";

export default function StatCard({
  icon,
  value,
  label,
  className,
  iconClassName,
  labelClassName,
}: StatCardProps) {
  return (
    <div className={cn(baseClass, "flex-1", className)}>
      <IconBadge
        className={cn("h-10 w-10 rounded-2xl", iconClassName)}
      >
        {icon}
      </IconBadge>
      <div>
        <p className="text-lg font-semibold">{value}</p>
        <p className={cn("text-xs", labelClassName)}>{label}</p>
      </div>
    </div>
  );
}
