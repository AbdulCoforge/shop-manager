import { Button } from "@/components/ui/button"

interface AdvanceButtonTypes{
    variant?:  "secondary" | "tertiary" | "primary" ;
    className?: string;
    children?: string | React.ReactNode;
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

