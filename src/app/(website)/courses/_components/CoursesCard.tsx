import { courseDownload } from "@/action/course/downloadReq";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { downloadFile } from "@/helper/downloadFile";
import { cn, truncate } from "@/lib/utils";
import { Course } from "@prisma/client";
import { ChartNoAxesColumnIncreasing, Clock } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";

interface CoursesCardProps {
  data: Course;
}

const CoursesCard = ({ data }: CoursesCardProps) => {
  const [pending, startTransition] = useTransition();
  const desc = truncate(data.description, 117);

  const handleDownload = () => {
    startTransition(() => {
      courseDownload(data.id).then((res) => {
        if (!res.success) {
          toast.error(res.message);
          return;
        } else if (res.success && res.url) {
          toast.success(res.message);
          window.location.href = res.url;
        }

        if (res.file) {
          downloadFile(res.file, data.title);
        }
      });
    });
  };

  return (
    <Card className="rounded-[10px] border-[1px] border-input shadow-sm overflow-hidden bg-white">
      <CardHeader>
        <div className="flex justify-between items-start ">
          <h3 className="font-medium text-base  mt-[15px]">{data.title}</h3>
        </div>
      </CardHeader>
      <CardContent className="p-4 ">
        <p className="text-sm text-gray-700 ">{desc}</p>

        <div className="flex justify-between items-center my-[20px]">
          <div
            className={cn(
              "flex items-center gap-1 px-2 py-1 rounded-full text-xs",
              data.type === "Beginner"
                ? "bg-[#DCFCE7] text-[#166534]"
                : data.type === "Intermediate"
                  ? "bg-[#FEF9C3] text-[#854D0E]"
                  : "bg-[#FEE2E2] text-[#991B1B]",
            )}
          >
            <ChartNoAxesColumnIncreasing size={14} />
            <span>{data.type}</span>
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <Clock size={14} className="mr-1" />
            <span>8 hours</span>
          </div>
        </div>
        <CardFooter className=" p-0 ">
          <Button
            className="w-full bg-blue-600 text-white h-[40px] text-sm font-medium hover:bg-blue-700 transition"
            onClick={handleDownload}
            disabled={pending}
          >
            {pending ? "Downloading..." : "Download"}
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default CoursesCard;
