import { nextConstants } from "@/constants";
import { redirect } from "@/navigation";
import { logoutAction } from "@/server-actions/logout-action";
import React from "react";

const { BINGEWATCH_SECURE_COOKIE } = nextConstants;

export const dynamic = "force-dynamic";
const LogoutPage = async () => {
  const result = await logoutAction(BINGEWATCH_SECURE_COOKIE);
  
  return <div>Logout</div>;
};

export default LogoutPage;
