module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": ["off"],
    "import/no-unresolved": ["off"],
    "react/jsx-props-no-spreading": ["off"],
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react/jsx-one-expression-per-line": ["off"],
    "import/prefer-default-export": ["on"],
    "object-curly-newline": ["off"],
    "react/no-array-index-key": ["off"],
    "max-len": ["off"],
    "import/extensions": [
      "on",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
};
