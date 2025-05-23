import { Package, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { AddPlanForm } from "./_componets/create-subscription-plan";
import SubscriptionStats from "./_componets/subscription-stats";
import { SubscriptionTableContainer } from "./_componets/subscription-table-container";

export default async function SubscriptionPage() {
  const subscriptions = await prisma.subscription.findMany();
  return (
    <div className=" p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Package className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Subscription Plan</h1>
        </div>

        <AddPlanForm
          trigger={
            <Button className="gap-1">
              <Plus className="h-4 w-4" />
              Add New Plan
            </Button>
          }
        />
      </div>

      {/* Subscription Stats Component */}
      <SubscriptionStats />

      {/* Subscription Table Container Component */}
      {subscriptions.length > 0 && (
        <SubscriptionTableContainer data={subscriptions} />
      )}
    </div>
  );
}
