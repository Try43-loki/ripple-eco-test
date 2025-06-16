import { auth } from "@/auth";
import { NextResponse } from "next/server";

export const middleware = async (req) => {
  const session = await auth();
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/login") || pathname.startsWith("/register")) {
    return NextResponse.next();
  }

  // proteted when have session

  if (session && (pathname === "/login" || pathname === "/register")) {
    if (session?.user?.role === "ORGANIZER") {
      return NextResponse.redirect(new URL("/organizer/overview", req.url));
    } else {
      return NextResponse.redirect(new URL("/home", req.url));
    }
  }

  // when not have session

  if (!session || !session.customToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  // check role

  const role = session?.user?.role;
  if (pathname.startsWith("/organizer") && role !== "ORGANIZER") {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  if (!pathname.startsWith("/organizer") && role === "ORGANIZER") {
    return NextResponse.redirect(new URL("/organizer/overview", req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/organizer/:path*", "/home/:path*", "/login", "/register"],
};
