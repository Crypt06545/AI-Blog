import ConnectDB from "@/config/db";
import { NextResponse } from "next/server";
import main from "@/lib/gemini";

// connect to DB (optional if not used here)
ConnectDB();

export async function GET(request) {
    
}
