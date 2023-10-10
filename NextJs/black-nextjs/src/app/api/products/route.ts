import { NextApiRequest, NextApiResponse } from "next";
import products from '@/../database.json'
import { NextResponse } from "next/server";

export async function GET(request: Request){
  return NextResponse.json({products, status: 200})
}