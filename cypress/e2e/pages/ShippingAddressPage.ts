/// <reference types="cypress" />

export class ShippingAddressPage {
  fieldEmailAddressLocator: string;
  fieldFirstNameLocator: string;
  fieldLastNameLocator: string;
  fieldCompanyLocator: string;
  fieldStreetAddress1: string;
  fieldStreetAddress2: string;
  fieldStreetAddress3: string;
  fieldCityLocator: string;
  stateProvinceSelectLocator: string;
  fieldZipCodeLocator: string;
  fieldCountryLocator: string;
  fieldPhoneNumber: string;
  radioButtonShippingMethodFixedLocator: string;
  radioButtonShippingmethodTableRateLocator: string;
  buttonNextLocator: string;

  constructor() {
    this.fieldEmailAddressLocator =
      "fieldset div.control > input#customer-email.input-text";
    this.fieldFirstNameLocator = "input[name='firstname']";
    this.fieldLastNameLocator = "input[name='lastname']";
    this.fieldCompanyLocator = "input[name='company']";
    this.fieldStreetAddress1 = "input[name='street[0]']";
    this.fieldStreetAddress2 = "input[name='street[1]']";
    this.fieldStreetAddress3 = "input[name='street[2]']";
    this.fieldCityLocator = "input[name='city']";
    this.stateProvinceSelectLocator = "select[name='region_id']";
    this.fieldZipCodeLocator = "input[name='postcode']";
    this.fieldCountryLocator = "select[name='country_id']";
    this.fieldPhoneNumber = "input[name='telephone']";
    this.radioButtonShippingMethodFixedLocator = "input.radio";
    this.radioButtonShippingmethodTableRateLocator =
      "input[name='ko_unique_2']";
    this.buttonNextLocator = "button.button";
  }

  fillForm(
    email: string,
    firstName: string,
    lastName: string,
    Company: string,
    streetAddress: string,
    city: string,
    zipCode: string,
    phone: string
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
