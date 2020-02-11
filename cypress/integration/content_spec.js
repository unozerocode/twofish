describe('Check content', function() {
  
    it("Contains text", function() {
     // cy.log("Beginnig test")
      cy.visit("/")
      cy.title().should("eq", "Two Fish")
      
    })

    it("Handles checkout", function() {
      cy.get('#checkout-button-sku_GiXF53oqGxy9zw').click()
      cy.contains("Pay with card")
    })
  })
  