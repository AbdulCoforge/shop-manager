import { Input } from "@/components/ui/input"

interface InputFieldTypes {
    type?: string;
    className: string;
}

export default function InputField({
    type = 'text',
    className,
}: InputFieldTypes) {
    return (
        <Input
            type={type}
            className={className}
        />
    )
}

