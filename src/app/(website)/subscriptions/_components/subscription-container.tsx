import CommunityAction from "@/components/action/community-action";
import { getUserSubscription } from "@/helper/user";
import { prisma } from "@/lib/prisma";
import PricingTable from "./pricing-table";
import PricingCard from "./subscription-card";

export default async function SubscriptionContainer() {
  const data = await prisma.subscription.findMany();
  const currentSubscription = await getUserSubscription();

  return (
    <div className="flex flex-col items-center w-full  mt-[50px]">
      {data.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-16 container mx-auto">
          {data.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
              currentSubscription={currentSubscription}
            />
          ))}
        </div>
      )}

      <div className="w-full mb-16 mt-10 container mx-auto">
        <PricingTable />
      </div>

      <CommunityAction />
    </div>
  );
}
