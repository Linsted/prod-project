module.exports = {
  env: {
    browser: true,

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
    "linebreak-style": ["error", "windows"],
    "react/react-in-jsx-scope": "off",
    "react/jsx-indent": [2, 2],
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    quotes: ["error", "double"],
    "import/extensions": [1, "never"],
    "no-unused-vars": "warn",
    "import/no-unresolved": "off",
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
    "i18next/no-literal-string": ["error", { markupOnly: true }],
  },
  globals: {
    _IS_DEV_: true,
  },
};
