

export const HEADER = {
    cart_header_button : '.shop-menu > .nav > :nth-child(3) > a',
    logout_header_button : '.shop-menu > .nav > :nth-child(4) > a',
    login_header_button : '.shop-menu > .nav > :nth-child(4) > a'
}

export const FEATURES_ITEMS = {
    view_product_button  : ':nth-child(6) > .product-image-wrapper > .choose > .nav > li > a',

};

export const PRODUCT = {

    quantity_box : '#quantity',
    add_to_cart_button : ':nth-child(5) > .btn',
    go_to_car_link : 'u'

};

export const POPUP = {
    pop_up_link : '.modal-body > :nth-child(2) > a > u'
};

export const SHOPING_CAR = {
    proceed_to_checkout_button : '.col-sm-6 > .btn',
    order_comment_text_area : '.form-control',
    place_order_button : ':nth-child(7) > .btn'

};

export const  LOG_IN_FORM = {
   email_field: '[data-qa="login-email"]',
   password_field : '[data-qa="login-password"]',
   login_button : '[data-qa="login-button"]'
}

export const SIGNUP_FORM = {
    email_field :'[data-qa="signup-email"]',
    name_field :  '[data-qa="signup-name"]',
    signup_button: '[data-qa="signup-button"]'
}

export const SUBMIT_CARD_FORM = {
    card_name : '[data-qa="name-on-card"]',
    card_number : '[data-qa="card-number"]',
    cvc_field : '[data-qa="cvc"]',
    expire_month_field :'[data-qa="expiry-month"]',
    expire_year :'[data-qa="expiry-year"]',
    pay_button :'[data-qa="pay-button"]'
}

export const SUBMIT_USER_FORM = {

gender_2 : '#id_gender2',
password_field : '[data-qa="password"]',
days_field : '[data-qa="days"]',
months_field : '[data-qa="months"]',
years_field : '[data-qa="years"]',
first_name_field : '[data-qa="first_name"]',
last_name_field : '[data-qa="last_name"]',
company_field : '[data-qa="company"]',
address_field : '[data-qa="address"]',
country_field : '[data-qa="country"]',
state_field : '[data-qa="state"]',
city : '[data-qa="city"]',
zipcode : '[data-qa="zipcode"]',
mobile_field : '[data-qa="mobile_number"]',
create_account_button : '[data-qa="create-account"]'

}

export const SUCCESS_SCREEN = {
    continue_button : '[data-qa="continue-button"]'
}

export const CONTACT_US_SCREEN = {
    contact_us_button : ':nth-child(9) > a',
    name_field : '[data-qa="name"]',
    email_field : '[data-qa="email"]',
    subject_field : '[data-qa="subject"]',
    message_text_area : '[data-qa="message"]',
    choose_file_button : ':nth-child(6) > .form-control',
    submit_button : '[data-qa="submit-button"]'
}