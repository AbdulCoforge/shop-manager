import * as React from "react";
import { Button } from "@/components/ui/button";

type AdvanceButtonProps = React.ComponentProps<typeof Button>;

export default function AdvanceButton({
  variant,
  className,
  children,
  ...props
}: AdvanceButtonProps) {
  return (
    <Button variant={variant} className={className} {...props}>
      {children}
    </Button>
  );
}
