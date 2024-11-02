import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { nextConstants } from "./constants";
import { localePrefix, locales, redirect } from "./navigation";
import { protectedRoutes } from "./next-routes";
import { getUserEmailFromToken } from "./server-actions/get-user-email-from-token";

// Create the middleware instance from next-intl
const intlMiddleware = createMiddleware({
  defaultLocale: "en",
  locales,
  localePrefix,
});

const { BINGEWATCH_SECURE_COOKIE } = nextConstants;
export async function middleware(request: NextRequest) {
  const response = intlMiddleware(request); // Use next-intl middleware first

  const [, locale, ...segments] = request.nextUrl.pathname.split("/");

  const nextUrl = request.nextUrl;
  const { pathname } = nextUrl;
  const decodedToken = await getUserEmailFromToken(BINGEWATCH_SECURE_COOKIE);
  
  const protectedRoutesArray = protectedRoutes(locale);
  const isProtectedRoutes = protectedRoutesArray.includes(pathname);

  if (pathname === "/" && locale) {
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  if (pathname.endsWith("signup")) {
    return NextResponse.redirect(
      new URL(`${nextUrl.pathname}/regForm`, request.url)
    );
  }

  if (isProtectedRoutes && !decodedToken?.isLoggedIn) {
    return NextResponse.redirect(new URL(`/`, request.url));
  }

  console.log("MIDDLEWARE", {
    nextUrl,
    protectedRoutesArray,
    isProtectedRoutes,
  });

  return response || NextResponse.next();
}

export const config = {
  matcher: ["/", "/(hi|en)/:path*"],
};
