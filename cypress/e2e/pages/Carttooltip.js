/// <reference types="cypress" />

export class Carttooltip {
  constructor() {
    this.proceedToCheckoutLocator = "#top-cart-btn-checkout";
    this.productNameLocator =
      "[data-bind='attr: {href: product_url}, html: product_name']";
    this.productQuantityLocator = "input.item-qty";
  }
  checkProductName(name) {
    cy.get(this.productNameLocator).should("include.text", name);
  }

  checkProductQuantity(quantity) {
    cy.get(this.productQuantityLocator)
      .shadow("div.text-field-container")
      .find("div > div")
      .should("include.text", quantity);
  }

  clickProceedToCheckoutButton() {
    cy.get(this.proceedToCheckoutLocator).click();
  }
}
