import { templateDownload } from "@/action/templates/downloadReq";
import { Button } from "@/components/ui/button";
import { downloadFile } from "@/helper/downloadFile";
import { cn, truncate } from "@/lib/utils";
import { Template } from "@prisma/client";
import Image from "next/image";
import { useTransition } from "react";
import { toast } from "sonner";

interface Props {
  data: Template;
}

const TemplateCard = ({ data }: Props) => {
  const [pending, startTransition] = useTransition();
  const desc = truncate(data.description, 117);

  const handleDownload = () => {
    startTransition(() => {
      templateDownload(data.id).then((res) => {
        if (!res.success) {
          toast.error(res.message);
          return;
        } else if (res.success && res.url) {
          console.log(res);
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
    <div
      className="bg-[#FFFFFF] rounded-[15px] overflow-hidden border-[1px_solid_#F2F2F2] w-[95%] mx-auto lg:w-full lg:mx-0 shadow-[0px_4px_12px_0px_#0000001A]
"
    >
      {/* Template Image Placeholder */}
      <div className="bg-gray-200 lg:h-[216px] h-[150px] relative">
        {data.banner && <Image src={data.banner} alt={data.title} fill />}
        <span
          className={cn(
            "absolute top-3 right-3  text-xs px-2 py-1 rounded",
            data.category === "pro"
              ? "bg-orange-500 text-white"
              : "bg-[#009FFD] text-white",
          )}
        >
          {data.category.charAt(0).toUpperCase() + data.category.slice(1)}
        </span>
      </div>

      {/* Template Content */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-xl my-[15px]">{data.title}</h3>
        </div>
        <p className="text-base text-[#2A2A2A] font-normal">{desc}</p>

        <div className="flex w-[75%] gap-2 mt-[30px]">
          {/* <button className="bg-white border lg:w-[127px] lg:h-[37px] border-blue-600 text-blue-600 py-1 px-4 rounded text-sm font-medium hover:bg-blue-50 transition flex-1">
            Preview
          </button> */}
          <Button
            className="bg-[#004AAD] text-white rounded-[8px] py-[10px] px-[16px]"
            onClick={handleDownload}
            disabled={pending}
          >
            {pending ? "Downloading..." : "Download"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
