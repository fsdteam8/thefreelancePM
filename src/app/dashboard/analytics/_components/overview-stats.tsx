"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useState } from "react";

interface ApiProps {
  success: boolean;
  message: string;
  data: {
    newUsers: number;
    totalRevenue: number;
    activeSubscriptions: number;
    totalJobApplications: number;
  };
}

const OverviewStats = () => {
  const [overviewTimeframe, setOverviewTimeframe] = useState("weekly");

  const { data, isLoading, isError, error } = useQuery<ApiProps>({
    queryKey: ["dashboard-stats", overviewTimeframe],
    queryFn: () =>
      fetch(`/api/dashboard/stats?type=${overviewTimeframe}`).then((res) =>
        res.json(),
      ),
  });

  // Data for overview stats
  const overviewStats = [
    // { title: "Total Revenue", value: `$${data?.data.totalRevenue ?? 0}` },
    {
      title: "Active Subscriptions",
      value: data?.data.activeSubscriptions ?? 0,
    },
    { title: "New Users", value: data?.data.newUsers },
    {
      title: "Total Applications",
      value: data?.data.totalJobApplications ?? 0,
    },
    // { title: "Churn Rate", value: "2.3%" },
    // { title: "ARPU", value: "$32.50" },
  ];

  if (isLoading) {
    return (
      <div className="w-full bg-[#FFFFFF] p-10 rounded-[15px] shadow-[0px_4px_12px_0px_#0000001A] min-h-[300px] flex justify-center items-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full bg-[#FFFFFF] p-10 rounded-[15px] shadow-[0px_4px_12px_0px_#0000001A] min-h-[300px] flex justify-center items-center">
        <p className="text-red-500">{error.message}</p>
      </div>
    );
  }
  return (
    <div className="w-full bg-[#FFFFFF] p-10 rounded-[15px] shadow-[0px_4px_12px_0px_#0000001A]">
      <div className="flex justify-between items-center mb-[35px]">
        <h2 className="text-[24px] font-medium text-[#004AAD]">
          Overview Stats
        </h2>
        <Select value={overviewTimeframe} onValueChange={setOverviewTimeframe}>
          <SelectTrigger className="w-32 bg-[#004AAD] text-white">
            <SelectValue placeholder="Weekly" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="yearly">Yearly</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {overviewStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="pt-6 bg-[#F5F7FA] text-center">
              <div className="text-[18px] font-medium text-[#000000] mb-[20px]">
                {stat.title}
              </div>
              <div className="text-[40px] font-bold text-[#004AAD] mt-2">
                {stat.value}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OverviewStats;
