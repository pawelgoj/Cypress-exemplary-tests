import { faker } from "@faker-js/faker";

import { HomePage } from "./pages/HomePage.js";
import { CreateAccountPage } from "./pages/CreateAccountPage.js";
import { AccountPage } from "./pages/AccountPage.js";

describe("template spec", () => {
  it("Register new account", () => {
    const page_url = "https://magento.softwaretestingboard.com/";
    cy.visit(page_url);

    const homePage = new HomePage();
    homePage.checkIsHomePage(page_url);
    homePage.clickCreateAccountButton();

    const createAccountPage = new CreateAccountPage();
    const name = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const password = faker.internet.password(20);

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

  it("Log in registered user", () => {});
});
