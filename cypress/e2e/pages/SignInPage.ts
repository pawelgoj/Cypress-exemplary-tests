/// <reference types="cypress" />

export class SignInPage {
  emailField: string;
  passwordField: string;
  signInButton: string;

  typingDelay: number;
  constructor() {
    this.emailField = "#email";
    this.passwordField = "[name='login[password]']";
    this.signInButton = ".login[name='send']";

    this.typingDelay = 50;
  }

  insertEmail(email: string) {
    let textField = cy.get(this.emailField).click();
    textField.type(email, { delay: this.typingDelay });
  }

  insertPassword(password: string) {
    let textField = cy.get(this.passwordField).click();
    textField.type(password, { delay: this.typingDelay });
  }

  clickSignInButton() {
    cy.get(this.signInButton).click();
  }
}
