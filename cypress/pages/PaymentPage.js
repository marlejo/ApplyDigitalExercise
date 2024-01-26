class PaymentPage{
  
    elements ={
      inputNameOnCard : () => cy.get('[data-qa="name-on-card"]'),
      inputCardNumber : () => cy.get('[data-qa="card-number"]'),
      inputCvc : () => cy.get('[data-qa="cvc"]'),
      inputMonthExpiration : () => cy.get('[data-qa="expiry-month"]'),
      inputYearExpiration : () => cy.get('[data-qa="expiry-year"]'),
      btnPayAndConfirm : () => cy.get('[data-qa="pay-button"]')
    }
  
    EnterPaymentInfo(){
      this.elements.inputNameOnCard().clear().type('Mauricio Ramirez')
      this.elements.inputCardNumber().clear().type('123456789')
      this.elements.inputCvc().clear().type('123')
      this.elements.inputMonthExpiration().clear().type('05')
      this.elements.inputYearExpiration().clear().type('2030')
      
    }

    clickPayAndConfirmButton(){
        this.elements.btnPayAndConfirm().click()
    }
}module.exports = new PaymentPage();