import TableHeader from "./TableHeader";
import AlertBanner from "./AlertBanner";
import Toolbar from "./Toolbar";
import DataTable from "./DataTable";
import TabBar from "./TabBar";

const BitscaleTable = () => {
    return (
        <div className="flex flex-col h-screen bg-background w-full">
            <TableHeader
                workbookName="Workbook - Bitscale UX /UI testing flow"
                gridName="Bitscale grid or..."
            />
            <AlertBanner
                message="Payment failed. 450,000 credits will permanently expire in"
                daysRemaining={30}
            />
            <Toolbar />
            <DataTable />
            <TabBar />
        </div>
    );
};

export default BitscaleTable;
