import { ChevronDown, Filter, ArrowUpDown, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Toolbar = () => {
    return (
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 px-2 sm:px-4 py-2 sm:py-3 border-b border-border bg-card">
            <Button variant="outline" className="gap-1 sm:gap-2 h-7 sm:h-8 text-xs sm:text-sm relative">
                <div className="flex items-center gap-1">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-purple-100 rounded flex items-center justify-center">
                        <Zap className="h-2 w-2 sm:h-3 sm:w-3 text-purple-600" />
                    </div>
                    <span className="hidden sm:inline">Load Data</span>
                    <span className="sm:hidden">Load</span>
                </div>
                <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500 text-white text-[10px] sm:text-xs flex items-center justify-center absolute -right-1 sm:right-0 -top-1 sm:-top-1.5">1</span>
            </Button>
            <div className="hidden md:flex items-center gap-2 lg:gap-4 text-sm text-muted-foreground">
                <Button variant="outline" className="flex items-center gap-1 relative h-7 text-xs">
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18M9 3v18" />
                    </svg>
                    <span>2000 Rows</span>
                    <span className="w-2 h-2 rounded-full bg-blue-500 absolute right-0 -top-0.5" />
                </Button>

                <Button variant="outline" className="flex items-center gap-1 relative h-7 text-xs">
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18M9 3v18M15 3v18" />
                    </svg>
                    <span>16/20 Columns</span>
                    <span className="w-2 h-2 rounded-full bg-blue-500 absolute right-0 -top-0.5" />
                </Button>
            </div>
            <Button variant="outline" className="gap-1 sm:gap-2 h-7 sm:h-8 text-xs sm:text-sm relative">
                <ArrowUpDown className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Sort by</span>
                <span className="sm:hidden">Sort</span>
                <span className="w-2 h-2 rounded-full bg-blue-500 absolute right-0 -top-0.5" />
            </Button>
            <Button variant="outline" className="gap-1 sm:gap-2 h-7 sm:h-8 text-xs sm:text-sm relative">
                <Filter className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Filter</span>
                <span className="sm:hidden">Filter</span>
                <span className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500 text-white text-[10px] sm:text-xs flex items-center justify-center absolute -right-1 sm:right-0 -top-1 sm:-top-0.5">1</span>
            </Button>
            <div className="ml-auto flex items-center gap-1 sm:gap-2">
                <Button variant="outline" className="gap-1 sm:gap-2 h-7 sm:h-8 text-xs sm:text-sm hidden lg:flex">
                    Action
                    <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>

                <Button className="gap-1 sm:gap-2 h-7 sm:h-8 text-xs sm:text-sm bg-black text-white">
                    <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Enrichment</span>
                    <span className="sm:hidden">Enrich</span>
                    <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>

                <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8 hidden sm:flex">
                    <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600" />
                </Button>
            </div>
        </div>
    );
};

export default Toolbar;
