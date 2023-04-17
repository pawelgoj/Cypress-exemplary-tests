/// <reference types="cypress" />

import { HomePage } from "./pages/HomePage.js";
import { ItemPage } from "./pages/ItemPages.js";
import { Carttooltip } from "./pages/Carttooltip.js";

describe("Buy products", () => {
  it("Add first item from 'Hot Sellers' to cart", () => {
    cy.visit("/");
    const homePage = new HomePage();
    homePage.addToCartProduct(1);

    const itemPage = new ItemPage();
    const productQuantity = 2;
    const productName = "Radiant Tee";

    itemPage.selectSize(1);
    itemPage.selectColor(1);
    itemPage.insertQuantity(productQuantity);
    itemPage.clickAddToCartButton();
    itemPage.clickCartButton();
    const carttooltip = new Carttooltip();
    carttooltip.checkProductName(productName);
    carttooltip.checkProductQuantity(productQuantity);
  });
});
