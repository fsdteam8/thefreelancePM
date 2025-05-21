"use server";

import { auth } from "@/auth";
import { getCurrentSubscription } from "@/helper/subscription";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { webhookFor } from "../coaching/create-coaching";

export async function templateDownload(templateId: string) {
  const cu = await auth();

  if (!cu) {
    return {
      success: false,
      message: "You are not logged in",
    };
  }

  const currentSubscription = await getCurrentSubscription(
    cu.user.id as string,
  );

  if (!currentSubscription) {
    return {
      success: false,
      message: "You don't have a subscription",
    };
  }

  const template = await prisma.template.findFirst({
    where: {
      id: templateId,
    },
  });

  if (!template) {
    return {
      success: false,
      message: "Template not found",
    };
  }

  const isAlreadyPurchased = await prisma.userPurchasedTemplate.findFirst({
    where: {
      userId: cu.user.id as string,
      templateId: template.id,
      isPaid: true,
    },
  });

  if (isAlreadyPurchased) {
    await incrementDownloads(template.id);
    // Return file download link or stream file
    return {
      success: true,
      message: "File download Link",
      file: template.file, // Assuming this is a URL or path to the file
    };
  }

  const isFreeTemplate = template.category === "free";
  const isFreeUser = currentSubscription.tier === "free";
  const isProTemplate = template.category === "pro";
  const isProUser = currentSubscription.tier === "pro";
  const isEliteuser = currentSubscription.tier === "elite";

  const feature = currentSubscription.getFeature("templates");

  if (!feature) {
    return {
      success: false,
      message: "No feature found",
    };
  }

  if (isFreeTemplate && isFreeUser) {
    await prisma.userPurchasedTemplate.create({
      data: {
        userId: cu.user.id as string,
        templateId: template.id,
        isPaid: true,
      },
    });
    await incrementDownloads(template.id);

    await decrementTemplateRemaining(feature.id, template.price ?? 0);

    // Return file download link or stream file
    return {
      success: true,
      message: "File download Link",
      file: template.file, // Assuming this is a URL or path to the file
    };
  } else if (
    (feature.remaining !== null && feature.remaining === 0) ||
    (feature.value !== null && feature.value < 0)
  ) {
    return {
      success: false,
      message: "You have reached the limit of templates you can download",
    };
  } else if (
    (isProTemplate || isFreeTemplate) &&
    (isEliteuser || isProUser) &&
    feature.remaining !== null &&
    feature.remaining > 0 &&
    feature.value !== null &&
    feature.value > 0
  ) {
    await incrementDownloads(template.id);

    await decrementTemplateRemaining(feature.id, template.price ?? 0);

    // Return file download link or stream file
    return {
      success: true,
      message: "File download Link",
      file: template.file, // Assuming this is a URL or path to the file
    };
  }

  const purchaseData = await prisma.userPurchasedTemplate.create({
    data: {
      userId: cu.user.id as string,
      templateId: template.id,
      isPaid: false,
    },
  });

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    customer_email: cu.user.email || undefined,
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: template.title,
            // images: template.imageUrl ? [template.imageUrl] : [],
          },
          unit_amount: Math.round((template.price ?? 0) * 100), // Convert dollars to cents
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.AUTH_URL}/templates/download/${cu.user.id}/${template.id}?payment=success`,
    cancel_url: `${process.env.AUTH_URL}/cancel`,
    metadata: {
      purchaseId: purchaseData.id,
      for: "template" as webhookFor,
    },
  });

  if (checkoutSession.url) {
    return {
      success: true,
      message: "Redirecting to checkout",
      url: checkoutSession.url,
    };
  }

  return {
    success: false,
    message: "You don't have access to this template",
  };
}

export async function incrementDownloads(templateId: string) {
  await prisma.template.update({
    where: { id: templateId },
    data: {
      download: {
        increment: 1,
      },
    },
  });
}

export async function decrementTemplateRemaining(id: string, price: number) {
  await prisma.feature.update({
    where: {
      id: id,
    },
    data: {
      remaining: {
        decrement: 1,
      },
      value: {
        decrement: price,
      },
    },
  });
}
