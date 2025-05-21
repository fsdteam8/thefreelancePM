import { Button } from "@/components/ui/button";
import { CurrentSubscriptionType } from "@/helper/subscription";
import { useQuery } from "@tanstack/react-query";
import { addDays, format } from "date-fns";
import { Check, Loader2, Star } from "lucide-react";
import Link from "next/link";

interface ApiProps {
  success: boolean;
  message: string;
  data?: CurrentSubscriptionType;
}

const featureLists: Record<string, JSX.Element> = {
  elite: (
    <ul className=" text-[#004AAD] space-y-[15px] mt-8 mb-4 text-sm font-normal">
      <li className="flex gap-4">
        <Check /> Everything in Freelancer Pro ($1,160 value)
      </li>
      <li className="flex gap-4">
        <Check />1 Free Coaching Credit Monthly ($50 value)
      </li>
      <li className="flex gap-4">
        <Check /> Priority Access to New Job Postings
      </li>
      <li className="flex gap-4">
        <Check /> Early Access to New Templates & Courses
      </li>
      <li className="flex gap-4">
        <Check />
        VIP Slack with Direct Mentorship
      </li>
      <li className="flex gap-4">
        <Check />
        Unlimited Resume Reviews ($50/session value)
      </li>
    </ul>
  ),
  pro: (
    <ul className=" text-[#004AAD] space-y-[15px] mt-8 mb-4 text-sm font-normal">
      <li className="flex gap-4">
        <Check /> 100+ PM Templates ($1,000 value)
      </li>
      <li className="flex gap-4">
        <Check /> 5 Premium Courses ($160 value)
      </li>
      <li className="flex gap-4">
        <Check /> Exclusive Job Board Access
      </li>
      <li className="flex gap-4">
        <Check /> Resume Templates for PM roles
      </li>
      <li className="flex gap-4">
        <Check />
        Slack Community
      </li>
      <li className="flex gap-4">
        <Check />
        Personalized Account Portal
      </li>
    </ul>
  ),
  free: (
    <ul className=" text-[#004AAD] space-y-[15px] mt-8 mb-4 text-sm font-normal">
      <li className="flex gap-4">
        <Check /> Access to 10 free PM templates
      </li>
      <li className="flex gap-4">
        <Check /> 1 free beginner-friendly PM course
      </li>
      <li className="flex gap-4">
        <Check /> Access to all quizzes (career alignment, industry fit)
      </li>
      <li className="flex gap-4">
        <Check /> Free consultation for coaching services
      </li>
    </ul>
  ),
};

const PlanOverview = () => {
  const { data, isLoading, isError, error } = useQuery<ApiProps>({
    queryKey: ["currentSubscription"],
    queryFn: () => fetch(`/api/currentSubscription`).then((res) => res.json()),
  });

  let content;
  if (isLoading) {
    content = (
      <div className="flex-1 rounded-2xl shadow-[0px_4px_12px_0px_#0000001A] p-6 bg-white min-h-[300px] flex justify-center items-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  } else if (isError) {
    content = (
      <p className="min-h-[300px] flex justify-center items-center">
        {error?.message}
      </p>
    );
  } else if (data?.success && data.data) {
    const { isActive, tier, endDate } = data.data;

    // Calculate renewal date: endDate + 1 day
    const renewDate = endDate
      ? format(addDays(new Date(endDate), 1), "PPP")
      : "No renewal date";

    content = (
      <div className="flex-1 rounded-2xl shadow-[0px_4px_12px_0px_#0000001A] p-6 bg-white">
        <h2 className="text-2xl font-semibold text-[#004AAD] flex items-center gap-2 mb-[30px]">
          <span>
            <Star />
          </span>{" "}
          Plan Overview
        </h2>

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-3xl  font-semibold text-[#004AAD]">
            {tier.charAt(0).toUpperCase() + tier.slice(1)}
          </h3>
          <button className="bg-[#004AAD] text-white px-[16px] py-[10px] rounded-full text-sm">
            {isActive ? "Active" : "Inactive"}
          </button>
        </div>
        <p className="mb-4 text-[18px] font-normal">Renews on {renewDate}</p>

        {featureLists[tier]}

        <div className="flex justify-between items-center">
          <Button
            className="bg-[#004AAD] text-white px-4 text-sm font-medium py-2 rounded-full hover:bg-blue-700"
            asChild
          >
            <Link href="/subscriptions">Manage Subscription</Link>
          </Button>
        </div>
      </div>
    );
  }
  return content;
};

export default PlanOverview;
