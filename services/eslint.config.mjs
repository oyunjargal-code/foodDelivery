// @ts-check
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";

export default tseslint.config(
  eslint.configs.recommended, // Standard JS rules
  ...tseslint.configs.recommended, // Standard TS rules
  prettierConfig, // Disables formatting conflicts
  {
    languageOptions: {
      parserOptions: {
        project: true, // Enables rules that require type information
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // Add custom Node.js or TypeScript rules here
      "@typescript-eslint/no-unused-vars": "warn",
      "no-console": "off",
    },
  },
  {
    ignores: ["dist/", "node_modules/", "./src/generated"], // Files to exclude from linting
  },
);
