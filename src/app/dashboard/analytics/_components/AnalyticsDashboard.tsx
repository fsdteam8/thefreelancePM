"use client";
import logo from "@/../public/vector-icon-1.png";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";

import TopPerformingPlan from "./Top-performing-plan";
import OverviewStats from "./overview-stats";
import RevenueOverTime from "./revenue-over-time";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  topPerformingPlan: any[];
}

const AnalyticsDashboard = ({ topPerformingPlan }: Props) => {
  return (
    <div className="w-full  space-y-[60px] p-4">
      {/* Analytics Header */}
      <div className="flex justify-between items-center my-[35px]">
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="logo"
            className="w-7 h-7"
          />
          <h1 className="text-[32px] font-bold text-[#004AAD]">Analytics</h1>
        </div>
        <Button
          variant="outline"
          className="flex items-center text-white gap-2 bg-[#004AAD]"
        >
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>

      {/* Top Performing Plans Section */}
      <TopPerformingPlan data={topPerformingPlan} />

      {/* Overview Stats */}
      <OverviewStats />

      {/* Performance Charts */}
      <div className="w-full bg-[#FFFFFF] p-10 rounded-[15px] mt-5 shadow-[0px_4px_12px_0px_#0000001A]">
        <RevenueOverTime />
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
