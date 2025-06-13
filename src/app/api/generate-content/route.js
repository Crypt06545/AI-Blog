import ConnectDB from "@/config/db";
import { NextResponse } from "next/server";
import main from "@/lib/gemini";

// connect to DB (optional if not used here)
// ConnectDB();

export async function POST(request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { success: false, error: "Prompt is required" },
        { status: 400 }
      );
    }

    const content = await main(
      prompt + " Generate a blog content for this topic in simple text format."
    );

    return NextResponse.json({ success: true, content });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
