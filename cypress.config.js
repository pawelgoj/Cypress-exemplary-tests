const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com",
    includeShadowDom: true,
    chromeWebSecurity: true,
    defaultCommandTimeout: 100000,
    viewportHeight: 1080,
    viewportWidth: 1920,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
