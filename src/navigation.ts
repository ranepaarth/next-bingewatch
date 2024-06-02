import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["en", "hi"] as const;
export const localePrefix = "always";

export const pathnames = {
  "/": "/",
  "/signin": "/signin",
  "/signup": "/signup",
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
