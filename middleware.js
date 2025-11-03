import { NextResponse } from "next/server";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/create-user/:path*",
    "/tasks/:path*",
    "/login",
    "/",
  ],
};

export async function middleware(request) {
  const token = request.cookies.get("jwt");
  const { pathname } = request.nextUrl;

  // If user is logged in and tries to access login page or root, redirect to dashboard
  if (token && (pathname === "/login" || pathname === "/")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // If user is NOT logged in and tries to access protected routes, redirect to login
  if (
    !token &&
    (pathname.startsWith("/dashboard") ||
      pathname.startsWith("/create-user") ||
      pathname.startsWith("/tasks"))
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow the request to continue
  return NextResponse.next();
}
