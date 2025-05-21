import { prisma } from "@/lib/prisma";
import { FeatureName } from "@prisma/client";
import Stripe from "stripe";

export async function handleSubscriptionCheckout(
  session: Stripe.Checkout.Session,
) {
  const userId = session.metadata?.userId;
  const planId = session.metadata?.planId;
  const stripeProductId = session.metadata?.stripeProductId;

  if (!userId || !planId || !stripeProductId) {
    throw new Error("Missing required metadata for subscription");
  }

  // 💡 Get Stripe Customer ID from session
  const stripeCustomerId = session.customer as string | undefined;

  if (!stripeCustomerId) {
    throw new Error("No customer found in Stripe session.");
  }

  // ✅ Update user with stripeCustomerId
  await prisma.user.update({
    where: { id: userId },
    data: { stripeCustomerId },
  });

  // Define features per plan
  const features = [];
  switch (planId) {
    case process.env.NEXT_PUBLIC_FREE_PLAN_ID: // Free
      features.push(
        {
          name: "templates",
          total: 10,
          remaining: 10,
          value: 5000,
          enabled: true,
        },
        {
          name: "courses",
          total: 5000,
          remaining: 5000,
          value: 50000,
          enabled: true,
        },
      );
      break;
    case process.env.NEXT_PUBLIC_PRO_PLAN_ID: // Pro
      features.push(
        {
          name: "templates",
          total: 100,
          remaining: 100,
          value: 1000,
          enabled: null,
        },
        { name: "courses", total: 5, remaining: 5, value: 5000, enabled: null },
        {
          name: "job_board",
          total: null,
          remaining: null,
          value: null,
          enabled: true,
        },
        {
          name: "resume",
          total: null,
          remaining: null,
          value: null,
          enabled: true,
        },
        {
          name: "slack_community_access",
          total: null,
          remaining: null,
          value: null,
          enabled: true,
        },
        {
          name: "personalized_account_portal",
          total: null,
          remaining: null,
          value: null,
          enabled: true,
        },
      );
      break;
    case process.env.NEXT_PUBLIC_ELITE_PLAN_ID: // Elite
      features.push(
        {
          name: "templates",
          total: 1100,
          remaining: 1100,
          value: 1160,
          enabled: null,
        },
        { name: "courses", total: 5, remaining: 5, value: 5000, enabled: null },
        { name: "coaching", total: 1, remaining: 1, value: 50, enabled: null },
        {
          name: "vip_slack_access",
          total: null,
          remaining: null,
          value: null,
          enabled: true,
        },
        {
          name: "unlimited_resume_reviews",
          total: null,
          remaining: null,
          value: 50,
          enabled: true,
        },
      );
      break;
    default:
      throw new Error(`Unknown planId: ${planId}`);
  }

  const subscription = await prisma.subscription.findFirst({
    where: { stripeProductId },
  });

  if (!subscription) throw new Error("Subscription not found");

  const startDate = new Date();
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + 1);

  const existingSubscription = await prisma.userSubscription.findFirst({
    where: {
      userId,
    },
  });

  if (existingSubscription) {
    const deletedSubscription = await prisma.userSubscription.delete({
      where: {
        userId,
      },
    });

    await prisma.feature.deleteMany({
      where: {
        userSubscriptionId: deletedSubscription.id,
      },
    });
  }

  const userSubscription = await prisma.userSubscription.create({
    data: {
      userId,
      subscriptionId: subscription.id,
      stripeSessionId: session.id,
      status: "active",
      startDate,
      endDate,
    },
  });

  await prisma.feature.deleteMany({
    where: { userSubscriptionId: userSubscription.id },
  });

  await prisma.feature.createMany({
    data: features.map((feature) => ({
      userSubscriptionId: userSubscription.id,
      name: feature.name as FeatureName,
      total: feature.total,
      remaining: feature.remaining,
      value: feature.value,
      enabled: feature.enabled,
    })),
  });
}

/**
 * When an invoice is successfully paid
 */
export async function handleInvoicePaid(invoice: Stripe.Invoice) {
  const userId = invoice.metadata?.userId;
  if (!userId) {
    console.warn("Missing userId in invoice metadata.");
    return;
  }

  const startDate = new Date();
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + 1);

  await prisma.userSubscription.updateMany({
    where: {
      userId,
      status: "active",
    },
    data: {
      startDate,
      endDate,
    },
  });

  console.log(`Invoice paid and subscription renewed for user ${userId}.`);
}

/**
 * When a payment fails for a subscription
 */
export async function handleInvoiceFailed(invoice: Stripe.Invoice) {
  const userId = invoice.metadata?.userId;
  if (!userId) {
    console.warn("Missing userId in failed invoice metadata.");
    return;
  }

  await prisma.userSubscription.updateMany({
    where: {
      userId,
      status: "active",
    },
    data: {
      status: "expired",
    },
  });

  // Optional: send email or trigger a notification
  console.warn(`Payment failed for user ${userId}. Status set to past_due.`);
}

/**
 * When a subscription is updated (e.g., upgraded/downgraded)
 */
export async function handleSubscriptionUpdated(
  subscription: Stripe.Subscription,
) {
  const userId = subscription.metadata?.userId;
  if (!userId) {
    console.warn("Missing userId in subscription metadata.");
    return;
  }

  const status = subscription.status; // active, past_due, canceled, etc.

  await prisma.userSubscription.updateMany({
    where: {
      userId,
    },
    data: {
      status: "active",
    },
  });

  console.log(`Subscription updated for user ${userId} to status: ${status}`);
}

/**
 * When a subscription is cancelled (manually or due to failed payment)
 */
export async function handleSubscriptionDeleted(
  subscription: Stripe.Subscription,
) {
  const userId = subscription.metadata?.userId;
  if (!userId) {
    console.warn("Missing userId in deleted subscription metadata.");
    return;
  }

  await prisma.userSubscription.updateMany({
    where: {
      userId,
    },
    data: {
      status: "canceled",
    },
  });

  console.warn(`Subscription canceled for user ${userId}. Access revoked.`);
}
