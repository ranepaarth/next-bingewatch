import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { nextConstants } from "./constants";
import { localePrefix, locales, redirect } from "./navigation";
import { protectedRoutes } from "./next-routes";
import {
  DecodedTokenType,
  getUserInfoFromToken,
} from "./server-actions/get-user-info-from-token";
import { logoutAction } from "./server-actions/logout-action";

// Create the middleware instance from next-intl
const intlMiddleware = createMiddleware({
  defaultLocale: "en",
  locales,
  localePrefix,
});

const { BINGEWATCH_SECURE_COOKIE } = nextConstants;
export async function middleware(request: NextRequest) {
  const response = intlMiddleware(request); // Use next-intl middleware first
  const nextResponse = NextResponse.next();

  const [, locale, ...segments] = request.nextUrl.pathname.split("/");

  const nextUrl = request.nextUrl;
  const { pathname } = nextUrl;
  const decodedToken = (await getUserInfoFromToken(
    BINGEWATCH_SECURE_COOKIE
  )) as DecodedTokenType;
  const protectedRoutesArray = protectedRoutes(locale);
  const isProtectedRoutes = protectedRoutesArray.includes(pathname);

  console.log("---------------");
  console.log("MIDDLEWARE 35: ", {
    pathname,
    decodedToken,
    isProtectedRoutes,
  });
  console.log("---------------");

  if (pathname === "/" && locale) {
    console.log("---------------");
    console.log("REDIRECT TO LOCALE");
    console.log("---------------");
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  if (pathname.endsWith("signup")) {
    console.log("---------------");
    console.log("REDIRECT TO REGFORM");
    console.log("---------------");
    return NextResponse.redirect(new URL(`${pathname}/regForm`, request.url));
  }

  if (isProtectedRoutes && !decodedToken?.isLoggedIn) {
    console.log("---------------");
    console.log("REDIRECT TO HOME");
    console.log("---------------");
    return NextResponse.redirect(new URL(`/`, request.url));
  }

  if (pathname.endsWith("planform") && !decodedToken?.isLoggedIn) {
    console.log("---------------");
    console.log("REDIRECT TO HOME");
    console.log("---------------");
    return NextResponse.redirect(new URL(`/`, request.url));
  }

  if (
    pathname.endsWith("/logout") &&
    (!decodedToken || !decodedToken.isLoggedIn)
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname.endsWith("logout") && decodedToken?.isLoggedIn) {
    nextResponse.cookies.set(BINGEWATCH_SECURE_COOKIE, "", {
      maxAge: -1,
      secure: process.env.NODE_ENV === "production" ? true : false,
      sameSite: "lax",
      httpOnly: true,
      expires: new Date(0),
      path: "/", // Make sure the path matches where the cookie was originally set
      domain: process.env.DOMAIN,
    });

    console.log("---------------");
    console.log("LOGOUT", {
      cookieName: BINGEWATCH_SECURE_COOKIE,
    });
    console.log("---------------");

    return nextResponse;
  }
  console.log("---------------");
  console.log("MIDDLEWARE 85", {
    pathname,
    isProtectedRoutes,
  });
  console.log("---------------");
  return response || nextResponse;
}

export const config = {
  matcher: ["/", "/(hi|en)/:path*"],
};
