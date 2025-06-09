import ConnectDB from "@/config/db";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import BlogModel from "@/models/BlogModel";

ConnectDB();

export async function GET(request) {
  try {
    return NextResponse.json({ msg: "API is working" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const timestamp = Date.now();
    const image = formData.get("image");

    if (!image) {
      throw new Error("No image file uploaded");
    }

    const buffer = Buffer.from(await image.arrayBuffer());

    const filename = `${timestamp}_${image.name.replace(/\s+/g, "_")}`;
    const filePath = path.join(process.cwd(), "public", filename);

    await writeFile(filePath, buffer);

    const imageUrl = `/${filename}`;

    const blogData = {
      title: `${formData.get("title")}`,
      description: `${formData.get("description")}`,
      image: `${imageUrl}`,
      author: `${formData.get("author")}`,
      authorImg: `${formData.get("authorImg")}`,
    };

    const response = await BlogModel.create(blogData);
    return NextResponse.json({
      success: true,
      response,
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
