/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

import { HomePage } from "./pages/HomePage";
import { ItemPage } from "./pages/ItemPages";
import { Carttooltip } from "./pages/Carttooltip";
import { ShippingAddressPage } from "./pages/ShippingAddressPage";
import { ReviewAndPaymentsPage } from "./pages/ReviewAndPaymentsPage";
import { SuccessShoppingPage } from "./pages/SuccessShoppingPage";


describe("Buy products", () => {
  it("Add first item from 'Hot Sellers' to cart", () => {
    cy.visit("/");
    const homePage: HomePage = new HomePage();
    homePage.addToCartProduct(1);

    const itemPage: ItemPage = new ItemPage();
    const productQuantity: number = 2;
    const productName: string = "Radiant Tee";

    itemPage.selectSize(1);
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    itemPage.selectColor(1);
    itemPage.insertQuantity(productQuantity);
    itemPage.clickAddToCartButton();
    itemPage.clickCartButton();

    const carttooltip: Carttooltip = new Carttooltip();
    carttooltip.checkProductName(productName);
    carttooltip.checkProductQuantity(productQuantity);
    carttooltip.clickProceedToCheckoutButton();

    // generate random data.
    const firsName: string = faker.name.firstName();
    const lastName: string = faker.name.lastName();
    const email: string = faker.internet.email();
    const streetAddress: string = faker.address.streetAddress();
    const company: string = faker.company.name();
    const phone: string = faker.phone.number();
    const city: string = faker.address.city();
    const zipCode: string = faker.address.zipCode();

    const shippingAddressPage: ShippingAddressPage = new ShippingAddressPage();

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

    const reviewAndPaymentsPage: ReviewAndPaymentsPage = new ReviewAndPaymentsPage();
    reviewAndPaymentsPage.checkDataShipTo(firsName, lastName, streetAddress);
    reviewAndPaymentsPage.clickButtonPlaceOrder();

    const successShoppingPage: SuccessShoppingPage = new SuccessShoppingPage();
    successShoppingPage.checkUrl();
    successShoppingPage.checkTitleInformationIsSuccess();
  });
});
