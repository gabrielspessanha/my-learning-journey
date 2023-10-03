import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const timestamp = new Date()
    return NextResponse.json({ name: "Jhon Doe", timestamp, status: 200})
}