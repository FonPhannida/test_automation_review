// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import envData from "../fixtures/env_data.json";
import "cypress-xpath";
beforeEach(function () {
  cy.fixture("env_data").then((data) => {
    cy.wrap(data).as("envData"); // Save fixture data as an alias
  });
});
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("login", (email, password) => {
  cy.get("@envData").then((data) => {
    cy.visit(data.url.correct_url);
    cy.get(data.navigation.login_nav).click();
    cy.get(data.navigation.login_nav).should("be.visible");
    cy.get(data.navigation.email_field).type(email);
    cy.get(data.navigation.password_field).type(password);
    cy.get(data.navigation.login_submit).click();
  });
});
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
