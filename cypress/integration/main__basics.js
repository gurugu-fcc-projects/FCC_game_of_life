describe("Game of Life app", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000");
  });
  it("has correct title", () => {
    cy.visit("/");
    cy.title().should("be", "Game of Life by GuRuGuMaWaRu");
  });
});
