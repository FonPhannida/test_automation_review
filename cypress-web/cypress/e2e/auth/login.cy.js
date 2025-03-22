///<reference types="cypress" />
describe.only("Login Test", () => {
  beforeEach(() => {
    cy.fixture("env_data").then(function (data) {
      this.data = data;
    });
    cy.visit("https://www.automationexercise.com");
  });

  it("open browser correctly", () => {
    cy.get(".shop-menu > .nav > :nth-child(1) > a").should("be.visible");
  });

  it("login correctly", function() {
    cy.get(".shop-menu > .nav > :nth-child(4) > a").click();
    cy.get(".login-form > h2").should("be.visible");
    cy.get('[data-qa="login-email"]').type(this.data.login.email);
    cy.get('[data-qa="login-password"]').type(this.data.login.password);
    cy.get('[data-qa="login-button"]').click();
    cy.contains('Logged in as test').should('be.visible');
  });
});
