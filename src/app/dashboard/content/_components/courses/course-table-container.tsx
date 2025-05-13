import AddCoursePage from "@/components/shared/models/add-course-modal";
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
import { Course, Subscription } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { courseColumns } from "./course-columns";

interface ApiResponse {
  success: boolean;
  message: string;
  data: Course[];
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

const CoursetableContainer = ({ subscripton }: TemplatetableContainerProps) => {
  const [status, setStatus] = useState("");
  const [planId, setPlanId] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState("");

  const searchQuery = useDebounce(content, 500);
  const { data } = useQuery<ApiResponse>({
    queryKey: ["courses", status, planId, page, searchQuery],
    queryFn: () =>
      fetch(
        `/api/dashboard/content/courses?status=${status}&plan=${planId}&page=${page}&searchQuery=${searchQuery}`,
      ).then((res) => res.json()),
  });
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center  gap-x-5">
          <div className="flex items-center gap-2 ">
            <Input
              placeholder="Search..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-[350px]"
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
        <AddCoursePage
          trigger={
            <Button>
              Add Course <span className="ml-1">+</span>
            </Button>
          }
        />
      </div>
      <TableContainer
        data={data?.data ?? []}
        columns={courseColumns}
        subscripton={subscripton}
        pagination={data?.meta ?? {}}
        setCurrentPage={setPage}
      />
    </div>
  );
};

export default CoursetableContainer;

interface Props {
  data: Course[];
  columns: ColumnDef<Course>[];
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
