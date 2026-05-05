import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const POST = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("token");

  return NextResponse.json(
    { message: "Successfully logged out" },
    { status: 200 },
  );
};
