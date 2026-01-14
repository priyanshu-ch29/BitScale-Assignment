import { Plus, X, Play, Sparkles, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Tab {
    id: string;
    name: string;
    isActive?: boolean;
    hasIndicator?: boolean;
}

const tabs: Tab[] = [
    { id: "grid", name: "Grid", isActive: false },
    { id: "bitscale", name: "Bitscale grid only", isActive: true, hasIndicator: true },
    { id: "user-engagement", name: "User Engagement...", isActive: false },
    { id: "customer-insights", name: "Customer Insights...", isActive: false },
    { id: "audience", name: "Audience Interact...", isActive: false },
    { id: "lead-gen", name: "Lead Generation...", isActive: false },
];

const TabBar = () => {
    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 px-2 sm:px-4 py-2 border-t border-border bg-card">
            <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto scrollbar-hide">
                <Button variant="ghost" size="sm" className="h-7 sm:h-8 px-1 sm:px-2 gap-1 shrink-0">
                    <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="text-xs sm:text-sm">Grid</span>
                </Button>

                {tabs.map((tab) => (
                    <Button
                        key={tab.id}
                        variant={tab.isActive ? "secondary" : "ghost"}
                        size="sm"
                        className={`h-7 sm:h-8 px-2 sm:px-3 gap-1 sm:gap-2 text-xs sm:text-sm whitespace-nowrap shrink-0 ${tab.isActive ? "bg-green-50 text-green-700 hover:bg-green-100" : ""}`}
                    >
                        {tab.name}
                        {tab.hasIndicator && (
                            <span className="flex items-center gap-1">
                                <span className="text-muted-foreground">:</span>
                            </span>
                        )}
                    </Button>
                ))}

                <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8 text-muted-foreground hidden md:flex shrink-0">
                    <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8 text-muted-foreground hidden md:flex shrink-0">
                    <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
            </div>

            <div className="flex flex-wrap items-center gap-1 sm:gap-2 w-full sm:w-auto">
                <Button variant="ghost" size="sm" className="h-7 sm:h-8 gap-1 sm:gap-2 text-red-500 hover:text-red-600 hover:bg-red-50 text-xs sm:text-sm">
                    <X className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Kill Run</span>
                    <span className="sm:hidden">Kill</span>
                </Button>

                <Button variant="outline" size="sm" className="h-7 sm:h-8 gap-1 sm:gap-2 relative text-xs sm:text-sm">
                    <Play className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden lg:inline">Auto Run</span>
                    <span className="lg:hidden">Run</span>
                    <span className="w-2 h-2 rounded-full bg-blue-500 absolute right-0 -top-0.5" />
                </Button>

                <Button variant="outline" size="sm" className="h-7 sm:h-8 gap-1 sm:gap-2 relative text-xs sm:text-sm">
                    <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden lg:inline">Auto Dedupe</span>
                    <span className="lg:hidden">Dedupe</span>
                    <span className="w-2 h-2 rounded-full bg-blue-500 absolute right-0 -top-0.5" />
                </Button>

                <Button variant="outline" size="sm" className="h-7 sm:h-8 gap-1 sm:gap-2 text-xs sm:text-sm">
                    <HeadphonesIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Support</span>
                    <span className="sm:hidden">Help</span>
                </Button>
            </div>
        </div>
    );
};

// Need to import these
import { ChevronLeft, ChevronRight } from "lucide-react";

export default TabBar;
