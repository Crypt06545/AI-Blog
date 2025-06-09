import ConnectDB from "@/config/db";
import { NextResponse } from "next/server";
import BlogModel from "@/models/BlogModel";
import cloudinary from "@/lib/cloudinary";

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
    const image = formData.get("image");

    if (!image) {
      throw new Error("No image file uploaded");
    }

    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const base64Image = `data:${image.type};base64,${buffer.toString(
      "base64"
    )}`;

    // Upload to Cloudinary
    const uploadRes = await cloudinary.uploader.upload(base64Image, {
      folder: "Blogs",
    });

    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      image: uploadRes.secure_url,
      author: formData.get("author"),
      authorImg: formData.get("authorImg"),
    };

    const response = await BlogModel.create(blogData);

    return NextResponse.json({ success: true, response });
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
