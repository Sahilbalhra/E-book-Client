import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/book/:path*", "/", "/sign-in"],
};

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const url = request.nextUrl;
  if (
    token &&
    (url.pathname.startsWith("/sign-in") || url.pathname.startsWith("/sign-up"))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // if (!token && url.pathname.startsWith("/book")) {
  //   return NextResponse.redirect(new URL("/sign-in", request.url));
  // }
  return NextResponse.next();
}
