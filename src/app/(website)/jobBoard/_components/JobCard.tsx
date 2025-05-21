import { ClickedJob } from "@/action/job/update";
import { Button } from "@/components/ui/button";
import { truncate } from "@/lib/utils";
import { Job } from "@prisma/client";
import moment from "moment";
import { useTransition } from "react";
import { toast } from "sonner";

interface JobCardProps {
  data: Job;
}

const JobCard = ({ data }: JobCardProps) => {
  const [pending, startTransition] = useTransition();
  const desc = truncate(data.description, 117);

  const onApply = () => {
    startTransition(() => {
      ClickedJob(data.id).then((res) => {
        if (!res.success) {
          toast.error(res.message);
          return;
        }

        window.open(data.url, "_blank");
      });
    });
  };
  return (
    <div className="bg-white border rounded-[15px] overflow-hidden shadow-sm  w-full">
      <div className="p-4">
        <h3 className="font-bold text-lg mb-4 text-[#004AAD]">{data.title}</h3>
        <p className="text-[#009FFD] font-medium text-sm mb-3">
          {data.company}
        </p>
        <div className="bg-[#EAF6FF] rounded-[10px] p-[10px] my-[15px]">
          <p className="text-lg text-[#2A2A2A]">{desc}</p>
        </div>

        <div className="flex gap-[30px] items-center">
          <span className="text-sm text-[#000000] bg-[#EAF6FF] py-[5px] px-[10px] rounded-full">
            Freelance
          </span>
          <span className="text-sm text-[#000000] bg-[#EAF6FF] py-[5px] px-[10px] rounded-full">
            {data.type}
          </span>
          <span className="text-sm text-[#000000] bg-[#EAF6FF] py-[5px] px-[10px] rounded-full">
            ${data.salary}
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="w-[90%] mx-auto">
          <Button
            className="bg-[#004AAD] text-white py-2 px-4 font-medium hover:bg-blue-700 transition w-full my-3 rounded-[8px]"
            onClick={onApply}
            variant={pending ? "outline" : "default"}
            disabled={pending}
          >
            {pending ? "Checking..." : "Apply Now"}
          </Button>
        </div>

        <div className="flex justify-between px-4 py-2 text-base text-[#595959] mb-2">
          <span>Posted {moment(data.createdAt, "YYYYMMDD").fromNow()}</span>
          <span>{data.location}</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
