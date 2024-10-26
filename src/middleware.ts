import createMiddleware from "next-intl/middleware";
import { localePrefix, locales } from "./navigation";
export default createMiddleware({
  defaultLocale: "en",
  locales,
  localePrefix,
});

export const config = {
  matcher: ["/", "/(hi|en)/:path*"],
};
