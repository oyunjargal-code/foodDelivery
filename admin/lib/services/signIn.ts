type Credentials = {
  email: string;
  password: string;
};

export const signIn = async (credentials: Credentials) => {
  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  return await response.json();
};
