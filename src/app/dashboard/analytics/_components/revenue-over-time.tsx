import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

interface ApiProps {
  success: boolean;
  message: string;
  data: {
    name: string;
    value: number;
  }[];
}

const RevenueOverTime = () => {
  const [performanceTimeframe, setPerformanceTimeframe] = useState("weekly");

  const { data, isLoading, isError, error } = useQuery<ApiProps>({
    queryKey: ["dashboard-revenues", performanceTimeframe],
    queryFn: () =>
      fetch(`/api/dashboard/revenues?type=${performanceTimeframe}`).then(
        (res) => res.json(),
      ),
  });

  console.log(data);

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
    <>
      <div className="flex justify-between items-center mb-[30px]">
        <h2 className="text-[24px] text-[#004AAD] font-medium">
          Performance Charts
        </h2>
        <Select
          value={performanceTimeframe}
          onValueChange={setPerformanceTimeframe}
        >
          <SelectTrigger className="w-32 bg-[#004AAD] text-white">
            <SelectValue placeholder="Weekly" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Revenue Over Time Chart */}
      <Card className="mb-4 shadow-[0px_4px_12px_0px_#0000001A]">
        <CardHeader className="pb-0">
          <div className="flex justify-between items-center mb-[20px]">
            <CardTitle className="text-md font-medium">
              Revenue Over Time
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data?.data ?? []}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                {/* <YAxis /> */}
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  dot={{ r: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default RevenueOverTime;
