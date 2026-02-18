import * as React from "react";
import { cn } from "@/lib/utils";

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export default function ActionButton({ className, ...props }: ActionButtonProps) {
  return (
    <button
      type="button"
      className={cn("inline-flex items-center gap-2", className)}
      {...props}
    />
  );
}
