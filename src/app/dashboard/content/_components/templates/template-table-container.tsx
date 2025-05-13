import AddTemplatesPage from "@/components/shared/models/add-template-modal";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TablePagination } from "@/components/ui/table-pagination";
import useDebounce from "@/hooks/useDebounce";
import { Subscription, Template } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { templateColumns } from "./template-columns";

interface ApiResponse {
  success: boolean;
  message: string;
  data: Template[];
  meta: {
    totalPages: number;
    totalItems: number;
    currentPage: number;
    itemsPerPage: number;
  };
}

interface TemplatetableContainerProps {
  subscripton: Subscription[];
}

const TemplatetableContainer = ({
  subscripton,
}: TemplatetableContainerProps) => {
  const [status, setStatus] = useState("");
  const [planId, setPlanId] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const searchQuery = useDebounce(search, 500);
  const { data } = useQuery<ApiResponse>({
    queryKey: ["templates", status, planId, page, searchQuery],
    queryFn: () =>
      fetch(
        `/api/dashboard/content/templates?status=${status}&plan=${planId}&page=${page}&searchQuery=${searchQuery}`,
      ).then((res) => res.json()),
  });
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center  gap-x-5 pb-2">
          <div className="flex items-center gap-2 ">
            <Input
              placeholder="Search..."
              className="w-[350px]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Select onValueChange={(s) => setStatus(s)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statusess</SelectItem>
              <SelectItem value="true">Active</SelectItem>
              <SelectItem value="false">Draft</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={(s) => setPlanId(s)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Plan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Plans</SelectItem>
              {subscripton.map(({ id, title }) => (
                <SelectItem value={id} key={id}>
                  {title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <AddTemplatesPage
          trigger={
            <Button>
              Add Template <span className="ml-1">+</span>
            </Button>
          }
        />
      </div>
      <TableContainer
        data={data?.data ?? []}
        columns={templateColumns}
        subscripton={subscripton}
        pagination={data?.meta ?? {}}
        setCurrentPage={setPage}
      />
    </div>
  );
};

export default TemplatetableContainer;

interface Props {
  data: Template[];
  columns: ColumnDef<Template>[];
  subscripton: Subscription[];
  pagination: {
    totalPages?: number;
    totalItems?: number;
    currentPage?: number;
    itemsPerPage?: number;
  };

  setCurrentPage: (page: number) => void;
}

const TableContainer = ({
  columns,
  data,
  pagination,
  setCurrentPage,
}: Props) => {
  const table = useReactTable({
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });
  return (
    <div>
      <DataTable columns={columns} table={table} />
      <TablePagination
        currentPage={pagination.currentPage ?? 1}
        totalPages={pagination.totalPages ?? 0}
        totalItems={pagination.totalItems ?? 0}
        itemsPerPage={pagination.itemsPerPage ?? 10}
        onPageChange={(p) => setCurrentPage(p)}
      />
    </div>
  );
};
