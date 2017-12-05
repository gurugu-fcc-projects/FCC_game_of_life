describe("My First Test", function() {
  it("Does not do much!", function() {
    expect(true).to.equal(true);
  });
  it("Does not do much indeed!", function() {
    expect(true).to.equal(false);
  });
});

describe("Visit a Page", function() {
  it("Visits the Kitchen Sink", function() {
    cy.visit("https://example.cypress.io");
  });
  it('finds the content "type"', function() {
    cy.visit("https://example.cypress.io");

    cy.contains("type");
  });
  it('finds the content "hype"', function() {
    cy.visit("https://example.cypress.io");

    cy.contains("hype");
  });
  it('clicks the link "type"', function() {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();
  });
  it("clicking 'type' navigates to a new url", function() {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should("include", "/commands/actions");
  });
  it("gets, types and asserts", function() {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should("include", "/commands/actions");

    // Get an input, type into it and verify that the value has been updated
    cy
      .get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
  });
});
