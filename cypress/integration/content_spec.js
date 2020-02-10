describe('Check content', function() {
    it("Contains text", function() {
      cy.visit("http://localhost:3000/")
      cy.title().should("eq", "Two Fish")
      
    })
  })
  