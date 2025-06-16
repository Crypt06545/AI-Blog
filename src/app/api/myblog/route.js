import ConnectDB from "@/config/db";
import BlogModel from "@/models/BlogModel";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await ConnectDB();

    const { searchParams } = new URL(request.url);
    const author = searchParams.get("author");

    if (!author) {
      return NextResponse.json(
        { message: "Author is required" },
        { status: 400 }
      );
    }

    // Find blogs by author name
    const blogs = await BlogModel.find({ author });

    if (!blogs || blogs.length === 0) {
      return NextResponse.json(
        { message: "No blogs found for this author" },
        { status: 404 }
      );
    }

    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
