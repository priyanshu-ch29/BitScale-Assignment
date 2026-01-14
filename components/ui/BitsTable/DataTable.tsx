import { ChevronRight, ExternalLink, Users, Building2 } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface DataRow {
    id: number;
    name: string;
    isCompany?: boolean;
    lastUpdated: string;
    companyName: string;
    companyWebsite: string;
    linkedinJobUrl: string;
    emailWaterfall: string;
    emailStatus: "found" | "not_met";
}

const mockData: DataRow[] = [
    { id: 1, name: "Mike Braham", lastUpdated: "Oct 12, 2024 at 14:08 PM", companyName: "Google", companyWebsite: "https://www.example.com", linkedinJobUrl: "https://www.linkedin.com...", emailWaterfall: "Email Found", emailStatus: "found" },
    { id: 2, name: "Alex Johnson", lastUpdated: "Oct 12, 2024 at 14:08 PM", companyName: "Amazon", companyWebsite: "https://www.sample.com", linkedinJobUrl: "https://www.linkedin.com...", emailWaterfall: "Email Found", emailStatus: "found" },
    { id: 3, name: "Sarah Thompson", lastUpdated: "Oct 12, 2024 at 14:08 PM", companyName: "LinkedIn", companyWebsite: "https://www.testsite.com", linkedinJobUrl: "https://www.linkedin.com...", emailWaterfall: "Run condition not met", emailStatus: "not_met" },
    { id: 4, name: "David Lee", lastUpdated: "Oct 12, 2024 at 14:08 PM", companyName: "Microsoft", companyWebsite: "https://www.demo.com", linkedinJobUrl: "https://www.linkedin.com...", emailWaterfall: "Run condition not met", emailStatus: "not_met" },
    { id: 5, name: "Emily Carter", lastUpdated: "Oct 12, 2024 at 14:08 PM", companyName: "TED", companyWebsite: "https://www.sample...", linkedinJobUrl: "https://www.linkedin.com...", emailWaterfall: "Email Found", emailStatus: "found" },
    { id: 6, name: "James Smith", lastUpdated: "Oct 12, 2024 at 14:08 PM", companyName: "Unilever", companyWebsite: "https://www.linkedin.com...", linkedinJobUrl: "https://www.linkedin.com...", emailWaterfall: "Email Found", emailStatus: "found" },
    { id: 7, name: "Laura White", lastUpdated: "Oct 12, 2024 at 14:08 PM", companyName: "Apple", companyWebsite: "https://www.mywebsite.c...", linkedinJobUrl: "https://www.linkedin.com...", emailWaterfall: "Run condition not met", emailStatus: "not_met" },
    { id: 8, name: "Chris Brown", lastUpdated: "Oct 12, 2024 at 14:08 PM", companyName: "Google", companyWebsite: "https://www.newsite.com", linkedinJobUrl: "https://www.linkedin.com...", emailWaterfall: "Run condition not met", emailStatus: "not_met" },
    { id: 9, name: "Jessica Green", lastUpdated: "Oct 12, 2024 at 14:08 PM", companyName: "Unilever", companyWebsite: "https://www.uniqueurl.com", linkedinJobUrl: "https://www.linkedin.com...", emailWaterfall: "Email Found", emailStatus: "found" },
    { id: 10, name: "Daniel Harris", lastUpdated: "Oct 12, 2024 at 14:08 PM", companyName: "Microsoft", companyWebsite: "https://www.originalsite.c...", linkedinJobUrl: "https://www.linkedin.com...", emailWaterfall: "Email Found", emailStatus: "found" },
    { id: 11, name: "Megan Clark", lastUpdated: "Oct 12, 2024 at 14:08 PM", companyName: "Apple", companyWebsite: "https://www.freshpage.c...", linkedinJobUrl: "https://www.linkedin.com...", emailWaterfall: "Run condition not met", emailStatus: "not_met" },
    { id: 12, name: "Brian Lewis", lastUpdated: "Oct 12, 2024 at 14:08 PM", companyName: "TED", companyWebsite: "https://www.differentdo...", linkedinJobUrl: "https://www.linkedin.com...", emailWaterfall: "Email Found", emailStatus: "found" },
    { id: 13, name: "Samantha Hall", lastUpdated: "Oct 12, 2024 at 14:08 PM", companyName: "Google", companyWebsite: "https://www.alternativesi...", linkedinJobUrl: "https://www.linkedin.com...", emailWaterfall: "Email Found", emailStatus: "found" },
    { id: 14, name: "Google", isCompany: true, lastUpdated: "", companyName: "", companyWebsite: "", linkedinJobUrl: "", emailWaterfall: "", emailStatus: "found" },
    { id: 15, name: "Amazon", isCompany: true, lastUpdated: "", companyName: "", companyWebsite: "", linkedinJobUrl: "", emailWaterfall: "", emailStatus: "found" },
    { id: 16, name: "LinkedIn", isCompany: true, lastUpdated: "", companyName: "", companyWebsite: "", linkedinJobUrl: "", emailWaterfall: "", emailStatus: "found" },
    { id: 17, name: "LinkedIn", isCompany: true, lastUpdated: "", companyName: "", companyWebsite: "", linkedinJobUrl: "", emailWaterfall: "", emailStatus: "found" },
];

