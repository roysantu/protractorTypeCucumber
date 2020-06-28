import { ElementFinder, element, by } from "protractor";

export class calculatorPage {
    firstElem: ElementFinder;
    secondElem: ElementFinder;
    submitButton: ElementFinder;
    result: ElementFinder;
    resultTableRows: ElementFinder;

    constructor(){
        this.firstElem = element(by.model("first"));
        this.secondElem = element(by.css("input[ng-model='second']"));
        this.submitButton = element(by.buttonText("Go!"));
        this.result = element(by.css("h2[class='ng-binding']"));
        // this.resultTableRows = element.all(by.repeater("result in memory"));
    }
}