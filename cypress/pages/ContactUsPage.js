class ContactUsPage{
  
    elements ={
      inputName : () => cy.get('[data-qa="name"]'),
      inputEmail : () => cy.get('[data-qa="email"]'),
      inputSubject : () => cy.get('[data-qa="subject"]'),
      inputMessage : () => cy.get('[data-qa="message"]'),
      btnSubmit : () => cy.get('[data-qa="submit-button"]'),
      txtStatus : () => cy.get('.status'),
      btnHome : () => cy.get('#form-section > .btn')
    }
  
    EnterContactInfo(){
      this.elements.inputName().clear().type('Mauriio')
      this.elements.inputEmail().clear().type('maos@mail.com')
      this.elements.inputSubject().clear().type('contacto de prueba')
      this.elements.inputMessage().clear().type('este es un mensage para un contacto de prueba desde cypress')
    }

    clickSubmitButton(){
        this.elements.btnSubmit().click()
    }

    clickHomeButton(){
        this.elements.btnHome().click()
    }
}module.exports = new ContactUsPage();