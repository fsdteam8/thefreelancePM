"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navlinks = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "Subscriptions",
    href: "/subscriptions",
  },
  {
    id: 3,
    label: "Job Board",
    href: "/jobBoard",
  },
  {
    id: 4,
    label: "Templates",
    href: "/templates",
  },
  {
    id: 5,
    label: "Courses",
    href: "/courses",
  },
  {
    id: 6,
    label: "Quizzes",
    href: "/quizzes",
  },
  {
    id: 7,
    label: "Testimonials",
    href: "/testmonial",
  },
  {
    id: 8,
    label: "Coaching",
    href: "/coaching",
  },
  {
    id: 9,
    label: "FAQs",
    href: "/faq",
  },
];

interface Props {
  isLoggedin: boolean;
}

export default function Navbar({ isLoggedin }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0  left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 ">
        <Sheet open={open} onOpenChange={(v) => setOpen(v)}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="space-y-4 mt-10">
              {navlinks.map(({ id, href, label }) => (
                <Button
                  variant="link"
                  effect="hoverUnderline"
                  asChild
                  key={id}
                  className="text-black"
                  onClick={() => setOpen(false)}
                >
                  <Link href={href} className="w-full">
                    {label}
                  </Link>
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/">
          <Image src="/Logo.png" width={40} height={100} alt="logo" />
        </Link>

        {isLoggedin ? (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" className="rounded-full">
                  <User className="text-orange-500" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuItem asChild>
                  <Link href="/account" className="w-full">
                    Account{" "}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                <DropdownMenuItem
                  onClick={async () => {
                    await signOut({ redirectTo: "/", redirect: true });
                  }}
                  className="cursor-pointer w-full"
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <Button
            className="bg-[#004aad] hover:bg-blue-700 text-white rounded-md px-4 py-2"
            asChild
          >
            <Link href="/sign-up">Join Now</Link>
          </Button>
        )}
      </div>
    </header>
  );
}
