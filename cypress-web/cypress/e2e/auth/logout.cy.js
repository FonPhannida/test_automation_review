describe.only("Logout Test", () => {
  beforeEach(() => {
    cy.fixture("env_data").then(function (data) {
      this.data = data;
    });
  });

  it("should logout from the website", function () {
    // Visit the website
    // cy.get(this.data.navigation.login_nav).click();
    // cy.get(this.data.navigation.login_nav).should("be.visible");
    // cy.get(this.data.navigation.email_field).type(this.data.login.email);
    // cy.get(this.data.navigation.password_field).type(this.data.login.password);
    // cy.get(this.data.navigation.login_submit).click();
    // cy.contains("Logged in as test").should("be.visible");

    //try to use the login command
    cy.login(this.data.login.email, this.data.login.password);
    cy.contains("Logged in as test").should("be.visible");
    cy.contains("Logout").should("be.visible");
    cy.contains(this.data.logout.logout_button_text).should("be.visible");
    cy.get(this.data.logout.logout_button).click();
    cy.contains(this.data.logout.logout_message).should("be.visible");
  });
});
