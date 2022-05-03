module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "airbnb",
      "airbnb/hooks",
      "plugin:import/react"
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: [
      "react",
    ],
    rules: {
      semi: ["error", "never"],
      quotes: ["error", "double"],
      "no-console": "off",
      "linebreak-style": 0,
    },
  };
  
