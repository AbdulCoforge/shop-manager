import * as React from "react";
import AdvanceButton from "@/components/atoms/AdvanceButton";
import IconBadge from "@/components/atoms/IconBadge";
import { Input } from "@/components/ui/input";

interface InputFieldProps extends React.ComponentProps<"input"> {
  icon?: React.ReactNode;
  actionLabel?: string;
  actionIcon?: React.ReactNode;
  containerClassName?: string;
  inputClassName?: string;
  actionClassName?: string;
  onActionClick?: () => void;
}

export default function InputField({
  type = "text",
  icon,
  actionLabel,
  actionIcon,
  containerClassName,
  inputClassName,
  actionClassName,
  onActionClick,
  className,
  ...props
}: InputFieldProps) {
  return (
    <div
      className={[
        "flex flex-wrap items-center gap-4 rounded-2xl border border-(--color-primary-soft) bg-(--color-background) px-4 py-3 shadow-sm",
        containerClassName,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {icon ? (
        <IconBadge className="h-10 w-10 rounded-xl bg-(--color-bg-primary) text-(--color-primary)">
          {icon}
        </IconBadge>
      ) : null}
      <Input
        type={type}
        className={[
          " flex-1 border-0 bg-transparent px-0 text-sm text-(--color-text-tertiary) shadow-none outline-none focus-visible:ring-0",
          inputClassName,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
      {actionLabel ? (
        <AdvanceButton
          className={[
            "rounded-xl bg-(--color-primary) px-4 py-2 text-sm font-semibold text-(--color-text-secondary)",
            actionClassName,
          ]
            .filter(Boolean)
            .join(" ")}
          onClick={onActionClick}
        >
          {actionIcon}
          {actionLabel}
        </AdvanceButton>
      ) : null}
    </div>
  );
}
