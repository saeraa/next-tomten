const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    username: "tempuser",
    password: "test123"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});
