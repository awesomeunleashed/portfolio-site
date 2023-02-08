module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
  ],
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "tsconfig.json",
      },
      plugins: ["@typescript-eslint", "deprecation", "typescript-sort-keys"],
      rules: {
        "@typescript-eslint/consistent-type-imports": [
          "warn",
          { disallowTypeAnnotations: false },
        ],
        "deprecation/deprecation": "warn",
        "import/namespace": "off", // Redundant with usage of TypeScript
        "react/no-unknown-property": "off", // Redundant with usage of TypeScript
        "typescript-sort-keys/interface": "warn",
        "typescript-sort-keys/string-enum": "warn",
      },
    },
  ],
  plugins: [
    "import",
    "react",
    "sort-destructure-keys",
    "sort-keys",
    "unused-imports",
  ],
  reportUnusedDisableDirectives: true,
  rules: {
    "import/order": ["warn", { alphabetize: { order: "asc" } }],
    "react/display-name": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "sort-destructure-keys/sort-destructure-keys": "warn",
    "sort-keys/sort-keys-fix": ["warn", "asc", { natural: true }],
    "unused-imports/no-unused-imports": "warn",
  },
  settings: {
    "import/resolver": { typescript: { alwaysTryTypes: true } },
    react: { version: "detect" },
  },
};
