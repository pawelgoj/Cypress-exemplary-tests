/// <reference types="cypress" />

export class ReviewAndPaymentsPage {
  placeOrderButtonLocator: string;
  shipToInfoLocator: string;

  constructor() {
    this.placeOrderButtonLocator = "button.action.primary.checkout";
    this.shipToInfoLocator = ".ship-to div.shipping-information-content";
  }

  checkDataShipTo(name: string, lastName: string, address: string) {
    cy.get(this.shipToInfoLocator)
      .should("include.text", name)
      .should("include.text", lastName)
      .should("include.text", address);
  }

  clickButtonPlaceOrder() {
    cy.get(this.placeOrderButtonLocator).click();
  }
}
