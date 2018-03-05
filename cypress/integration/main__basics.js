describe("Game of Life app", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000");
  });

  context("Layout", () => {
    beforeEach(function() {
      cy.visit("http://localhost:3000");
    });

    it("has correct title", () => {
      cy.title().should("be", "Game of Life by GuRuGuMaWaRu");
    });
  });

  context("Basic functionality", () => {
    beforeEach(function() {
      cy.visit("http://localhost:3000");
    });

    it("adds Alive class to a Dead cell on click", () => {
      cy
        .get(".0-0")
        .click()
        .should("have.class", "alive");
    });
    it("removes Alive class from an Alive cell on click", () => {
      cy
        .get(".0-0")
        .click()
        .click()
        .should("not.have.class", "alive");
    });
  });
});
