import ConnectDB from "@/config/db";
import BlogModel from "@/models/BlogModel";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await ConnectDB();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ message: "Missing ID" }, { status: 400 });
    }

    const blog = await BlogModel.findById(id);

    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    await ConnectDB();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ message: "Missing ID" }, { status: 400 });
    }

    const formData = await request.formData();

    const title = formData.get("title");
    const category = formData.get("category");
    const description = formData.get("description");

    const updateFields = {
      title,
      category,
      description,
    };

    const updatedBlog = await BlogModel.findByIdAndUpdate(id, updateFields, {
      new: true,
    });

    if (!updatedBlog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, blog: updatedBlog });
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