const DataTable = () => {
    return (
        <div className="flex-1 overflow-auto">
            <div className="min-w-full overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-muted/50 hover:bg-muted/50">
                            <TableHead className="w-8 sm:w-12 text-center font-medium text-muted-foreground text-xs sm:text-sm">#</TableHead>
                            <TableHead className="min-w-[140px] sm:min-w-[180px]">
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-purple-100 rounded flex items-center justify-center">
                                        <Users className="h-2 w-2 sm:h-3 sm:w-3 text-purple-600" />
                                    </div>
                                    <span className="font-medium text-foreground text-xs sm:text-sm">Imported Data</span>
                                    <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                                </div>
                            </TableHead>
                            <TableHead className="min-w-[140px] sm:min-w-[180px]">
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <svg className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                    <span className="font-medium text-foreground text-xs sm:text-sm">Last Updated At</span>
                                </div>
                            </TableHead>
                            <TableHead className="min-w-[100px] sm:min-w-[140px]">
                                <span className="font-medium text-foreground text-xs sm:text-sm">Company Name</span>
                            </TableHead>
                            <TableHead className="min-w-[140px] sm:min-w-[200px]">
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                                    <span className="font-medium text-foreground text-xs sm:text-sm">Company Website</span>
                                </div>
                            </TableHead>
                            <TableHead className="min-w-[140px] sm:min-w-[200px]">
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                                    <span className="font-medium text-foreground text-xs sm:text-sm">LinkedIn Job URL</span>
                                </div>
                            </TableHead>
                            <TableHead className="min-w-[140px] sm:min-w-[180px]">
                                <div className="flex items-center gap-1 sm:gap-2">
                                    <svg className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        <path d="M2 17l10 5 10-5" />
                                        <path d="M2 12l10 5 10-5" />
                                    </svg>
                                    <span className="font-medium text-foreground text-xs sm:text-sm">Email Waterfall</span>
                                    <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                                </div>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {mockData.map((row) => (
                            <TableRow key={row.id} className="hover:bg-muted/30">
                                <TableCell className="text-center text-muted-foreground text-xs sm:text-sm py-2 sm:py-4">{row.id}</TableCell>
                                <TableCell className="py-2 sm:py-4">
                                    <div className={`flex items-center justify-between pr-1 sm:pr-2 gap-1 sm:gap-2 ${row.isCompany ? "bg-[#E7F3F8]" : "bg-[#EDF3EC]"} rounded-full`}>
                                        <div className="flex items-center gap-1 sm:gap-2 justify-center p-1">
                                            {row.isCompany ? (
                                                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded flex items-center justify-center">
                                                    <Building2 className="h-2 w-2 sm:h-3 sm:w-3 text-blue-600" />
                                                </div>
                                            ) : (
                                                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center">
                                                    <Users className="h-2 w-2 sm:h-3 sm:w-3 text-green-600" />
                                                </div>
                                            )}
                                            <span className="text-xs sm:text-sm text-foreground">{row.name}</span>
                                        </div>
                                        <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500" />
                                    </div>
                                </TableCell>
                                <TableCell className="text-xs sm:text-sm text-muted-foreground py-2 sm:py-4">{row.lastUpdated}</TableCell>
                                <TableCell className="text-xs sm:text-sm text-foreground py-2 sm:py-4">{row.companyName}</TableCell>
                                <TableCell className="py-2 sm:py-4">
                                    {row.companyWebsite && (
                                        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                                            <ExternalLink className="h-2 w-2 sm:h-3 sm:w-3 shrink-0" />
                                            <span className="truncate max-w-[100px] sm:max-w-[160px]">{row.companyWebsite}</span>
                                        </div>
                                    )}
                                </TableCell>
                                <TableCell className="py-2 sm:py-4">
                                    {row.linkedinJobUrl && (
                                        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                                            <ExternalLink className="h-2 w-2 sm:h-3 sm:w-3 shrink-0" />
                                            <span className="truncate max-w-[100px] sm:max-w-[160px]">{row.linkedinJobUrl}</span>
                                        </div>
                                    )}
                                </TableCell>
                                <TableCell className="py-2 sm:py-4">
                                    {row.emailWaterfall && (
                                        <div className={`flex items-center justify-between gap-1 sm:gap-2 ${row.emailStatus === "found" ? "bg-gray-100 px-1 sm:px-2 py-1 rounded-full" : ""}`}>
                                            <span className={`text-xs sm:text-sm ${row.emailStatus === "found" ? "" : "text-orange-500"}`}>
                                                {row.emailStatus === "found" ? "✅" : ""}{row.emailWaterfall}
                                            </span>
                                            {row.emailStatus === "found" && <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />}
                                        </div>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div >
    );
};

export default DataTable;
