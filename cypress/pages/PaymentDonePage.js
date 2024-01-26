class PaymentDonePage{
  
    elements ={
      txtOrderPlaced : () => cy.get('[data-qa="order-placed"] > b'),
      btnContinue : () => cy.get('[data-qa="continue-button"]')
    }

    clickContinueButton(){
        this.elements.btnContinue().click()
    }
  
}module.exports = new PaymentDonePage();