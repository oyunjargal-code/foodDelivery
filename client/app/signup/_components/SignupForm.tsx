"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    // Email хадгалаад password хуудас руу явна
    router.push(`/signup/password?email=${email}`);
  }

  return (
    <div className="bg-white p-8 rounded-xl w-96">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Create your account
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Sign up to explore your favorite dishes.
      </p>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-sm text-gray-600 mb-1">
            Enter your email address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 text-gray-800"
            placeholder="example@mail.com"
            required
          />
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
