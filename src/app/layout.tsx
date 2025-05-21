import { prisma } from "@/lib/prisma";
import AppProvider from "@/provider/AppProvider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Optional: For fallback fonts
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import "./globals.css";

// Importing Poppins font from Google Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export async function generateMetadata(): Promise<Metadata> {
  const data = await prisma.setting.findFirst();

  return {
    title:
      data?.siteName ??
      "The FreelancePM - Freelance Project Management Services",
    description:
      data?.description ??
      "The FreelancePM offers expert freelance project management service to help your team deliver on time and within budget.",
    keywords: data?.keywords ?? [
      "freelance project managers",
      "project management services",
      "remote project manager",
      "freelance PM for startups",
      "contract project manager",
      "agile project manager freelance",
      "scrum master freelance",
      "tech project manager freelance",
      "product manager freelance",
      "fractional project manager",
      "jira project management",
      "asana project management",
      "remote team management",
      "startup project planning",
    ],
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-thin">
      <body className={` ${poppins.className} antialiased overflow-x-hidden`}>
        <AppProvider>{children}</AppProvider>

        <Toaster closeButton richColors />

        <NextTopLoader showSpinner={false} />
      </body>
    </html>
  );
}
