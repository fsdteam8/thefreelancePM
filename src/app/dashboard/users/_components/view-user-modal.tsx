"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Eye } from "lucide-react";
import { useState } from "react";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

export default function UserDetailsModal({ data }: Props) {
  const [open, setOpen] = useState(false);

  // Sample user data
  const userData = {
    name: data.name,
    email: data.email,
    plan:
      data.userSubscriptions.length > 0
        ? data.userSubscriptions[0].subscription.title
        : "Unknown Plan",
    status: data.isActive ? "Active" : "Inactive",
  };
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button size="icon">
            <Eye />
          </Button>
        </DialogTrigger>
        <DialogContent
          className="p-0 overflow-hidden max-w-md w-full border-none"
          onInteractOutside={(e) => e.preventDefault()}
        >
          <div className="p-6 pb-0">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-blue-600">User Details</h2>
            </div>
            <div className="h-0.5 bg-blue-600 mt-2 mb-6"></div>

            <div className="bg-gray-50 rounded-lg p-5 mb-6">
              <div className="grid grid-cols-[100px_1fr] gap-y-4">
                <div className="font-medium">Name:</div>
                <div>{data.name}</div>

                <div className="font-medium">Email:</div>
                <div>{data.email}</div>

                <div className="font-medium">Plan:</div>
                <div>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800 font-normal rounded-md px-2">
                    {userData.plan}
                  </Badge>
                </div>

                {/* <div className="font-medium">Status:</div>
                <div>{userData.status}</div> */}
              </div>
            </div>
            {/* 
            <div className="bg-gray-50 rounded-lg p-5 mb-6">
              <h3 className="text-blue-600 font-bold mb-4">Quick Stats</h3>

              <div className="grid grid-cols-[160px_1fr] gap-y-4">
                <div className="font-medium">Quizzes Completed:</div>
                <div>4</div>

                <div className="font-medium relative">
                  <span className="relative z-10">Jobs Applied:</span>
                </div>
                <div>3</div>

                <div className="font-medium">Courses Enrolled:</div>
                <div className="flex items-center">
                  <span>5</span>
                </div>

                <div className="font-medium">Last Activity:</div>
                <div>2025-04-14</div>
              </div>
            </div> */}

            <div className="flex justify-center gap-4 mb-6">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                onClick={() => setOpen(false)}
              >
                Okay
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
