class ProductDetailPage{
  
    elements ={
      quantityBox : () => cy.get('#quantity'),
      btnAddToCart : () => cy.get('.btn.btn-default.cart'),
      linkViewCart : () => cy.get('u')
    }
  
    addElementsInQuantityBox(quantity){
      this.elements.quantityBox().clear().type(quantity)
    }

    clickAddToCartButton(){
        this.elements.btnAddToCart().click()
        this.elements.linkViewCart().should('exist')
    }

    navigateToCartFromAddedMessage(){
        this.elements.linkViewCart().click()
    }
}module.exports = new ProductDetailPage();