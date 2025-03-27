import { BarChartComponent } from "@/components/BarChartComponent";
import { PieChartComponent } from "@/components/PieChartComponent";
import SummaryCardComponents from "@/components/SummaryCardComponents";
import { FcSalesPerformance } from "react-icons/fc";


export default function Home() {
  return (
    <div>

      <div className="flex justify-evenly items-center">
        <SummaryCardComponents title="Total Sales" icon={<FcSalesPerformance />} total="12,000" comparison="+12 from last month" />
        <SummaryCardComponents title="Total Sales" icon={<FcSalesPerformance />} total="12,000" comparison="+12 from last month" />
        <SummaryCardComponents title="Total Sales" icon={<FcSalesPerformance />} total="12,000" comparison="+12 from last month" />
        <SummaryCardComponents title="Total Sales" icon={<FcSalesPerformance />} total="12,000" comparison="+12 from last month" />
      </div>
      <div className="flex justify-center items-center">
        <PieChartComponent />
        <BarChartComponent />
      </div>
    </div>
  );
}
