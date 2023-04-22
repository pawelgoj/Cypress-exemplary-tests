/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

import { HomePage } from "./pages/HomePage";
import { CreateAccountPage } from "./pages/CreateAccountPage";
import { AccountPage } from "./pages/AccountPage";
import { SignInPage } from "./pages/SignInPage";

describe("Registration and Login", () => {
  let name: string;
  let lastName: string;
  let email: string;
  let password: string;

  before(function () {
    name = faker.name.firstName();
    lastName = faker.name.lastName();
    email = faker.internet.email();
    password = faker.internet.password(20);
  });

  it("Register new account", () => {
    cy.visit("/");

    const homePage: HomePage = new HomePage();
    homePage.clickCreateAccountButton();

    const createAccountPage: CreateAccountPage = new CreateAccountPage();

    createAccountPage.insertFirstName(name);
    createAccountPage.insertLastName(lastName);
    createAccountPage.checkSignUpForNewsletter();
    createAccountPage.insertEmail(email);
    createAccountPage.insertPassword(password);
    createAccountPage.insertPasswordToConfirm(password);

    // To check response of server created.
    cy.intercept("POST", "/customer/account/createpost/").as("Alias");
    createAccountPage.clickCreateAnAccountButton();

    cy.wait("@Alias");
    cy.get("@Alias").then((res: any) => {
      expect(res.response.statusCode).to.equal(302);
    });

    let accountPage: AccountPage = new AccountPage();
    accountPage.checkIsInAccountPage();
    accountPage.checkMyAccountInformation(name, lastName, email, true);
  });

  it("Login registered user", () => {
    /*
        The user must be registered before.
    */
    cy.visit("/");
    const homePage: HomePage = new HomePage();
    homePage.clickSignInButton();

    const signInPage: SignInPage = new SignInPage();
    signInPage.insertEmail(email);
    signInPage.insertPassword(password);
    signInPage.clickSignInButton();
    homePage.checkUserIsLogged(name, lastName);
  });
});
