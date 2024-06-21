const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "5m9694",
  viewportWidth: 1280,
  viewportHeight: 720,
  video: false,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 60000,
  watchForFileChanges: false,

  // e2e: {
  //   setupNodeEvents(on, config) {
  //     // implement node event listeners here
  //   },
  // },
    e2e: {
      baseUrl: 'http://localhost:5175',
      supportFile: false,
      setupNodeEvents(on, config) {
        

    },
  }
  

});
