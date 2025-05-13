"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useDebounce from "@/hooks/useDebounce";
import useCoursesStore from "@/zustand/website/courses";
import { CourseType, TemplateType } from "@prisma/client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Loader2, Search } from "lucide-react";
import JobRightFit from "../../jobBoard/_components/JobRightFit";
import CourseHeader from "./CourseHeader";
import CoursesCard from "./CoursesCard";

export default function CoursesContainer() {
  const { query, setQuery, level, setlevel, sortBy, setSortBy, type, setType } =
    useCoursesStore();

  const searchQuery = useDebounce(query, 500);

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["courses", searchQuery, sortBy, type, level],
    queryFn: ({ pageParam = 1 }) => {
      const params = new URLSearchParams();
      params.append("page", pageParam.toString());
      params.append("limit", "3");

      if (searchQuery && searchQuery.trim() !== "") {
        params.append("searchQuery", searchQuery.trim());
      }

      if (sortBy && sortBy.trim() !== "") {
        params.append("sortBy", sortBy.trim());
      }

      if (type && type.trim() !== "" && type !== "all") {
        params.append("category", type.trim());
      }

      if (level && level.trim() !== "" && level !== "all") {
        params.append("type", level.trim());
      }

      return fetch(`/api/dashboard/courses?${params.toString()}`)
        .then((res) => res.json())
        .catch((err) => {
          throw err;
        });
    },
    getNextPageParam: (lastPage) => {
      if (
        lastPage.success &&
        lastPage.meta.totalPages > lastPage.meta.currentPage
      ) {
        return lastPage.meta.currentPage + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });

  let content;

  if (isLoading) {
    content = (
      <div className="min-h-[400px] flex justify-center items-center">
        Loading
      </div>
    );
  } else if (isError) {
    content = (
      <div className="min-h-[400px] flex justify-center items-center">
        Something went wrong: {error.message}
      </div>
    );
  } else if (!data || data.pages[0]?.data?.length === 0) {
    content = (
      <div className="min-h-[400px] flex justify-center items-center">
        No courses found
      </div>
    );
  } else {
    const allCourses = data.pages.flatMap((page) => page.data);
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {allCourses.map((course) => (
          <CoursesCard key={course.id} data={course} />
        ))}
      </div>
    );
  }
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <CourseHeader />

      {/* Search Section */}
      <div className="mb-[20px]">
        <div className="bg-white py-6 lg:px-4">
          <div className="container mx-auto">
            <div className="relative mb-[30px] shadow-[0px_4px_12px_0px_#0000001A] rounded-[15px]">
              <input
                type="text"
                placeholder="Search for courses, topics, or skills..."
                className="w-full p-2 pl-3 pr-10 h-[52px] rounded-[15px] outline-[#004AAD] border-[1.5px] border-gray-500"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-4 text-black" size={20} />
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-4">
              {/* Left Filters */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <div className="shadow-[0px_4px_12px_0px_#0000001A] rounded-[30px]">
                  <Select value={level} onValueChange={setlevel}>
                    <SelectTrigger className="w-full sm:w-[140px] h-[39px] rounded-[30px]">
                      <SelectValue placeholder="Select Level" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.values(CourseType).map((type) => (
                        <SelectItem key={type} value={type}>
                          {type.replace("_", " ")}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="shadow-[0px_4px_12px_0px_#0000001A] rounded-[30px]">
                  <Select value={type} onValueChange={setType}>
                    <SelectTrigger className="w-full sm:w-[145px] h-[39px] rounded-[30px]">
                      <SelectValue placeholder="Select Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.values(TemplateType).map((type) => (
                        <SelectItem key={type} value={type}>
                          {type.replace("_", " ")}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Right Sort By */}
              <div className="flex items-center gap-4 mx-auto lg:mx-0">
                <p className="text-lg font-medium whitespace-nowrap">
                  Sort By:
                </p>
                <div className="shadow-[0px_4px_12px_0px_#0000001A] rounded-[30px]">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[200px] h-[39px] rounded-[30px]">
                      <SelectValue placeholder="Newest First" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asc">Ascending</SelectItem>
                      <SelectItem value="desc">Descinding</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Cards Grid */}
      <div className="lg:py-6 lg:px-4 lg:flex-grow mb-[50px]">
        <div className="container mx-auto ">
          {content}

          {hasNextPage && (
            <div className="flex items-center justify-center mt-[30px] mb-[50px]">
              <Button
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage || !hasNextPage}
                className="w-[175px] h-[45px] text-base"
                variant="outline"
              >
                Load More{" "}
                {isFetchingNextPage && (
                  <Loader2 className="animate-spin ml-2" />
                )}
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Footer - Newsletter */}
      <JobRightFit />
    </div>
  );
}
