export async function loginUser(email: string, password: string) {
  try {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    return { ok: res.ok, data };
  } catch (err) {
    console.log("fetch error:", err);
    return { ok: false, data: { message: "Алдаа гарлаа" } };
  }
}

export async function logoutUser() {
  const res = await fetch("/api/auth/logout", {
    method: "POST",
  });
  return res.ok;
}

export function getEmailFromToken(): string | null {
  if (typeof document === "undefined") return null;

  const cookies = document.cookie.split(";");
  const tokenCookie = cookies.find((c) => c.trim().startsWith("token="));
  if (!tokenCookie) return null;

  const token = tokenCookie.split("=")[1];
  const payload = JSON.parse(atob(token.split(".")[1]));
  return payload.data.email;
}
