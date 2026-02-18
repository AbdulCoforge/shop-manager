import * as React from "react";
import { cn } from "@/lib/utils";

interface TabToggleProps {
  tabs: string[];
  activeIndex?: number;
}

export default function TabToggle({ tabs, activeIndex = 0 }: TabToggleProps) {
  return (
    <div className="flex rounded-2xl bg-[var(--color-primary-soft)] p-1 text-sm font-medium text-[var(--color-text-tertiary)]">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={cn(
            "flex-1 rounded-2xl py-2",
            index === activeIndex && "bg-[var(--color-background)] shadow"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
