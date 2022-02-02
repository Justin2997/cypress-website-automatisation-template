Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

Cypress.on('fail', (err) => {
})

describe("UdeS reservation", () => {
    const url = "https://www.sport-plus-online.com/prmsmvc/Home/Loading/292/381"

    beforeEach(() => {
      cy.visit(url);
      cy.wait(3034);

      cy.get("#accept-all").first().click().wait(1000);

      cy.scrollTo("top");

      const username = Cypress.env('USERNAME');
      const password = Cypress.env('PASSWORD');

      cy.get("#CodeUtilisateur").type(username, { force: true });
      cy.get("#motPasse").type(password, { force: true });
      cy.get("button").first().click({force: true}).wait(1000);
    });

    it("Reserve a place", function () {
      cy.contains("menu").click({force: true}).wait(2500);
      cy.contains("Réservation de places").click({force: true}).wait(2500);
      cy.get("#selectmembres").select("1162311-1", {force: true}).wait(2500);

      cy.scrollTo("bottom");

      cy.get(".divider").eq(-2).nextUntil('input[type="checkbox"]').find('input[type="checkbox"]').first().click({force: true}).wait(2500);

      cy.get("#save").click({force: true}).wait(2500);
      cy.contains("Vos places ont été enregistrées avec succès").should("be.visible");
    });
  });
