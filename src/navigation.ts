import {
  createSharedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["en", "hi"] as const;
export const localePrefix = "always";

export const pathnames = {
  "/": "/",
  "/signin": "/signin",
  "/signup": "/signup",
  "/signup/registration": "/signup/registration",
  "/signup/regForm": "/signup/regForm",
  "signup/verifyemail":"signup/verifyemail"
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
