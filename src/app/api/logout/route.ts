import { nextConstants } from "@/constants";
import { NextRequest, NextResponse } from "next/server";

const { BINGEWATCH_SECURE_COOKIE } = nextConstants;

export async function POST(request: NextRequest) {
  try {
    console.log("cookie deleted route");

    // Create the response object
    const response = NextResponse.json(
      { status:true, message: "Logged out successfully" },
      { status: 200 }
    );

    // Delete the cookie by setting its maxAge to -1 and expires to the past
    response.cookies.set(BINGEWATCH_SECURE_COOKIE, "", {
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      httpOnly: true,
      expires: new Date(0),
      path: "/",
      domain: process.env.DOMAIN || undefined,
    });

    return response;
  } catch (error) {
    console.log("logout action catch ERROR: ", error);
    return NextResponse.json(
      { status:false,message: "Error while Logout" },
      { status: 400 }
    );
  }
}
