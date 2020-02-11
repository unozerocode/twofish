describe('Check content', function() {
  
    it("Contains text", function() {
     // cy.log("Beginnig test")
      cy.visit("/")
      cy.title().should("eq", "Two Fish")
      
    })
  })
  