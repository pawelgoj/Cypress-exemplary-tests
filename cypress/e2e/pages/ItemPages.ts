/// <reference types="cypress" />

export class ItemPage {
  selectSizeLocator: string;
  selectColorLocator: string;
  selectQuantityLocator: string;
  addToCartLocator: string;
  cartButtonLocator: string;

  constructor() {
    this.selectSizeLocator = "[aria-labelledby='option-label-size-143']";
    this.selectColorLocator = '[aria-labelledby="option-label-color-93"]';
    this.selectQuantityLocator = "#qty";
    this.addToCartLocator = "#product-addtocart-button";
    this.cartButtonLocator = "a.action.showcart > span.counter.qty";
  }

  selectColor(colorNumber: number) {
    cy.get(this.selectColorLocator, { timeout: 30000 })
      .find(`div:nth-child(${colorNumber})`)
      .click();
  }

  selectSize(sizeNumber: number) {
    cy.get(this.selectSizeLocator, { timeout: 30000 })
      .find(`div:nth-child(${sizeNumber})`, { timeout: 30000 })
      .click();
  }

  insertQuantity(quantity: number) {
    const _quantity: string = String(quantity);
    cy.get(this.selectQuantityLocator, { timeout: 30000 })
      .click()
      .clear()
      .type(_quantity);
  }

  clickAddToCartButton() {
    cy.get(this.addToCartLocator, { timeout: 30000 }).click();
  }

  clickCartButton() {
    cy.get(this.cartButtonLocator, { timeout: 100000 }).should(
      "not.have.class",
      "_block-content-loading"
    );

    // waiting that Adding... not present in button text.
    cy.get(this.addToCartLocator)
      .find("span", { timeout: 100000 })
      .should('not.contain.text', 'Adding...');

    cy.get(this.cartButtonLocator, { timeout: 100000 }).click({ force: true });
  }
}
