import { Check } from "lucide-react";

export function CheckParagraph({ children }) {
    return (
        <p className="flex items-center flex-row gap-2">
            <Check strokeWidth={3} className='w-4 h-4 bg-green-400 rounded-full text-white p-0.5' /> 
            {children}
        </p>
    )
}
