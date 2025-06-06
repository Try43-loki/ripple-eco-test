import { NextResponse } from "next/server";
import { auth } from "./src/auth";

export async function middleware(req) {
  const session = await auth();

  if (!session?.payload.token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/test"],
};
