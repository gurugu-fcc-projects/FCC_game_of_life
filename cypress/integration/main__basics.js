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

    it("adds Alive class when clicking on Dead cell", () => {
      cy
        .get(".0-0")
        .click()
        .should("have.class", "alive");
    });
    it("removes Alive class when clicking on Alive cell", () => {
      cy
        .get(".0-0")
        .click()
        .click()
        .should("not.have.class", "alive");
    });
    it("adds Alive class on mouse drag on Dead cells", () => {
      cy
        .get(".0-0")
        .trigger("mousedown")
        .should("have.class", "alive");
      cy
        .get(".0-1")
        .trigger("mouseover")
        .should("have.class", "alive");
      cy
        .get(".0-2")
        .trigger("mouseover")
        .should("have.class", "alive");
    });
    it("removes Alive class on mouse drag on Alive cells", () => {
      cy
        .get(".0-0")
        .trigger("mousedown")
        .should("have.class", "alive");
      cy
        .get(".0-1")
        .trigger("mouseover")
        .should("have.class", "alive");
      cy
        .get(".0-2")
        .trigger("mouseover")
        .should("have.class", "alive");
      cy
        .get(".0-1")
        .trigger("mouseover")
        .should("not.have.class", "alive");
      cy
        .get(".0-0")
        .trigger("mousedown")
        .should("not.have.class", "alive");
    });
  });
});
