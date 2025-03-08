const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: "mochawesome@7.1.3",  // ✅ Add this outside `e2e`
  
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true
  },

  e2e: {
    baseUrl: "https://www.automationexercise.com/",
    video: true,
    videosFolder: "cypress/videos",

    setupNodeEvents(on, config) {
      // Implement node event listeners here
    }
  }
});
