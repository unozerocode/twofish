describe('Check content', function() {
  
    it("Contains text", function() {
     // cy.log("Beginnig test")
      cy.visit("/")
      cy.title().should("eq", "Two Fish")
      
    })

    it("Contains checkout buttons", function() {
      cy.get('#checkout-button-sku_GiXF53oqGxy9zw')
      cy.get('#checkout-button-sku_GiWwhPDP6kthBN')
   //   cy.contains("Pay with card")
    })
  })
  