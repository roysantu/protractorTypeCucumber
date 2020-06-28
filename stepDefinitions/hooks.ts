import {After, Before, HookScenarioResult, Status} from 'cucumber';
import { browser } from 'protractor';
import { stat } from 'fs';

Before(function () {
  // This hook will be executed before all scenarios
  browser.manage().window().maximize();
  console.log("Im in before Hook");
});

After( async function(scenario: HookScenarioResult) {
    console.log("Im in after Hook");
    if (scenario.result.status === Status.FAILED) {
        console.log("This scenario failed");
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    };
})