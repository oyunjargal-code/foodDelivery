import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { email, password } = await req.json();

  const response = await fetch("http://localhost:3001/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: "Бүртгэл амжилтгүй!" },
      { status: 400 },
    );
  }

  return NextResponse.json(
    { message: "Амжилттай бүртгэгдлээ!" },
    { status: 200 },
  );
};
