module.exports = {
  extends: ["plugin:vue/vue3-recommended", "prettier"],
  rules: {
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        registeredComponentsOnly: false,
      },
    ],
  },
};
