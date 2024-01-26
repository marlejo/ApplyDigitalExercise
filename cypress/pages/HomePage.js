class HomePage{
  
  elements ={
    productContainer : () => cy.get('.col-sm-4'),
    linkSignupLogin : () => cy.get('.shop-menu > .nav > :nth-child(4) > a'),
    linkLogout : () => cy.get('.shop-menu > .nav > :nth-child(4) > a'),
    linkContactUs : () => cy.get(':nth-child(9) > a'),
    linkCart: () => cy.get('.shop-menu > .nav > :nth-child(3) > a')
  }

  ScrollDownHalfWayPage(){
    this.elements.productContainer().eq(20).scrollIntoView()
  }

  selectProduct(){
    this.elements.productContainer().eq(20).find('.choose').click()
  }

  navigateToLoginPage(){
    this.elements.linkSignupLogin().click()
  }

  clickLogout(){
    this.elements.linkLogout().click()
  }

  cickContactUs(){
    this.elements.linkContactUs().click()
  }

  clickCart(){
    this.elements.linkCart().click()
  }
}module.exports = new HomePage();