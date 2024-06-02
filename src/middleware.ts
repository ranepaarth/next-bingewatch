import createMiddleware from "next-intl/middleware";
import { localePrefix, locales, pathnames } from "./navigation";
export default createMiddleware({
  defaultLocale: "en",
  locales,
  localePrefix,
  pathnames,
});

export const config = {
  matcher: ["/", "/(hi|en)/:path*"],
};
