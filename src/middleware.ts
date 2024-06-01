import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "hi"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(hi/en)/:path*"],
};
