describe("Gym reservation", () => {
    const url = Cypress.env("url");

    beforeEach(() => {
      cy.visit(url);
      cy.wait(50000);
    });

    it("Reserve a place", function () {
      cy.contains("31").last().click().wait(500);

      cy.contains("Continuer").wait(2500);
    });
  });
