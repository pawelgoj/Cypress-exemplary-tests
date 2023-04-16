/// <reference types="cypress" />

export class HomePage {
  constructor() {
    this.signInButton =
      ".header.panel [href='https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/']";
    this.createAnAccountButton =
      ".header.panel [href='https://magento.softwaretestingboard.com/customer/account/create/']";
    this.cartButton = ".showcart";
  }
  
  clickCartButton() {
    cy.get(this.cartButton).click();
  }

  clickCreateAccountButton() {
    cy.get(this.createAnAccountButton).click();
  }

  clickSignInButton() {
    cy.get(this.clickSignInButton).click();
  }

  checkIsHomePage(url) {
    let currentUrl = cy.url();
    currentUrl.should("equal", url);
  }
}
