import {Config} from 'protractor';
// import * as reporter from 'cucumber-html-reporter';
var reporter = require('cucumber-html-reporter');

export let config: Config = {
    // custom for cucumber
  framework: 'custom',
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  capabilities: {
    browserName: 'chrome'
  },
  
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  specs: [ './features/demo.feature' ],
  cucumberOpts: {
    // require step definitions
    format:"json:./Report/cucumber_report.json",
    onComplete: () => {
        var options = {
          theme: 'bootstrap',
          jsonFile: './Report/cucumber_report.json',
          output: './Report/cucumber_report.html',
          reportSuiteAsScenarios: true,
          scenarioTimestamp: true,
          launchReport: true,
          metadata: {
              "App Version":"0.3.2",
              "Test Environment": "STAGING",
              "Browser": "Chrome  54.0.2840.98",
              "Platform": "Windows 10",
              "Parallel": "Scenarios",
              "Executed": "Remote"
          }
      };
  
      reporter.generate(options);
    },
    require: [
      './stepDefinitions/*.js' // accepts a glob
    ]
  }

};