/// <reference types="cypress" />

export class CreateAccountPage {
  constructor() {
    this.firstName = "#firstname";
    this.lastName = "#lastname";
    this.signUpForNewsletter = "#is_subscribed";
    this.email = "#email_address";
    this.password = "#password";
    this.confirmPassword = "#password-confirmation";
    this.createAnAccountButton = ".submit";

    this.typingDelay = 50;
  }

  insertFirstName(name) {
    let textField = cy.get(this.firstName).click();
    textField.type(`${name}`, { delay: this.typingDelay });
  }

  insertLastName(lastName) {
    let textField = cy.get(this.lastName).click();
    textField.type(lastName, { delay: this.typingDelay });
  }

  checkSignUpForNewsletter() {
    cy.get(this.signUpForNewsletter).check();
  }

  insertEmail(email) {
    let textField = cy.get(this.email).click();
    textField.type(email, { delay: this.typingDelay });
  }

  insertPassword(password) {
    let textField = cy.get(this.password).click();
    textField.type(password, { delay: this.typingDelay });
  }

  insertPasswordToConfirm(password) {
    let textField = cy.get(this.confirmPassword).click();
    textField.type(password, { delay: this.typingDelay });
  }

  clickCreateAnAccountButton() {
    cy.get(this.createAnAccountButton).click();
  }
}
