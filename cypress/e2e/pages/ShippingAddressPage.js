/// <reference types="cypress" />

export class ShippingAddressPage {
  constructor() {
    this.fieldEmailAddressLocator = "#customer-email[aria-required='true']";
    this.fieldFirstNameLocator = "#login-email";
    this.fieldLastNameLocator = "input[name='lastname']";
    this.fieldCompanyLocator = "input[name='company']";
    this.fieldStreetAddress1 = "input[name='street[0]']";
    this.fieldStreetAddress2 = "input[name='street[1]']";
    this.fieldStreetAddress3 = "input[name='street[2]']";
    this.fieldCityLocator = "select[name='City']";
    this.stateProvinceSelectLocator = "select[name='region_id']";
    this.fieldZipCodeLocator = "input[name='postcode']";
    this.fieldCountryLocator = "select[name='country_id']";
    this.fieldPhoneNumber = "input[name='telephone']";
    this.radioButtonShippingMethodFixedLocator = "input[name='ko_unique_1']";
    this.radioButtonShippingmethodTableRateLocator =
      "input[name='ko_unique_2']";
    this.buttonNextLocator = "button.button";
  }

  fillForm(
    email,
    firstName,
    lastName,
    Company,
    streetAddress,
    city,
    zipCode,
    phone
  ) {
    cy.get(this.fieldEmailAddressLocator).type(email);
    cy.get(this.fieldFirstNameLocator).type(firstName);
    cy.get(this.fieldLastNameLocator).type(lastName);
    cy.get(this.fieldCompanyLocator).type(Company);
    cy.get(this.fieldStreetAddress1).type(streetAddress);
    cy.get(this.fieldCityLocator).type(city);
    // select state province
    cy.get(this.stateProvinceSelectLocator).select("Alabama");

    cy.get(this.fieldZipCodeLocator).type(zipCode);

    cy.get(this.fieldCountryLocator).select("United States");

    cy.get(this.fieldPhoneNumber).type(phone);

    cy.get(this.radioButtonShippingMethodFixedLocator).check();

    cy.get(this.buttonNextLocator).click();
  }
}
