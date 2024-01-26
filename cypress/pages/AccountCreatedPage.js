class AccountCreatedPage{
    elements ={
        btnContinue : () => cy.get('[data-qa="continue-button"]')
      }

      clickContinueButton(){
        this.elements.btnContinue().click()
      }

}module.exports = new AccountCreatedPage();