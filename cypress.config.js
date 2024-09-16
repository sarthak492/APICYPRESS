module.exports = {
  e2e: {
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "reporter": "cypress-mochawesome-reporter",
    "reporterOptions": {
      "charts": true,
      "reportPageTitle": "Cypress Report",
      "embeddedScreenshots": true,
      "inlineAssets": true
    }

  },
},
{
  "chromeOptions": {
    "args": [
      "--incognito"
    ]
  }
}
// {
//   "reporter": "cypress-mochawesome-reporter",
//   "reporterOptions": {
//     "charts": true,
//     "reportPageTitle": "Cypress Report",
//     "embeddedScreenshots": true,
//     "inlineAssets": true
//   }
// }

