module.exports = {
  env: {
    browser: true,
    jest: true,
    es2021: true,
  },

  extends: ["plugin:react/recommended", "airbnb", "plugin:i18next/recommended"],

  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },

    ecmaVersion: 15,

    sourceType: "module",
  },

  plugins: ["react", "@typescript-eslint", "i18next"],

  rules: {
    "import/prefer-default-export": "warn",
    "object-curly-newline": "off",
    "linebreak-style": ["warn", "windows"],
    "react/react-in-jsx-scope": "off",
    "react/jsx-indent": [2, 2],
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    quotes: ["error", "double"],
    "import/extensions": [0, "never"],
    "no-unused-vars": "warn",
    "import/no-unresolved": "off",
    "quote-props": "off",
    "comma-dangle": "off",
    "react/require-default-props": "off",
    "react/function-component-definition": "off",
    "react/jsx-no-constructed-context-values": "off",
    "operator-linebreak": "off",
    "react/jsx-no-bind": "off",
    "import/no-extraneous-dependencies": "off",
    "react/jsx-props-no-spreading": "warn",
    "no-shadow": "off",
    "no-underscore-dangle": "off",
    "i18next/no-literal-string": [
      "error",
      { markupOnly: true, ignoreAttribute: ["data-testid", "to"] },
    ],
    indent: ["error", 2],
    "react/jsx-one-expression-per-line": "off",
  },
  globals: {
    _IS_DEV_: true,
  },
  overrides: [
    {
      files: ["**/src/**/*.test.{ts,tsx}"],
      rules: {
        "i18next/no-literal-string": "off",
      },
    },
  ],
};
