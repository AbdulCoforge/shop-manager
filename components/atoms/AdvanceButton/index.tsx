import { Button } from "@/components/ui/button"

interface AdvanceButtonTypes{
    variant?: "link" | "secondary" | "outline" | "default" | "primary" | "ghost";
    className?: string;
    children?: string;
}

export default function AdvanceButton ({
    variant = "primary",
    className,
    children,
    ...props
}: AdvanceButtonTypes){
    return(
        <Button
         variant={variant}
         className={className}
         >
            {children}
         </Button>
    )
}

