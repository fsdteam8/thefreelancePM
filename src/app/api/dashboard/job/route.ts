import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// Force dynamic rendering
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const location = searchParams.get("location") || undefined;
    const status = searchParams.get("status") || "all";
    const type = searchParams.get("type") || undefined;
    const searchQuery = searchParams.get("searchQuery") || undefined;
    const sortBy = searchParams.get("sortBy") || undefined;
    const experiences = searchParams.get("experienc") || undefined;

    // Validate pagination parameters
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const where: any = {};

    // Filter by location
    if (location !== "all") {
      where.location = {
        contains: location,
        mode: "insensitive",
      };
    }

    // Filter by status (published field)
    if (status !== "all") {
      where.published = status === "true";
    }

    // Filter by type
    if (type !== "all") {
      where.type = type;
    }

    if (experiences !== "all") {
      where.experienc = experiences;
    }

    // Determine orderBy condition
    const orderBy: { expiration: "asc" | "desc" } = {
      expiration: sortBy === "asc" ? "asc" : "desc",
    };

    // You can add more sort options here if needed (e.g., sortBy=title, sortBy=company)

    // Filter by search query (searches title, company, and description)
    if (searchQuery) {
      const sanitizedQuery = searchQuery.trim();
      where.OR = [
        { title: { contains: sanitizedQuery, mode: "insensitive" } },
        { company: { contains: sanitizedQuery, mode: "insensitive" } },
      ];
    }

    // Get total count for pagination
    const totalItems = await prisma.job.count({ where });

    // Calculate pagination
    const totalPages = Math.ceil(totalItems / limit);
    const skip = (page - 1) * limit;

    // Fetch jobs
    const jobs = await prisma.job.findMany({
      where,
      skip,
      take: limit,
      orderBy: orderBy,
    });

    return NextResponse.json({
      success: true,
      message: jobs.length > 0 ? "Jobs fetched successfully" : "No jobs found",
      data: jobs,
      meta: {
        totalPages,
        totalItems,
        currentPage: page,
        itemsPerPage: limit,
      },
    });
  } catch (error) {
    console.error("Error fetching jobs:", error);
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
