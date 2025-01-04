describe("Pet API Tests with Random Pet ID", () => {
    let petId;
    const pet_Name = "Pamuk";
    const update_Name = "Boncuk";
    const status_Available = "available";
    const status_Sold = "sold";
  
    before(() => {
      // Generate a random 6-digit Pet ID
      cy.generateRandomPetId().then((id) => {
        petId = id;
      });
    });
  
    it("Create a Pet (POST /pet)", () => {
      cy.createPet(petId, pet_Name, status_Available).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(petId);
        expect(response.body.name).to.eq(pet_Name);
        expect(response.body.status).to.eq(status_Available);
      });
    });
  
    it("Retrieve a Pet by ID (GET /pet/{petId})", () => {
      cy.getPet(petId).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(petId);
        expect(response.body.name).to.eq(pet_Name);
        expect(response.body.status).to.eq(status_Available);
      });
    });
  
    it("Update a Pet (PUT /pet)", () => {
      cy.updatePet(petId, update_Name, status_Sold).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(petId);
        expect(response.body.name).to.eq(update_Name);
        expect(response.body.status).to.eq(status_Sold);
      });
    });
  
    it("Delete a Pet (DELETE /pet/{petId})", () => {
      cy.deletePet(petId).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq(`${petId}`);
      });
    });
  
    it("Retrieve a Deleted Pet (GET /pet/{petId})", () => {
      cy.getPet(petId).then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body.message).to.eq("Pet not found");
      });
    });
  });