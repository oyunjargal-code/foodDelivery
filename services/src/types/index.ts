declare global {
  namespace Express {
    export interface Request {
      user?: {
        userId: string;
        role: "user" | "admin";
        email: string;
      };
    }
  }
}

export {};
