class SignupPage{
    elements ={
        mrGenderRadioBtn : () => cy.get('#id_gender1'),
        inputPassword : () => cy.get('[data-qa="password"]'),
        selectDayBirth : () => cy.get('[data-qa="days"]'),
        selectMonthBirth : () => cy.get('[data-qa="months"]'),
        selectYearBirth : () => cy.get('[data-qa="years"]'),
        inputFirstName : () => cy.get('[data-qa="first_name"]'),
        inputLastName : () => cy.get('[data-qa="last_name"]'),
        inputAddress : () => cy.get('[data-qa="address"]'),
        selectCountry : () => cy.get('[data-qa="country"]'),
        inputState : () => cy.get('[data-qa="state"]'),
        inputCity : () => cy.get('[data-qa="city"]'),
        inputZipcode : () => cy.get('[data-qa="zipcode"]'),
        inputPhone : () => cy.get('[data-qa="mobile_number"]'),
        btnCrateAccount : () => cy.get('[data-qa="create-account"]')
      }
    
      enterAccountInformation(){
        this.elements.mrGenderRadioBtn().click()
        this.elements.inputPassword().clear().type('Password')
        this.elements.selectDayBirth().select(25)
        this.elements.selectMonthBirth().select('May')
        this.elements.selectYearBirth().select('1990')
        this.elements.inputFirstName().clear().type('Mauricio')
        this.elements.inputLastName().clear().type('Ramirez')
        this.elements.inputAddress().clear().type('Calle 50 #31-02')
        this.elements.selectCountry().select('Canada')
        this.elements.inputState().clear().type('Quindio')
        this.elements.inputCity().clear().type('Armenia')
        this.elements.inputZipcode().clear().type('630003')
        this.elements.inputPhone().clear().type('3007878477')
      }

      clickCreateAccountButton(){
        this.elements.btnCrateAccount().click()
      }

}module.exports = new SignupPage();