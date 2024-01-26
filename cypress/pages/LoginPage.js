class LoginPage{
    elements ={
        inputName : () => cy.get('[data-qa="signup-name"]'),
        inputEmail : () => cy.get('[data-qa="signup-email"]'),
        btnSignUp : () => cy.get('[data-qa="signup-button"]'),
        inputLoginEmail : () => cy.get('[data-qa="login-email"]'),
        inputLoginPassword : () => cy.get('[data-qa="login-password"]'),
        btnLogin : () => cy.get('[data-qa="login-button"]')
      }
    
      typeNewUserInformation(name, email){
        this.elements.inputName().clear().type(name)
        this.elements.inputEmail().clear().type(email)
      }

      clickSignupButton(){
        this.elements.btnSignUp().click()
      }

      Login(email, password){
        this.elements.inputLoginEmail().clear().type(email)
        this.elements.inputLoginPassword().clear().type(password)
        this.elements.btnLogin().click()
      }

}module.exports = new LoginPage();