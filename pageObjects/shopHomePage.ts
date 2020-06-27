import { ElementFinder, element, by } from "protractor";

export class shopHomePage {
    shopName: ElementFinder;
    categoryList: ElementFinder;

    constructor(){
        this.shopName = element(by.css(".my-4"));
    }
}