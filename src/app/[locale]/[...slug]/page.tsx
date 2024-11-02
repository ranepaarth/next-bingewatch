// pages/[locale]/[...slug].tsx
// "use client";
import { redirect } from "@/navigation";

const CatchAllLocaleRoute = () => {
  redirect("/");
};

export default CatchAllLocaleRoute;
