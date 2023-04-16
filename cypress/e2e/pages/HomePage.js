/// <reference types="cypress" />

export class HomePage {
  constructor() {
    this.signInButton =
      ".header.panel [href='https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/']";
    this.createAnAccountButton =
      ".header.panel [href='https://magento.softwaretestingboard.com/customer/account/create/']";
    this.cartButton = ".showcart";
    this.loggedInUser = ".header.panel .logged-in";
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

  checkIsHomePage(url) {
    let currentUrl = cy.url();
    currentUrl.should("equal", url);
  }

  checkUserIsLogged(name, lastName) {
    cy.get(this.loggedInUser).should("include.text", name);
    cy.get(this.loggedInUser).should("include.text", lastName);
  }
}
