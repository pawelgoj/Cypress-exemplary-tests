/// <reference types="cypress" />

export class ReviewAndPaymentsPage {
  constructor() {
    this.placeOrderButtonLocator = "button.action.primary.checkout";
    this.shipToInfoLocator = ".ship-to div.shipping-information-content";
  }

  checkDataShipTo(name, lastName, address) {
    cy.get(this.shipToInfoLocator)
      .should("include.text", name)
      .should("include.text", lastName)
      .should("include.text", address);
  }

  clickButtonPlaceOrder() {
    cy.get(this.placeOrderButtonLocator).click();
  }
}
