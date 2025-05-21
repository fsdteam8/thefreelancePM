import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
}

const TopPerformingPlan = ({ data }: Props) => {
  return (
    <Card className="w-full shadow-[0px_4px_12px_0px_#0000001A]">
      <div className="flex justify-between items-center p-6 mb-8">
        <div className="flex items-center gap-2">
          {/* <TrendingUp className="h-5 w-5 text-blue-600" /> */}
          <Image
            src="https://files.edgestore.dev/rmbbqbxzosw25w8g/publicFiles/_public/Vector-icon-2.png"
            width={100}
            height={100}
            alt="logo"
            className="w-7 h-7"
          />
          <h2 className="text-lg font-semibold">Top Performing Plans</h2>
        </div>
      </div>
      <CardContent>
        <div className="h-[428px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              {/* <YAxis /> */}
              <Tooltip />
              <Line
                type="monotone"
                dataKey="elite"
                stroke="#3B82F6"
                strokeWidth={2}
                dot={{ r: 0 }}
              />
              <Line
                type="monotone"
                dataKey="pro"
                stroke="#F59E0B"
                strokeWidth={2}
                dot={{ r: 0 }}
              />
              <Line
                type="monotone"
                dataKey="lite"
                stroke="#10B981"
                strokeWidth={2}
                dot={{ r: 0 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-start gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm">Freelancer Elite</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-sm">Freelancer Pro</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm">Freelancer Lite</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopPerformingPlan;
