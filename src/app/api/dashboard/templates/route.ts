import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// Force dynamic rendering
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    const rawCategory = searchParams.get("category");
    const rawSearchQuery = searchParams.get("searchQuery");
    const rawSortBy = searchParams.get("sortBy");

    const category =
      rawCategory && rawCategory.trim().length > 0
        ? rawCategory.trim()
        : undefined;

    const searchQuery =
      rawSearchQuery && rawSearchQuery.trim().length > 0
        ? rawSearchQuery.trim()
        : undefined;

    const sortBy =
      rawSortBy && rawSortBy.trim().length > 0 ? rawSortBy.trim() : undefined;

    // Validate pagination
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

    // Build where clause
    // eslint disable-next-line @typescript-eslint/no-explicit-any
    const where: any = {};

    if (category && ["free", "pro"].includes(category)) {
      where.category = category;
    }

    if (searchQuery) {
      where.OR = [
        { title: { contains: searchQuery, mode: "insensitive" } },
        { description: { contains: searchQuery, mode: "insensitive" } },
      ];
    }

    // Sorting
    const orderBy: { [key: string]: "asc" | "desc" } = {};
    if (sortBy === "asc" || sortBy === "desc") {
      orderBy.createdAt = sortBy;
    } else {
      orderBy.createdAt = "desc"; // default
    }

    // Count total items
    const totalItems = await prisma.template.count({ where });
    const totalPages = Math.ceil(totalItems / limit);
    const skip = (page - 1) * limit;

    const templates = await prisma.template.findMany({
      where,
      skip,
      take: limit,
      orderBy,
    });

    return NextResponse.json({
      success: true,
      message:
        templates.length > 0
          ? "Templates fetched successfully"
          : "No templates found",
      data: templates,
      meta: {
        totalPages,
        totalItems,
        currentPage: page,
        itemsPerPage: limit,
      },
    });
  } catch (error) {
    console.error("Error fetching templates:", error);
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
