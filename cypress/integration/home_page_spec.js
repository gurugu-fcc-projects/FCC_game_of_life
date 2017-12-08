describe("The Home Page", function() {
  it("successfully loads", function() {
    cy.visit("/");
  });
  it("adds Active class to a cell on first click", function() {
    cy.visit("/");

    cy
      .get(".cell-2-2")
      .click()
      .should("have.class", "active");
  });
  it("removes Active class from a cell on second click", function() {
    cy.visit("/");

    cy
      .get(".cell-2-2")
      .click()
      .click()
      .should("not.have.class", "active");
  });
  it("adds Active class to the cells a user drags mouse over", function() {
    cy.visit("/");

    cy
      .get(".cell-0-0")
      .trigger("mousedown")
      .should("have.class", "active");
    cy
      .get(".cell-0-1")
      .trigger("mouseover")
      .should("have.class", "active");
    cy
      .get(".cell-0-2")
      .trigger("mouseup")
      .should("have.class", "active");
  });
});
