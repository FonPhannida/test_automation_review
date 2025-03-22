describe("Search Product Test", () => {
  before(() => {
    // Load the login data from the fixture
    cy.fixture("env_data").then(function (data) {
      this.data = data;
    });
  });

  it("should search for a product in the search field", function () {
    // Visit the website
    cy.visit(this.data.url.correct_url);
    cy.get(this.data.navigation.products).click();
    cy.get(this.data.navigation.search_field).should("be.visible");
    cy.get(this.data.navigation.search_field).type(this.data.text.product_name);
    cy.get(this.data.navigation.search_button)
      .should("be.visible")
      .and("be.enabled");
    cy.get(this.data.navigation.search_button).click();
    cy.contains(this.data.text.product_name).should("be.visible");
    cy.get(this.data.navigation.search_result)
      .should("be.visible")
      .and("contain.text", this.data.text.product_name);
    cy.get(this.data.navigation.page_title)
      .should("be.visible")
      .and("contain.text", this.data.text.product_search_page);
  });
});
