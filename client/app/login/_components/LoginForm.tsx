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

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
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
    <div className="bg-white p-8 rounded-xl w-96">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Log in</h2>
      <p className="text-gray-500 text-sm mb-6">
        Log in to enjoy your favorite dishes.
      </p>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <div className="mb-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 text-gray-800"
          placeholder="Enter your email address"
          required
        />
      </div>

      <div className="mb-2">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 text-gray-800"
          placeholder="Password"
          required
        />
      </div>

      <div className="text-right mb-6">
        <a
          href="/forgot-password"
          className="text-sm text-gray-500 hover:underline"
        >
          Forgot password?
        </a>
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 disabled:opacity-50"
      >
        {loading ? "Түр хүлээнэ үү..." : "Let's Go"}
      </button>

      <p className="text-center text-sm text-gray-500 mt-4">
        Don't have an account?{" "}
        <a href="/signup" className="text-red-500 hover:underline">
          Sign up
        </a>
      </p>
    </div>
  );
}
