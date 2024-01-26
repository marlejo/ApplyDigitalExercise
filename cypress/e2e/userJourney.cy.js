import HomePage from "../pages/HomePage"
import ProductDeatailPage from "../pages/ProductDeatailPage"
import CartPage from "../pages/CartPage"
import LoginPage from "../pages/LoginPage"
import SignupPage from "../pages/SignupPage"
import AccountCreatedPage from "../pages/AccountCreatedPage"
import CheckoutPage from "../pages/CheckoutPage"
import PaymentPage from "../pages/PaymentPage"
import PaymentDonePage from "../pages/PaymentDonePage"
import ContactUsPage from "../pages/ContactUsPage"

describe('User Flow', () => {
  let emailText = 'maon@mail.com'

  beforeEach(() => {
    cy.visit('https://automationexercise.com/')
  });
  it.only('ScrollDown and Select Product', () => {    
    HomePage.ScrollDownHalfWayPage()
    HomePage.selectProduct()
    cy.location('pathname').should('eq', '/product_details/23')
    
    ProductDeatailPage.addElementsInQuantityBox(30)
    ProductDeatailPage.clickAddToCartButton()
    ProductDeatailPage.navigateToCartFromAddedMessage()
    cy.location('pathname').should('eq', '/view_cart')

    CartPage.clickCheckoutButton()
    CartPage.clickRegisterLoginLink()
    cy.location('pathname').should('eq', '/login')

    LoginPage.typeNewUserInformation('marlejo', emailText)
    LoginPage.clickSignupButton()
    cy.location('pathname').should('eq', '/signup')

    SignupPage.enterAccountInformation()
    SignupPage.clickCreateAccountButton()
    cy.location('pathname').should('eq', '/account_created')

    AccountCreatedPage.clickContinueButton()
    cy.location('pathname').should('eq', '/')

    HomePage.clickCart()
    cy.location('pathname').should('eq', '/view_cart')

    CartPage.clickCheckoutButton()
    cy.location('pathname').should('eq', '/checkout')

    CheckoutPage.addCommentToOrder('Comment Added from visual studio and cypress')
    CheckoutPage.clickPlaceOrderButton()
    cy.location('pathname').should('eq', '/payment')

    PaymentPage.EnterPaymentInfo()
    PaymentPage.clickPayAndConfirmButton()
    PaymentDonePage.elements.txtOrderPlaced().should('exist')

    PaymentDonePage.clickContinueButton()
    cy.location('pathname').should('eq', '/')

    HomePage.clickLogout()
    cy.location('pathname').should('eq', '/login')

    LoginPage.Login(emailText, 'Password')
    cy.location('pathname').should('eq', '/')

    HomePage.cickContactUs()
    cy.location('pathname').should('eq', '/contact_us')

    ContactUsPage.EnterContactInfo()
    ContactUsPage.clickSubmitButton()
    ContactUsPage.elements.txtStatus().should('exist')
    ContactUsPage.clickHomeButton()
    cy.location('pathname').should('eq', '/')

    HomePage.clickLogout()
    cy.location('pathname').should('eq', '/login')
  })

  it('Login and Payment', () => {
    HomePage.navigateToLoginPage()
    LoginPage.Login(emailText, 'Password')
    cy.location('pathname').should('eq', '/')

    HomePage.ScrollDownHalfWayPage()
    HomePage.selectProduct()
    cy.location('pathname').should('eq', '/product_details/23')
    
    ProductDeatailPage.addElementsInQuantityBox(30)
    ProductDeatailPage.clickAddToCartButton()
    ProductDeatailPage.navigateToCartFromAddedMessage()
    cy.location('pathname').should('eq', '/view_cart')

    CartPage.clickCheckoutButton()
    cy.location('pathname').should('eq', '/checkout')

    CheckoutPage.addCommentToOrder('Comment Added from visual studio and cypress')
    CheckoutPage.clickPlaceOrderButton()
    cy.location('pathname').should('eq', '/payment')

    PaymentPage.EnterPaymentInfo()
    PaymentPage.clickPayAndConfirmButton()
    PaymentDonePage.elements.txtOrderPlaced().should('exist')

    PaymentDonePage.clickContinueButton()
    cy.location('pathname').should('eq', '/')

    HomePage.clickLogout()
    cy.location('pathname').should('eq', '/login')

    LoginPage.Login('maos@mail.com', 'Password')
    cy.location('pathname').should('eq', '/')

    HomePage.cickContactUs()
    cy.location('pathname').should('eq', '/contact_us')

    ContactUsPage.EnterContactInfo()
    ContactUsPage.clickSubmitButton()
    ContactUsPage.elements.txtStatus().should('exist')
    ContactUsPage.clickHomeButton()
    cy.location('pathname').should('eq', '/')

    HomePage.clickLogout()
    cy.location('pathname').should('eq', '/login')
  });
})