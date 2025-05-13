import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dgnustmny/image/upload/v1745590124/hero_qt0agd.jpg')",
          filter: "brightness(0.9)",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 pt-20">
          <div className="max-w-3xl">
            <h1 className="text-[30px] md:text-[32px] lg:text-[40px] font-bold text-white mb-4">
              Welcome to The <span className="text-[#004aad]">FreelancePM</span>{" "}
              Club!
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8">
              Your ultimate hub for freelance project management success.
              Whether you&apos;re just starting out, scaling your consulting
              business, or seeking new contract opportunities, we&apos;ve got
              you covered!
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-[#004aad] hover:bg-blue-700 text-white px-6 py-2 rounded-md"
                effect="gooeyLeft"
              >
                <Link href="/subscriptions">Get Started</Link>
              </Button>
              <Button
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-6 py-2 rounded-md"
                effect="gooeyRight"
              >
                <Link href="/jobBoard">Explore</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
