"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "@/lib/services/signIn";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <div>
      <SignIn />
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
      await signIn(credentials);
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

      <Button onClick={onSubmit}>SignIn </Button>
    </div>
  );
};
