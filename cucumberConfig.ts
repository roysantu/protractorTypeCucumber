import {Config} from 'protractor';

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
    require: [
      './stepDefinitions/*.js' // accepts a glob
    ]
  }

};