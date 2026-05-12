"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <div className="w-screen h-screen flex">
      <div className="flex-1 flex items-center justify-center">
        <SignIn />
      </div>
      <div className="w-[900px] overflow-hidden">
        <img
          src="/images/img.jpg"
          alt="faceImg"
          className="h-screen w-full object-cover"
        />
      </div>
    </div>
  );
}

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (!email || !password) {
      setError("И-мэйл болон нууц үгээ оруулна уу!");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        setError("И-мэйл эсвэл нууц үг буруу байна!");
        return;
      }
      router.push("/dashboard/orders");
    } catch (error) {
      console.log(error);
      setError("Алдаа гарлаа!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-[380px]">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Log in</h1>
        <p className="text-gray-500 text-sm">Log in to manage your orders.</p>
      </div>
      {error && (
        <p className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">{error}</p>
      )}
      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-600">И-мэйл</label>
        <Input
          placeholder="example@mail.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-11"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm text-gray-600">Нууц үг</label>
        <Input
          placeholder="••••••••"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-11"
        />
      </div>
      <Button
        onClick={onSubmit}
        disabled={loading}
        className="w-full h-11 bg-red-500 hover:bg-red-600 text-white mt-2"
      >
        {loading ? "Түр хүлээнэ үү..." : "Sign In"}
      </Button>
    </div>
  );
};
