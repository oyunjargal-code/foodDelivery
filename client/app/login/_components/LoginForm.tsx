"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/auth";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { ok, data } = await loginUser(email, password);

    console.log("ok:", ok);
    console.log("data:", data);

    if (ok) {
      window.location.href = "/";
    } else {
      setError(data.message);
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl w-96">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Нэвтрэх</h2>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <div className="mb-4">
        <label className="block text-sm text-gray-600 mb-1">И-мэйл</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 text-gray-800"
          placeholder="example@mail.com"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm text-gray-600 mb-1">Нууц үг</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 text-gray-800"
          placeholder="••••••••"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 disabled:opacity-50"
      >
        {loading ? "Түр хүлээнэ үү..." : "Нэвтрэх"}
      </button>
    </form>
  );
}
