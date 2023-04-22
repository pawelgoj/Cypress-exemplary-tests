/// <reference types="cypress" />

export class AccountPage {
  infoLocator: string;
  contactInformation: string;
  newslettersInfo: string;
  infoMessage: string;
  messageInNewslettersInfo: string;

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
    url: String = "https://magento.softwaretestingboard.com/customer/account/"
  ) {
    let currentUrl = cy.url();
    currentUrl.should("equal", url);
  }

  checkMyAccountInformation(name: string, lastName: string, email: string, Newsletters: boolean) {
    //Newsletters- bool value
    cy.get(this.infoLocator).should(
      "include.text",
      this.infoMessage
    );
    cy.get(this.contactInformation).then((el) => {
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
