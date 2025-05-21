"use server";

import { auth } from "@/auth";
import { getCurrentSubscription } from "@/helper/subscription";
import { prisma } from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { webhookFor } from "../coaching/create-coaching";

export async function courseDownload(courseId: string) {
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

  const course = await prisma.course.findFirst({
    where: {
      id: courseId,
    },
  });

  if (!course) {
    return {
      success: false,
      message: "Course not found",
    };
  }

  const isAlreadyPurchased = await prisma.userPurchasedCourse.findFirst({
    where: {
      userId: cu.user.id as string,
      courseId: course.id,
      isPaid: true,
    },
  });

  if (isAlreadyPurchased) {
    return {
      success: true,
      message: "File download Link",
      file: course.file,
    };
  }

  const isFreeCourse = course.category === "free";
  const isFreeUser = currentSubscription.tier === "free";

  const isProUser = currentSubscription.tier === "pro";
  const isProCourse = course.category === "pro";

  const isEliteUser = currentSubscription.tier === "elite";

  const feature = currentSubscription.getFeature("courses");

  if (!feature) {
    return {
      success: false,
      message: "No feature found",
    };
  }

  if (isFreeCourse && isFreeUser) {
    await prisma.course.update({
      where: {
        id: course.id,
      },
      data: {
        enrolled: {
          increment: 1,
        },
      },
    });
    await decrementCourseRemaining(feature.id, course.price ?? 0);
    return {
      success: true,
      message: "File download Link",
      file: course.file, // Assuming this is a URL or path to the file
    };
  } else if (feature.remaining !== null && feature.remaining === 0) {
    return {
      success: false,
      message: "You have reached the limit of courses you can download",
    };
  } else if (
    (isProCourse || isFreeCourse) &&
    (isProUser || isEliteUser) &&
    feature.remaining !== null &&
    feature.remaining > 0 &&
    feature.value !== null &&
    feature.value > 0
  ) {
    await decrementCourseRemaining(feature.id, course.price ?? 0);
    return {
      success: true,
      message: "File download Link",
      file: course.file,
    };
  }

  const purchaseData = await prisma.userPurchasedCourse.create({
    data: {
      userId: cu.user.id as string,
      courseId: course.id,
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
            name: course.title,
            // images: [] // Optionally add course image here
          },
          unit_amount: Math.round((course.price ?? 0) * 100),
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.AUTH_URL}/courses/download/${cu.user.id}/${course.id}?payment=success`,
    cancel_url: `${process.env.AUTH_URL}/cancel`,
    metadata: {
      purchaseId: purchaseData.id,
      for: "course" as webhookFor,
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
    message: "You don't have access to this course",
  };
}

export async function decrementCourseRemaining(id: string, price: number) {
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
