import { Check } from "lucide-react";

export function CheckParagraph({ children }) {
    return (
        <div className="flex items-start flex-row gap-2">
            <Check strokeWidth={3} className='w-4 h-4 bg-green-400 rounded-full text-white p-0.5 flex-shrink-0' /> 
            <div className="flex-1">{children}</div>
        </div>
    );
}
