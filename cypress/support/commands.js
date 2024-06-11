// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
import { LOG_IN_FORM, FEATURES_ITEMS, PRODUCT, POPUP, SHOPING_CAR, HEADER, SUBMIT_CARD_FORM, SUCCESS_SCREEN, SIGNUP_FORM, SUBMIT_USER_FORM, CONTACT_US_SCREEN } from '../page/pageObjects'

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('signin', (email, password) => { 
    cy.get(LOG_IN_FORM.email_field).type(email)
    cy.get(LOG_IN_FORM.password_field).type(password)
    cy.get(LOG_IN_FORM.login_button).click()
 })

Cypress.Commands.add('checkoutProduct', (quantity)  => {
    cy.get(FEATURES_ITEMS.view_product_button).click()
    cy.get(PRODUCT.quantity_box)
    .clear()
    .type(quantity)
    cy.get(PRODUCT.add_to_cart_button).click()
    cy.get(POPUP.pop_up_link).click()
    cy.get(SHOPING_CAR.proceed_to_checkout_button).click()
  })

Cypress.Commands.add('placeOrder', (comment)  => { 
    cy.get(HEADER.cart_header_button).click()
    cy.get(SHOPING_CAR.proceed_to_checkout_button).click()
    cy.get(SHOPING_CAR.order_comment_text_area).type(comment)
    cy.get(SHOPING_CAR.place_order_button).click()
    
   })

Cypress.Commands.add('fillCardInfo', (name, number, cvc, mm, yy)  => { 
    cy.get(SUBMIT_CARD_FORM.card_name).type(name)
    cy.get(SUBMIT_CARD_FORM.card_number).type(number)
    cy.get(SUBMIT_CARD_FORM.cvc_field).type(cvc)
    cy.get(SUBMIT_CARD_FORM.expire_month_field).type(mm)
    cy.get(SUBMIT_CARD_FORM.expire_year).type(yy)
    cy.get(SUBMIT_CARD_FORM.pay_button).click()
     })

Cypress.Commands.add('continue', ()  => { cy.get(SUCCESS_SCREEN.continue_button).click()})
Cypress.Commands.add('logout', ()  => { cy.get(HEADER.login_header_button).click()  })
Cypress.Commands.add('login', ()  => { cy.get(HEADER.login_header_button).click()  })
Cypress.Commands.add('popUpLink', ()  => {cy.get(POPUP.pop_up_link).click()})

Cypress.Commands.add('signup', (username, email)  => {
    cy.get(SIGNUP_FORM.name_field).type(username)
    cy.get(SIGNUP_FORM.email_field).type(email)
    cy.get(SIGNUP_FORM.signup_button).click()
     })

Cypress.Commands.add('submitNewUser', (password, bDay , bMonth, bYear, firstName,lastName, company, adress, country,state,city,zipcode,mobile)  => { 
    cy.get(SUBMIT_USER_FORM.gender_2).click()
    cy.get(SUBMIT_USER_FORM.password_field).type(password)
    cy.get(SUBMIT_USER_FORM.days_field).select(bDay)
    cy.get(SUBMIT_USER_FORM.months_field).select(bMonth)
    cy.get(SUBMIT_USER_FORM.years_field).select(bYear)
    cy.get(SUBMIT_USER_FORM.first_name_field).type(firstName)
    cy.get(SUBMIT_USER_FORM.last_name_field).type(lastName)
    cy.get(SUBMIT_USER_FORM.company_field).type(company)
    cy.get(SUBMIT_USER_FORM.address_field).type(adress)
    cy.get(SUBMIT_USER_FORM.country_field).type(country)
    cy.get(SUBMIT_USER_FORM.state_field).type(state)
    cy.get(SUBMIT_USER_FORM.city).type(city)
    cy.get(SUBMIT_USER_FORM.zipcode).type(zipcode)
    cy.get(SUBMIT_USER_FORM.mobile_field).type(mobile)
    cy.get(SUBMIT_USER_FORM.create_account_button).click()
 })   

Cypress.Commands.add('contactUs', (contactName, contactEmail, contacSubject, contactMessage) => { 
    cy.get(CONTACT_US_SCREEN.contact_us_button).click()
    cy.get(CONTACT_US_SCREEN.name_field).type(contactName)
    cy.get(CONTACT_US_SCREEN.email_field).type(contactEmail)
    cy.get(CONTACT_US_SCREEN.subject_field).type(contacSubject)
    cy.get(CONTACT_US_SCREEN.message_text_area).type(contactMessage)
    cy.get(CONTACT_US_SCREEN.choose_file_button).selectFile('cypressdatailetoUpload.txt')
    cy.get(CONTACT_US_SCREEN.submit_button).click()
})
    
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })