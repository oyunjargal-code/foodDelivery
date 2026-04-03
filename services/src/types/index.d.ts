declare global {
    namespace Express {
        interface Request {
            user?: {
                userId: string;
                role: "user" | "admin";
                email: string;
            };
        }
    }
}
export {};
//# sourceMappingURL=index.d.ts.map