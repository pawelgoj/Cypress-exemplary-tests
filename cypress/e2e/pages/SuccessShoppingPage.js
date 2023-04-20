/// <reference types="cypress" />


export class SuccessShoppingPage {
  constructor() {
    this.titleOnPageLocator = "h1.page-title > span";
  }

  checkTitleInformationIsSuccess(text = "Thank you for your purchase!") {
    cy.get(this.titleOnPageLocator).should("contains.text", text);
  }

  checkUrl(
    url = "https://magento.softwaretestingboard.com/checkout/onepage/success/"
  ) {
    let currentUrl = cy.url();
    currentUrl.should("equal", url);
  }
}
