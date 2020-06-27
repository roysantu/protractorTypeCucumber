import {browser, element, by} from 'protractor';
import { shopHomePage } from './pageObjects/shopHomePage';

describe('protractor with typescript typings', () => {
  let shopHome = new shopHomePage();

    beforeEach(() => {
      browser.get('https://rahulshettyacademy.com/angularpractice/shop');
    });

    it("UI Verification of Shope Home Page", () => {
      shopHome.shopName.getText().then((shopNameText) =>{
        console.log(shopNameText);
      });
    } );
  
    /*
    it('should greet the named user', () => {
      element(by.model('yourName')).sendKeys('Julie');
      let greeting = element(by.binding('yourName'));
      expect(greeting.getText()).toEqual('Hello Julie!');
    });
  
    it('should list todos', function() {
      let todoList = element.all(by.repeater('todo in todoList.todos'));
      expect(todoList.count()).toEqual(2);
      expect(todoList.get(1).getText()).toEqual('build an AngularJS app');
    });
    */
  });