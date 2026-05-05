export async function loginUser(email: string, password: string) {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  return { ok: res.ok, data };
}

export async function logoutUser() {
  const res = await fetch("/api/auth/logout", {
    method: "POST",
  });
  return res.ok;
}
