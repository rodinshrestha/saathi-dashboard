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
  const token = request.cookies.get(ACCESS_TOKEN)?.value;
  const pathname = request.nextUrl.pathname;

  const isLoginPage = pathname === "/login";
  const isPublic = isLoginPage; // you can add more public routes later

  // 🟥 1) User has NO token → Allow only public routes
  if (!token && !isPublic) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 🟩 2) User HAS token but tries to go to /login → redirect to homepage
  if (token && isLoginPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // 🟦 3) Otherwise allow request
  return NextResponse.next();
}

// Optional: only run middleware on page routes
export const config = {
  matcher: ["/((?!api|_next|favicon.ico|.*\\.[a-zA-Z0-9]+).*)"],
};
