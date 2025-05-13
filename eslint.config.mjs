import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extend ESLint configs
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

// Add your custom rules to disable unwanted warnings
eslintConfig.push({
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',  // Disable unused-vars rule
    '@typescript-eslint/no-explicit-any': 'off',  // Disable any type rule
  },
});

export default eslintConfig;
