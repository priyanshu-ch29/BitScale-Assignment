import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AlertBannerProps {
    message: string;
    daysRemaining: number;
}

const AlertBanner = ({ message, daysRemaining }: AlertBannerProps) => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 px-2 sm:px-4 py-2 sm:py-2 bg-[#C81E1E] text-white">
            <div className="flex items-center gap-2 text-center sm:text-left">
                <span className="text-xs sm:text-sm">
                    {message} {daysRemaining} days
                </span>
                <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
            </div>
            <Button
                variant="outline"
                size="sm"
                className="bg-white text-gray-700 hover:bg-red-50 border-0 h-7 px-3 text-xs font-medium whitespace-nowrap"
            >
                Pay Now
            </Button>
        </div>
    );
};

export default AlertBanner;
