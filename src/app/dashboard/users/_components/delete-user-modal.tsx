"use client";

import { deleteUser } from "@/action/users/users";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Trash } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";

interface UserData {
  name: string;
  email: string;
  plan: string;
  status: string;
}

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

export default function DeleteUserModal({ data }: Props) {
  const [open, setOpen] = useState(false);
  const [confirmText, setConfirmText] = useState("");
  const [pending, startTransition] = useTransition();

  // Sample user data
  const userData: UserData = {
    name: data.name,
    email: data.email,
    plan:
      data.userSubscriptions.length > 0
        ? data.userSubscriptions[0].subscription.title
        : "Unknown Plan",
    status: data.isActive ? "Active" : "Inactive",
  };

  const handleDelete = () => {
    if (confirmText === "DELETE") {
      startTransition(() => {
        deleteUser(data.id).then((res) => {
          if (!res.success) {
            toast.error(res.message);
            return;
          }

          // handle success
          toast.success(res.message);
          setOpen(false);
          setConfirmText("");
        });
      });
    }
  };

  return (
    <div className="p-4">
      <Button variant="outline" onClick={() => setOpen(true)} size="icon">
        <Trash />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 overflow-hidden max-w-md rounded-lg">
          <div className="p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <h2 className="text-2xl font-semibold text-blue-700">
                Delete User
              </h2>
            </div>

            {/* Confirmation message */}
            <div className="py-2">
              <p className="text-lg">
                Are you sure you want to delete {userData.name} (
                {userData.email})?
              </p>
            </div>

            {/* User details */}
            <div className="bg-gray-100 rounded-md p-4 space-y-2">
              <div className="grid grid-cols-[100px_1fr] items-center">
                <span className="font-medium">Name:</span>
                <span>{userData.name}</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] items-center">
                <span className="font-medium">Email:</span>
                <span>{userData.email}</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] items-center">
                <span className="font-medium">Plan:</span>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100 px-3 py-0.5 rounded-full font-medium w-fit">
                  {userData.plan}
                </Badge>
              </div>
            </div>

            {/* Confirmation input */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="confirm" className="block">
                  Type <span className="font-bold text-orange-500">DELETE</span>{" "}
                  to confirm permanent deletion:
                </Label>
                <Input
                  id="confirm"
                  value={confirmText}
                  onChange={(e) => setConfirmText(e.target.value)}
                  className="mt-2 border-gray-300 focus-visible:ring-blue-500"
                />
              </div>

              {/* Action buttons */}
              <div className="flex justify-end space-x-3 pt-2">
                <Button
                  type="button"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                  onClick={handleDelete}
                  disabled={confirmText !== "DELETE" || pending}
                >
                  Delete {pending && <Loader2 className="animate-spin ml-2" />}
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
