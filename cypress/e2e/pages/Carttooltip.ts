/// <reference types="cypress" />

export class Carttooltip {
  proceedToCheckoutLocator: string;
  productNameLocator: string;
  productQuantityLocator: string;

  constructor() {
    this.proceedToCheckoutLocator = "#top-cart-btn-checkout";
    this.productNameLocator =
      "[data-bind='attr: {href: product_url}, html: product_name']";
    this.productQuantityLocator = "input.item-qty";
  }
  checkProductName(name: string) {
    cy.get(this.productNameLocator).should("include.text", name);
  }

  checkProductQuantity(quantity: number) {
    cy.get(this.productQuantityLocator).should("have.value", quantity);
  }

  clickProceedToCheckoutButton() {
    cy.get(this.proceedToCheckoutLocator).click();
  }
}
