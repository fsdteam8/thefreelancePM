import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status") || "all";
    const plan = searchParams.get("plan") || "all";
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const searchQuery = searchParams.get("searchQuery")?.trim() || "";

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
    const where: any = {};

    // Handle status filter
    if (status !== "all") {
      where.published = status === "true";
    }

    // Handle plan filter
    if (plan !== "all") {
      where.plan = plan;
    }

    // Handle searchQuery (title + description)
    if (searchQuery) {
      where.OR = [
        { title: { contains: searchQuery, mode: "insensitive" } },
        { description: { contains: searchQuery, mode: "insensitive" } },
      ];
    }

    // Get total count for pagination
    const totalItems = await prisma.template.count({ where });

    // Calculate pagination
    const totalPages = Math.ceil(totalItems / limit);
    const skip = (page - 1) * limit;

    // Fetch templates
    const templates = await prisma.template.findMany({
      where,
      skip,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
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
