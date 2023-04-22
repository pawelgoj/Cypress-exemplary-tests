/// <reference types="cypress" />

export class HomePage {
  signInButton: string;
  createAnAccountButton: string;
  cartButton: string;
  productNameLocator: string;
  firstColorLocator: string;
  buttonInHotSellersList: string;
  listOfHotSellersProducts: string;
  loggedInUser: string;

  constructor() {
    this.signInButton =
      ".header.panel [href='https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/']";
    this.createAnAccountButton =
      ".header.panel [href='https://magento.softwaretestingboard.com/customer/account/create/']";
    this.cartButton = ".showcart";
    this.loggedInUser = ".header.panel .logged-in";
    this.listOfHotSellersProducts = ".product-items";
    this.buttonInHotSellersList = 'button[title="Add to Cart"]';
    this.firstColorLocator = "[option-id='50']";
    this.productNameLocator = ".product-item-link";
  }

  clickCartButton() {
    cy.get(this.cartButton).click();
  }

  clickCreateAccountButton() {
    cy.get(this.createAnAccountButton).click();
  }

  clickSignInButton() {
    cy.get(this.signInButton).click();
  }

  checkIsHomePage(url: string) {
    let currentUrl = cy.url();
    currentUrl.should("equal", url);
  }

  checkUserIsLogged(name: string, lastName: string) {
    cy.get(this.loggedInUser).should("include.text", name);
    cy.get(this.loggedInUser).should("include.text", lastName);
  }
  addToCartProduct(nrProductInList: number) {
    cy.get(this.listOfHotSellersProducts)
      .find(`li:nth-child(${nrProductInList}) > .product-item-info`)
      .find(this.firstColorLocator, { timeout: 30000 })
      .scrollIntoView();

    cy.get(this.listOfHotSellersProducts)
      .trigger("mouseover")
      .find(this.buttonInHotSellersList, { timeout: 30000 })
      .should("be.visible");

    cy.get(this.listOfHotSellersProducts)
      .find(`li:nth-child(${nrProductInList}) > .product-item-info`)
      .find(this.productNameLocator);

    cy.get(this.listOfHotSellersProducts)
      .find(`li:nth-child(${nrProductInList}) > .product-item-info`)
      .trigger("mouseover")
      .find(this.buttonInHotSellersList, { timeout: 30000 })
      .click("bottomLeft", { force: true });
  }
}
