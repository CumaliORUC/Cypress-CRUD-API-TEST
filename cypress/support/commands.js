// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("generateRandomPetId", () => {
    return Math.floor(100000 + Math.random() * 900000); // Random 6-digit number
  });

Cypress.Commands.add("createPet", (petId, petName, status) => {
    cy.request({
      method: "POST",
      url: "/pet",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        id: petId,
        name: petName,
        status: status,
      },
    });
  });
  
  Cypress.Commands.add("getPet", (petId) => {
    cy.request({
      method: "GET",
      url: `/pet/${petId}`,
      failOnStatusCode: false,
    });
  });
  
  Cypress.Commands.add("updatePet", (petId, updatedName, updatedStatus) => {
    cy.request({
      method: "PUT",
      url: "/pet",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        id: petId,
        name: updatedName,
        status: updatedStatus,
      },
    });
  });
  
  Cypress.Commands.add("deletePet", (petId) => {
    cy.request({
      method: "DELETE",
      url: `/pet/${petId}`,
    });
  });

