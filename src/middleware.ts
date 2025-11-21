import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { ACCESS_TOKEN } from "@/constant/token.constant";

// define the routes that require auth
// const protectedRoutes = [
//   "/",
//   "approvals",
//   "data-entry",
//   "projects",
//   "registration-list",
// ];

export function middleware(request: NextRequest) {
  const token = request.cookies.get(ACCESS_TOKEN)?.value; // get your token from cookies

  const pathname = request.nextUrl.pathname;

  if (pathname === "/login" && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // 1️⃣ If user is on "/" (login page)
  if (pathname === "/") {
    if (token) {
      // user is already logged in, redirect to dashboard
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/login", request.url)); // allow access to login
  }
}

// Optional: only run middleware on page routes
export const config = {
  matcher: ["/((?!api|_next/static|favicon.ico).*)"],
};
