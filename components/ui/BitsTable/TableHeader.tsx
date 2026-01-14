import { Home, Star } from "lucide-react";

interface TableHeaderProps {
    workbookName: string;
    gridName: string;
}

const TableHeader = ({ workbookName, gridName }: TableHeaderProps) => {
    return (
        <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 border-b border-border bg-card relative ">
            <div className="hidden md:flex items-center gap-2 text-xs sm:text-sm bg-gray-100 p-2 rounded-full absolute left-[35%] lg:left-[40%] top-3 sm:top-5">
                <span className="hidden lg:inline">Grid running</span>
                <span className="lg:hidden">Running</span>
                <div className="w-16 sm:w-24 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-[50%] bg-blue-500 rounded-full" />
                </div>
                <span>10%</span>
            </div>

            <Home className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
            <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500 fill-yellow-500 shrink-0" />
            <span className="text-xs sm:text-sm truncate max-w-[120px] sm:max-w-none">{workbookName}</span>
            <span className="hidden sm:inline">/</span>
            <span className="text-xs sm:text-sm truncate max-w-[80px] sm:max-w-none hidden sm:inline">{gridName}</span>
            <div className="ml-auto flex items-center gap-1 sm:gap-3">
                <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 bg-muted rounded-lg">
                    <svg className="h-3 w-3 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span className="text-xs sm:text-sm">500/500</span>
                </div>
                <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded">Free</span>
            </div>
        </div>
    );
};

export default TableHeader;
