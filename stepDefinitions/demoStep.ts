import { Given, When, Then } from "cucumber";
import { calculatorPage } from "../pageObjects/calculatorPage";
import { browser } from "protractor";

let calc = new calculatorPage();

Given('Navigate to Calculator', async () => {
    // Write code here that turns the phrase above into concrete actions
    await browser.get('http://juliemr.github.io/protractor-demo');
  });

  When('Add two numbers {string} and {string}', async (string, string2) => {
    // Write code here that turns the phrase above into concrete actions
    await calc.firstElem.sendKeys(string);
    await calc.secondElem.sendKeys(string2);
    await calc.submitButton.click().then(() => {
        browser.sleep(3000);
    });
  });
  
  Then('The Output should displaye as {string}', async (string) => {
    // Write code here that turns the phrase above into concrete actions
    await calc.result.getText().then( (newResult) => {
        console.log(newResult);
    })
  });