import { NextResponse, NextRequest } from "next/server";
import { User } from "@/app/types";
import { getUser } from "@/app/utils";

let users = 1;

export async function GET(req: NextRequest, res: NextResponse) {
  const defaultLimit = 50;
  const serchParams = req.nextUrl.searchParams;
  const limit: number = serchParams.has("limit")
    ? Number(serchParams.get("limit"))
    : defaultLimit;

  const response: User[] = [];
  for (let i = users; i < users + limit; i++) {
    response.push(getUser(i * 10));
  }
  users += limit;

  return NextResponse.json(response);
}
