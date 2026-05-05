import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("token");
  const { pathname } = request.nextUrl;

  // Нэвтрэх шаардлагагүй хуудсууд
  if (
    pathname === "/" ||
    pathname === "/login" ||
    pathname.startsWith("/signup")
  ) {
    return NextResponse.next();
  }

  // Бусад хуудсуудад token шаардана
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images|public).*)"],
};
