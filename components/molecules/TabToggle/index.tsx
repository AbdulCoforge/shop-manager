import * as React from "react";
import { cn } from "@/lib/utils";

interface TabToggleProps {
  tabs: string[];
  activeIndex?: number;
}

export default function TabToggle({ tabs, activeIndex = 0 }: TabToggleProps) {
  return (
    <div className="flex rounded-2xl bg-slate-100 p-1 text-sm font-medium text-slate-600">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={cn(
            "flex-1 rounded-2xl py-2",
            index === activeIndex && "bg-white shadow"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
