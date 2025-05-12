import { webhookFor } from "@/action/coaching/create-coaching";
import { stripe } from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { handleCoachingCheckout } from "./handlers/coaching";
import { handleCourseDownload } from "./handlers/handle-course-download";
import { handleTemplateCheckout } from "./handlers/handle-template-download";
import {
  handleInvoiceFailed,
  handleInvoicePaid,
  handleSubscriptionCheckout,
  handleSubscriptionDeleted,
  handleSubscriptionUpdated,
} from "./handlers/subscription";

export async function POST(req: NextRequest) {
  const buf = await req.text();
  const sig = req.headers.get("stripe-signature");

  console.log("Sig", sig);

  let event: Stripe.Event;

  try {
    if (!sig) {
      return new NextResponse("Missing stripe-signature header", {
        status: 400,
      });
    }

    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const purpose = session.metadata?.for as webhookFor;

        if (purpose === "subscription") {
          await handleSubscriptionCheckout(session);
        } else if (purpose === "coaching") {
          await handleCoachingCheckout(session);
        } else if (purpose === "template") {
          await handleTemplateCheckout(session);
        } else if (purpose === "course") {
          await handleCourseDownload(session);
        } else {
          console.warn(`Unhandled checkout purpose: ${purpose}`);
          return new NextResponse("Unknown purpose", { status: 400 });
        }
        break;
      }

      case "invoice.payment_succeeded": {
        const invoice = event.data.object as Stripe.Invoice;
        await handleInvoicePaid(invoice);
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        await handleInvoiceFailed(invoice);
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionUpdated(subscription);
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionDeleted(subscription);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(`Webhook error: ${error.message}`);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
