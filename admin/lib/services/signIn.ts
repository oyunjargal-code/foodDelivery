type Credentials = {
  email: string;
  password: string;
};

type SingInResponse = {
  accessToken: string;
};

export const signIn = async (credentials: Credentials) => {
  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const data = (await response.json()) as SingInResponse;

  return data;
};
