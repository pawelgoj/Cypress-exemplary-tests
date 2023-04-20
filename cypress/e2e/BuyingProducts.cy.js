/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

import { HomePage } from "./pages/HomePage.js";
import { ItemPage } from "./pages/ItemPages.js";
import { Carttooltip } from "./pages/Carttooltip.js";
import { ShippingAddressPage } from "./pages/ShippingAddressPage.js";
import { ReviewAndPaymentsPage } from "./pages/ReviewAndPaymentsPage.js";
import { SuccessShoppingPage } from "./pages/SuccessShoppingPage.js";


describe("Buy products", () => {
  it("Add first item from 'Hot Sellers' to cart", () => {
    cy.visit("/");
    const homePage = new HomePage();
    homePage.addToCartProduct(1);

    const itemPage = new ItemPage();
    const productQuantity = 2;
    const productName = "Radiant Tee";

    itemPage.selectSize(1);
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    itemPage.selectColor(1);
    itemPage.insertQuantity(productQuantity);
    itemPage.clickAddToCartButton();
    itemPage.clickCartButton();

    const carttooltip = new Carttooltip();
    carttooltip.checkProductName(productName);
    carttooltip.checkProductQuantity(productQuantity);
    carttooltip.clickProceedToCheckoutButton();

    // generate random data.
    const firsName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const streetAddress = faker.address.streetAddress();
    const company = faker.company.name();
    const phone = faker.phone.number();
    const city = faker.address.city();
    const zipCode = faker.address.zipCode();

    const shippingAddressPage = new ShippingAddressPage();

    shippingAddressPage.fillForm(
      email,
      firsName,
      lastName,
      company,
      streetAddress,
      city,
      zipCode,
      phone
    );

    const reviewAndPaymentsPage = new ReviewAndPaymentsPage();
    reviewAndPaymentsPage.checkDataShipTo(firsName, lastName, streetAddress);
    reviewAndPaymentsPage.clickButtonPlaceOrder();

    const successShoppingPage = new SuccessShoppingPage();
    successShoppingPage.checkUrl();
    successShoppingPage.checkTitleInformationIsSuccess();
  });
});
