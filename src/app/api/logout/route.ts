import { nextConstants } from "@/constants";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const { BINGEWATCH_SECURE_COOKIE } = nextConstants;

export async function POST(request: NextRequest) {
  try {
    console.log("cookie deleted route");
    const cookieStore = await cookies();

    // Create the response object
    const response = NextResponse.json(
      { status: true, message: "Logged out successfully" },
      { status: 200 }
    );

    console.log("DOMAIN", { DOMAIN: process.env.DOMAIN });

    // Delete the cookie by setting its maxAge to -1 and expires to the past
    cookieStore.set(BINGEWATCH_SECURE_COOKIE, "", {
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      httpOnly: true,
      expires: new Date(0),
      path: "/",
      domain: process.env.DOMAIN || undefined,
    });

    console.log("cookie after logging out"cookieStore.get(BINGEWATCH_SECURE_COOKIE));

    return NextResponse.json(
      { status: true, message: "Logged out successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log("logout action catch ERROR: ", error);
    return NextResponse.json(
      { status: false, message: "Error while Logout" },
      { status: 400 }
    );
  }
}
