/// <reference types="cypress" />

export class AccountPage {
  constructor() {
    this.infoLocator =
      "[data-bind='html: $parent.prepareMessageForHtml(message.text)']";
    this.contactInformation = ".box-information > .box-content p";
    this.newslettersInfo = ".box-newsletter p";

    this.infoMessage = "Thank you for registering with Main Website Store.";
    this.messageInNewslettersInfo =
      'You are subscribed to "General Subscription".';
  }

  checkIsInAccountPage(
    url = "https://magento.softwaretestingboard.com/customer/account/"
  ) {
    let currentUrl = cy.url();
    currentUrl.should("equal", url);
  }

  checkMyAccountInformation(name, lastName, email, Newsletters) {
    //Newsletters- bool value
    cy.get(this.infoLocator).should(
      "include.text",
      this.infoMessage
    );
    const text = cy.get(this.contactInformation).then((el) => {
      cy.log(el.text());
      assert.include(el.text(), name);
      assert.include(el.text(), lastName);
      assert.include(el.text(), email);
    });

    if (Newsletters === true) {
      cy.get(this.newslettersInfo).should(
        "include.text",
        this.messageInNewslettersInfo
      );
    } else {
      cy.get(this.newslettersInfo).should(
        "not.include.text",
        this.messageInNewslettersInfo
      );
    }
  }
}
