"use sever";

import { prisma } from "@/lib/prisma";
import { Feature, FeatureName } from "@prisma/client";

const freePlanId = process.env.NEXT_PUBLIC_FREE_PLAN_ID!;
const proPlanId = process.env.NEXT_PUBLIC_PRO_PLAN_ID!;
const elitePlanId = process.env.NEXT_PUBLIC_ELITE_PLAN_ID!;

// Map Stripe Subscription IDs to tier labels
export const tierModel = {
  [freePlanId]: "free",
  [proPlanId]: "pro",
  [elitePlanId]: "elite",
};

export default async function getSubscriptionById(id: string) {
  const result = await prisma.subscription.findFirst({ where: { id } });

  return result;
}

export async function getCurrentSubscription(userId: string) {
  if (!userId) return null;
  const now = new Date();
  const currentSubscription = await prisma.userSubscription.findFirst({
    where: {
      userId,
      status: "active",
    },
    include: {
      features: true,
      subscription: true,
    },
  });

  if (!currentSubscription) return null;

  const isExpired = currentSubscription?.endDate
    ? currentSubscription.endDate < now
    : true;

  // Build a feature lookup map
  const featureMap = new Map(
    currentSubscription.features.map((feature) => [feature.name, feature]),
  );

  return {
    isActive: !isExpired,
    tier:
      tierModel[
        currentSubscription?.subscriptionId as keyof typeof tierModel
      ] || "free",
    subscriptionId: currentSubscription?.subscriptionId,
    startDate: currentSubscription?.startDate,
    endDate: currentSubscription?.endDate,
    features: currentSubscription.features,
    getFeature(name: FeatureName) {
      return featureMap.get(name) || null;
    },
    subscription: currentSubscription.subscription,
  };
}

export type CurrentSubscriptionType = Awaited<
  ReturnType<typeof getCurrentSubscription>
>;

export type CurrentSubscription = {
  isActive: boolean;
  tier: string; // or define an enum if you have fixed tiers
  subscriptionId: string | null;
  startDate: Date | null;
  endDate: Date | null;
  features: Feature[];
  getFeature: (name: FeatureName) => Feature | null;
  subscription: {
    id: string;
    name: string;
    price: number;
    interval: string;
    createdAt: Date;
    updatedAt: Date;
  } | null;
} | null;
