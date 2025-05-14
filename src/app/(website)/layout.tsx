import { auth } from "@/auth";
import Footer from "@/components/footer";
import MaintenancePage from "@/components/shared/maintanence";
import { prisma } from "@/lib/prisma";
import { Role } from "@prisma/client";
import { ReactNode } from "react";
import Navbar from "./_components/navbar";

const WebsiteLayoout = async ({ children }: { children: ReactNode }) => {
  const cu = await auth();

  const settings = await prisma.setting.findFirst();
  const isMaintanence = settings?.isMaintenance ?? false;

  if (isMaintanence) {
    return <MaintenancePage />;
  }
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar isLoggedin={!!cu} role={cu?.user.role as Role} />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default WebsiteLayoout;
