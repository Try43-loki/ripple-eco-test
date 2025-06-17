import { NextResponse } from "next/server";
import { getUserProfileAction } from "./action/user-action";
import { auth } from "./auth";

export const middleware = async (req) => {
  const pathname = req.nextUrl.pathname;
  const session = await auth();

  // Get user profile
  const profile = await getUserProfileAction();
  const isVerifyOrganizer = profile?.data?.isVerifiedOrganizer;
  // Check if the user is an organizer
  const isOrganizer = profile?.data?.organizer;
  // Check if the user don't have session
  if (
    profile.code == 200 &&
    (pathname === "/login" || pathname === "/register")
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  // If user is not an organizer and tries to access /organizer/* route
  if (!isOrganizer && pathname.startsWith("/organizer")) {
    return NextResponse.redirect(new URL("/home", req.url));
  }
  const groupRoute = [
    "/home",
    "/air-quality",
    "/eco-event",
    "/natural-disater",
    "/profile",
    "/view-profile",
    "/take-action",
    "/leaderboard",
    "/discussion-forums",
  ];
  if (isOrganizer && groupRoute.includes(pathname)) {
    return NextResponse.redirect(new URL("/organizer", req.url));
  }
  if (!isVerifyOrganizer && pathname.startsWith("/organizer/create-event")) {
    return NextResponse.redirect(new URL("/organizer/eco-event", req.url));
  }

  // If try to login
  if (pathname.startsWith("/login") && profile.status == 400) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  // If try to login
  if (pathname.startsWith("/register") && profile.status == 400) {
    return NextResponse.redirect(new URL("/register", req.url));
  }

  // Otherwise, allow the request to proceed
  return NextResponse.next();
};

export const config = {
  matcher: [
    "/organizer/:path*",
    "/login",
    "/register",
    "/home",
    "/air-quality",
    "/eco-event",
    "/natural-disater",
    "/profile",
    "/view-profile",
    "/take-action",
    "/leaderboard",
    "/discussion-forums",
  ],
};
