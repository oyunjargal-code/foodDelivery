"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function PasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password !== confirm) {
      setError("Нууц үг таарахгүй байна!");
      return;
    }

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push("/login");
    } else {
      setError("Бүртгэл амжилтгүй боллоо!");
    }
  }

  return (
    <div className="bg-white p-8 rounded-xl w-96">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Create a strong password
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Create a strong password with letters, numbers.
      </p>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-gray-800"
            placeholder="Password"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type={show ? "text" : "password"}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-gray-800"
            placeholder="Confirm"
            required
          />
        </div>

        <div className="flex items-center gap-2 mb-6">
          <input
            type="checkbox"
            checked={show}
            onChange={() => setShow(!show)}
            id="show"
          />
          <label htmlFor="show" className="text-sm text-gray-600">
            Show password
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          Let's Go
        </button>
      </form>

      <p className="text-center text-sm text-gray-500 mt-4">
        Already have an account?{" "}
        <a href="/login" className="text-red-500 hover:underline">
          Log in
        </a>
      </p>
    </div>
  );
}
