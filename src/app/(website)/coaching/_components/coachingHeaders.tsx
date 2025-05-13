import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getCurrentSubscription } from "@/helper/subscription";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const CoachingHeaders = async () => {
  const cu = await auth();

  let isEliteButtonEnabled = !cu?.user.id;
  const currentSubscription = await getCurrentSubscription(
    cu?.user?.id as string,
  );

  isEliteButtonEnabled = currentSubscription?.tier !== "elite";

  return (
    <div className=" container mx-auto px-4 py-10">
      {/* Profile Section */}
      <div className="md:flex md:flex-row flex flex-col items-center justify-center gap-14">
        <div>
          <Avatar className="w-[200px] h-[200px]  rounded-full">
            <AvatarImage src="/profile.png" className="object-cover" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="">
          <h1 className="text-5xl  font-semibold mb-2 text-[#004AAD] mt-4">
            Ashanti Johnson, PMP
          </h1>
          <p className="text-[#595959] mt-2 text-[16px] font-semibold">
            Certified Project Management Professional with over 10 years of
            experience. Specializing in freelance strategy, career growth, and
            project management excellence.
          </p>
          {/* Feature List */}
          <div className="mt-6 space-y-4">
            {[
              "Personalized career guidance from project management skills to freelance success.",
              "Resume & interview prep—land more job interviews, roles, and contracts with confidence.",
              "Freelance strategy sessions—optimize pricing, proposals, and outreach.",
            ].map((text, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="text-[#004AAD] mt-1" size={20} />
                <p className="text-[#0B2C58]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-[#004AAD] text-white rounded-xl px-6 py-8  text-center space-y-4 mt-12">
        <h2 className="md:text-5xl text-2xl font-semibold mb-11 ">
          Coaching Session Pricing
        </h2>
        <div className="flex flex-col gap-4">
          <p className="font-medium md:text-[20px] ">
            First consultation is FREE!
          </p>
          <p className="font-medium md:text-[20px] ">
            $50 per session after your free consultation.
          </p>
          <p className="font-medium md:text-[20px]  ">
            Freelancer Elite members get 1 FREE coaching session per month!
          </p>
        </div>
        {isEliteButtonEnabled && (
          <Button
            className="bg-[#FFA400] hover:bg-[#FFA400]/90  text-black font-semibold px-6 py-3 rounded-md hover:brightness-110"
            asChild
          >
            <Link href="/subscriptions">
              Upgrade to Elite for Free Sessions
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default CoachingHeaders;
