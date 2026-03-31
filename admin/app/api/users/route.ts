import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

type SingInResponse = {
  accessToken: string;
};

export async function POST(request: NextRequest) {
  const credentials = await request.json();
  const cookieStore = await cookies();

  try {
    const response = await fetch("http://localhost:3001/users/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = (await response.json()) as SingInResponse;

    cookieStore.set("token", data.accessToken);

    return NextResponse.json(
      { message: "Successfully logged in" },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "invalid credentials" },
      { status: 400 },
    );
  }
}
