import * as React from "react";
import { cn } from "@/lib/utils";

interface IconBadgeProps {
  className?: string;
  children: React.ReactNode;
}

export default function IconBadge({ className, children }: IconBadgeProps) {
  return (
    <div
      className={cn("flex items-center justify-center", className)}
      aria-hidden
    >
      {children}
    </div>
  );
}
