describe("Review spec", () => {
  it("It visits the first page and then navigates to an individual movie page where the reviews can be written (only logged in users) and displayed  ", () => {
    cy.visit("http://localhost:3000");
    cy.contains("På bion just nu");
    cy.visit("http://localhost:3000/movies/5");
    cy.contains("För att skriva en recension behöver du logga in först!");
    cy.contains("Recensioner");
    cy.contains("Användare:");
    cy.contains("Betyg:");
  });

  it("It visits an individual movie page that doesnt have any reviews yet and displays the text 'Tyvärr så finns det inga recensioner att visa.'", () => {
    cy.visit("http://localhost:3000/movies/17");
    cy.contains("Tyvärr så finns det inga recensioner att visa.");
  });

  it("It logs in and visits an individual movie page where the user already wrote a review. Displays the text 'Du har redan skrivit recension för denna film.' and the user is unable to post a new review", () => {
    cy.visit("http://localhost:3000/movies/3");
    cy.get("span").contains("logga in").click();
    cy.get("#user").type(Cypress.env("username"));
    cy.get("#password").type(Cypress.env("password"));
    cy.get(".logInModal_continueButton__mf85A").click();
    cy.get("button").contains("Okej").click();
    cy.contains("Du har redan skrivit recension för denna film.");
    cy.contains("Skriv recension").should("not.exist");
    cy.contains("Recensioner");
    cy.contains("Användare: " + Cypress.env("username"));
  });

  it("It visits an individual movie page and logs in so a review can be written. Checks so a logged in user can post a review.", () => {
    cy.visit("http://localhost:3000/movies/15");
    cy.contains("För att skriva en recension behöver du logga in först!");
    cy.contains("Skriv recension").should("not.exist");
    cy.get("span").contains("logga in").click();
    cy.get("#user").type(Cypress.env("username"));
    cy.get("#password").type(Cypress.env("password"));
    cy.get(".logInModal_continueButton__mf85A").click();
    cy.contains("Skriv recension").should("exist");
    cy.contains(
      "För att skriva en recension behöver du logga in först!"
    ).should("not.exist");
    cy.get("button").contains("Okej").click();
    cy.get("button").contains("Skriv recension").click();
    cy.contains("Skicka din recension");
    cy.get("#reviews_closeIcon__WOiEj").click();
  });
});
