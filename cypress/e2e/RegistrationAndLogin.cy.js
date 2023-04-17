/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

import { HomePage } from "./pages/HomePage.js";
import { CreateAccountPage } from "./pages/CreateAccountPage.js";
import { AccountPage } from "./pages/AccountPage.js";
import { SignInPage } from "./pages/SignInPage.js";

describe("Registration and Login", () => {
  let name;
  let lastName;
  let email;
  let password;

  before(function () {
    name = faker.name.firstName();
    lastName = faker.name.lastName();
    email = faker.internet.email();
    password = faker.internet.password(20);
  });

  it("Register new account", () => {
    cy.visit("/");

    const homePage = new HomePage();
    homePage.clickCreateAccountButton();

    const createAccountPage = new CreateAccountPage();

    createAccountPage.insertFirstName(name);
    createAccountPage.insertLastName(lastName);
    createAccountPage.checkSignUpForNewsletter();
    createAccountPage.insertEmail(email);
    createAccountPage.insertPassword(password);
    createAccountPage.insertPasswordToConfirm(password);
    createAccountPage.clickCreateAnAccountButton();

    let accountPage = new AccountPage();
    accountPage.checkIsInAccountPage();
    accountPage.checkMyAccountInformation(name, lastName, email, true);
  });

  it("Login registered user", () => {
    /*
        The user must be registered before.
    */
    cy.visit("/");
    const homePage = new HomePage();
    homePage.clickSignInButton();

    const signInPage = new SignInPage();
    signInPage.insertEmail(email);
    signInPage.insertPassword(password);
    signInPage.clickSignInButton();
    homePage.checkUserIsLogged(name, lastName);
  });

  it("Add first item from 'Hot Sellers' to cart", () => {
    cy.visit("/");
    const homePage = new HomePage();
    homePage.addToCartProducts(1);
  });
});
