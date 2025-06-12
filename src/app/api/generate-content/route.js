import ConnectDB from "@/config/db";
import { NextResponse } from "next/server";
import main from "@/lib/gemini";

ConnectDB();

// generate contentreturn NextResponse.json({ success: true, response });
export const generateContent = async (request) => {
  try {
    const { prompt } = request.body;
    const content = await main(
      prompt + "Generate a blog content for this topic in simple text format"
    );
    return NextResponse.json({ success: true, content });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
};
