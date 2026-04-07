"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "@/lib/services/signIn";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <div className="w-[1440px] mx-auto flex justify-between border border-red-500 h-screen">
      <div className="w-[416px] h-[376px] flex items-center justify-center mt-100">
        <SignIn />
      </div>
      <div className="w-[900px] overflow-hidden rounded-4xl ">
        <img
          src="/images/img.jpg"
          alt="faceImg"
          className="h-screen object-cover"
        />
      </div>
    </div>
  );
}

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    const credentials = {
      email,
      password,
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/auth"`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        },
      );

      if (res.status !== 200) return;

      router.push("/dashboard/foods");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        placeholder="Password"
        type="email"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <Button onClick={onSubmit}> Sign In </Button>
    </div>
  );
};
