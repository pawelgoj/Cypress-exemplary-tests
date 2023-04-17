/// <reference types="cypress" />

export class ItemPage {
  constructor() {
    this.selectSizeLocator =
      "[aria-labelledby='option-label-size-143']";
    this.selectColorLocator = '[aria-labelledby="option-label-color-93"]';
    this.selectQuantityLocator = "#qty";
    this.addToCartLocator = "#product-addtocart-button";
    this.cartButtonLocator = ".action.showcart"
  }

  selectColor(colorNumber) {
    cy.get(this.selectColorLocator)
      .find(`div:nth-child(${colorNumber})`)
      .click();
  }

  selectSize(sizeNumber) {
    cy.get(this.selectSizeLocator, { timeout: 30000 })
      .find(`div:nth-child(${sizeNumber})`, { timeout: 30000 })
      .click();
  }

  insertQuantity(quantity) {
    cy.get(this.selectQuantityLocator).click().clear().type(quantity);
  }

  clickAddToCartButton() {
    cy.get(this.addToCartLocator).click();
  }

  clickCartButton() {
    cy.get(this.cartButtonLocator).click();
  }
}
