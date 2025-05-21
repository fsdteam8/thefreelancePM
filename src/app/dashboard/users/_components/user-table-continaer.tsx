"use client";

import { Loader2, Search } from "lucide-react";

// import { GetUserResponse } from "@/app/api/dashboard/users/route";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TablePagination } from "@/components/ui/table-pagination";
import useUsersStore from "@/zustand/dashboard/users";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import DeleteuserModal from "./delete-user-modal";
import UserDetailsModal from "./view-user-modal";

interface Props {
  plans: {
    id: string;
    title: string;
  }[];
}

interface ApiRes {
  success: boolean;
  message: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  meta: {
    totalPages: number;
    totalItems: number;
    currentPage: number;
    itemsPerPage: number;
  };
}

const item_per_page = 10;
export function UserTableContainer({ plans }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const { searchQuery, setSearchQuery, status, setStatus, plan, setPlan } =
    useUsersStore();

  const { isLoading, data, isError, error, refetch, isRefetching } =
    useQuery<ApiRes>({
      queryKey: ["Users", currentPage, item_per_page],
      queryFn: () =>
        fetch(
          `/api/dashboard/users?isActive=${status}&planId=${plan}&query=${searchQuery}&page=${currentPage}&limit=${item_per_page}`,
        ).then((res) => res.json()),
    });

  // Get badge color based on status
  // const getStatusBadgeClass = (status: string) => {
  //   return status === "Active"
  //     ? "bg-green-100 text-green-800"
  //     : "bg-gray-100 text-gray-800";
  // };

  // Get badge color based on plan
  const getPlanBadgeClass = (plan: string) => {
    switch (plan) {
      case "Freelancer Lite":
        return "bg-blue-100 text-blue-800";
      case "Freelancer Pro":
        return "bg-yellow-100 text-yellow-800";
      case "Freelancer Elite":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isError) {
    content = <p>{error.message}</p>;
  } else if (data?.success) {
    content = (
      <>
        <div className="mt-6 overflow-hidden rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                {/* <TableHead>Last Active</TableHead> */}
                {/* <TableHead>Status</TableHead> */}
                <TableHead>Plan</TableHead>
                <TableHead className="w-[80px] text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.data.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  {/* <TableCell>01/15/23 01:16AM EST</TableCell> */}
                  {/* <TableCell>
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-medium ${getStatusBadgeClass(
                        user.isActive ? "Active" : "Inactive"
                      )}`}
                    >
                      {user.isActive ? "Active" : "Inactive"}
                    </span>
                  </TableCell> */}
                  <TableCell>
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-medium ${getPlanBadgeClass(
                        user.userSubscriptions.length > 0
                          ? user.userSubscriptions[0].subscription.title
                          : "Unknown Plan",
                      )}`}
                    >
                      {user.userSubscriptions.length > 0
                        ? user.userSubscriptions[0].subscription.title
                        : "Unknown Plan"}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center">
                      <UserDetailsModal data={user} />
                      <DeleteuserModal data={user} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <TablePagination
          currentPage={currentPage}
          totalPages={data.meta.totalPages ?? 0}
          totalItems={data.meta.totalItems ?? 0}
          itemsPerPage={item_per_page}
          onPageChange={(p) => setCurrentPage(p)}
        />
      </>
    );
  }

  return (
    <Card className="mt-6">
      <CardContent className="p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full pl-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-1 items-center gap-2 sm:justify-end">
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="true">Active</SelectItem>
                <SelectItem value="false">Inactive</SelectItem>
              </SelectContent>
            </Select>
            <Select value={plan} onValueChange={setPlan}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Select Plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Plans</SelectItem>
                {plans.map(({ id, title }) => (
                  <SelectItem key={id} value={id}>
                    {title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button onClick={() => refetch()} disabled={isRefetching}>
              Search {isRefetching && <Loader2 className="animate-spin ml-2" />}
            </Button>
          </div>
        </div>

        {content}
      </CardContent>
    </Card>
  );
}
