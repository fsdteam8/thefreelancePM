import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// Force dynamic rendering
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Parse pagination
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);

    if (page < 1 || limit < 1) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid pagination parameters",
          data: [],
          meta: {
            totalPages: 0,
            totalItems: 0,
            currentPage: page,
            itemsPerPage: limit,
          },
        },
        { status: 400 },
      );
    }

    // Sanitize and extract filters
    const rawCategory = searchParams.get("category");
    const rawType = searchParams.get("type");
    const rawSearchQuery = searchParams.get("searchQuery");
    const rawSortBy = searchParams.get("sortBy");

    const category =
      rawCategory && rawCategory.trim() !== "" && rawCategory !== "all"
        ? rawCategory.trim()
        : undefined;

    const type =
      rawType && rawType.trim() !== "" && rawType !== "all"
        ? rawType.trim()
        : undefined;

    const searchQuery =
      rawSearchQuery && rawSearchQuery.trim() !== ""
        ? rawSearchQuery.trim()
        : undefined;

    const sortBy =
      rawSortBy && rawSortBy.trim() !== "" ? rawSortBy.trim() : undefined;

    // Build the Prisma `where` clause
    const where: any = {};

    if (category) {
      where.category = category;
    }

    if (type) {
      where.type = type;
    }

    if (searchQuery) {
      where.OR = [
        { title: { contains: searchQuery, mode: "insensitive" } },
        { description: { contains: searchQuery, mode: "insensitive" } },
        // { skills: { hasSome: [searchQuery] } }, // optional field
      ];
    }

    // Build sort order
    const orderBy: { [key: string]: "asc" | "desc" } = {
      createdAt: sortBy === "asc" || sortBy === "desc" ? sortBy : "desc",
    };

    // Get total count for pagination
    const totalItems = await prisma.course.count({ where });
    const totalPages = Math.ceil(totalItems / limit);
    const skip = (page - 1) * limit;

    // Fetch paginated courses
    const courses = await prisma.course.findMany({
      where,
      skip,
      take: limit,
      orderBy,
    });

    return NextResponse.json({
      success: true,
      message:
        courses.length > 0
          ? "Courses fetched successfully"
          : "No courses found",
      data: courses,
      meta: {
        totalPages,
        totalItems,
        currentPage: page,
        itemsPerPage: limit,
      },
    });
  } catch (error) {
    console.error("Error fetching courses:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
        data: [],
        meta: {
          totalPages: 0,
          totalItems: 0,
          currentPage: 1,
          itemsPerPage: 10,
        },
      },
      { status: 500 },
    );
  }
}
