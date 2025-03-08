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
import login_data from "../fixtures/login_data.json";
import 'cypress-xpath';

// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("login", (email, password) => {
  cy.visit(login_data.url.correct_url);
//   cy.xpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a').click();
//   cy.get("#email").type(login_data.login.email);
//   cy.get("#password").type(login_data.login.password);
//   cy.get("#submit").click();
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

