import { nextConstants } from "@/constants";
import {
  DecodedTokenType,
  getUserInfoFromToken,
} from "@/server-actions/get-user-info-from-token";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const { BINGEWATCH_SECURE_COOKIE, DOMAIN, API_URL } = nextConstants;

export async function POST(request: NextRequest) {
  try {
    console.log("cookie deleted route");
    const cookieStore = await cookies();

    const userInfo = (await getUserInfoFromToken(
      BINGEWATCH_SECURE_COOKIE
    )) as DecodedTokenType;
    const request = await fetch(`${API_URL}/logout`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    });

    if (request.ok) {
      const response = await request.json();
      // Delete the cookie by setting its maxAge to -1 and expires to the past
      cookieStore.set(BINGEWATCH_SECURE_COOKIE, "", {
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        httpOnly: true,
        expires: new Date(0),
        path: "/",
        domain: DOMAIN || undefined,
      });

      console.log("Logout Response: ", { response });

      return NextResponse.json(
        { status: true, message: "Logged out successfully" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { status: false, message: "Error while trying to log out." },
      { status: 400 }
    );
  } catch (error) {
    console.error("logout action catch ERROR: ", error);
    return NextResponse.json(
      { status: false, message: "Error while Logout" },
      { status: 400 }
    );
  }
}
