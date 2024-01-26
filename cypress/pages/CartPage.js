class CartPage{
  
    elements ={
      btnProceedToCheckout : () => cy.get('.col-sm-6 > .btn'),
      linkRegistLogin : () => cy.get('.modal-body > :nth-child(2) > a > u')
    }
  
    clickCheckoutButton(){
      this.elements.btnProceedToCheckout().click()
    }

    clickRegisterLoginLink(){
        this.elements.linkRegistLogin().click()
    }
}module.exports = new CartPage();