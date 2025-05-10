"use server";

import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { revalidatePath } from "next/cache";

export async function getSavedCards(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { stripeCustomerId: true },
  });

  if (!user?.stripeCustomerId) {
    return [];
  }

  const paymentMethods = await stripe.customers.listPaymentMethods(
    user.stripeCustomerId,
    { type: "card" },
  );

  return paymentMethods.data;
}

export async function removeCard(paymentMethodId: string) {
  try {
    const paymentMethod = await stripe.paymentMethods.retrieve(paymentMethodId);

    if (!paymentMethod || paymentMethod.type !== "card") {
      throw new Error("Invalid or missing card.");
    }

    await stripe.paymentMethods.detach(paymentMethodId);
    revalidatePath("/account");
    return { success: true, message: "Card removed successfully." };
  } catch (error) {
    console.error("Error removing card:", error);
    return { success: false, message: "Failed to remove card." };
  }
}
