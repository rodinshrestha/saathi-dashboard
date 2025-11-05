import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { ACCESS_TOKEN } from "@/constant/token.constant";

// define the routes that require auth
const protectedRoutes = ["/dashboard"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get(ACCESS_TOKEN)?.value; // get your token from cookies

  const pathname = request.nextUrl.pathname;

  // 1️⃣ If user is on "/" (login page)
  if (pathname === "/") {
    if (token) {
      // user is already logged in, redirect to dashboard
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.next(); // allow access to login
  }

  // 2️⃣ If user tries to access protected routes
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!token) {
      // not logged in, redirect to login
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next(); // token exists, allow access
  }

  // Handling unknown routes
  if (token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// Optional: only run middleware on "/" and "/dashboard/***" routes
export const config = {
  matcher: ["/", "/dashboard/:path*", "/:path*"],
};
