class CheckoutPage{
  
    elements ={
      textAreaComments : () => cy.get('.form-control'),
      btnPlaceOrder : () => cy.get(':nth-child(7) > .btn')
    }
  
    addCommentToOrder(comment){
      this.elements.textAreaComments().clear().type(comment)
    }

    clickPlaceOrderButton(){
        this.elements.btnPlaceOrder().click()
    }
}module.exports = new CheckoutPage();