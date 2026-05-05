import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export const POST = async (req: NextRequest) => {
  const { email, password } = await req.json();

  const response = await fetch("http://localhost:3001/users/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    return NextResponse.json(
      { message: "invalid credentials" },
      { status: 401 },
    );
  }

  const cookieStore = await cookies();
  cookieStore.set("token", data.accessToken);

  return NextResponse.json(
    { message: "Successfully logged in" },
    { status: 200 },
  );
};
