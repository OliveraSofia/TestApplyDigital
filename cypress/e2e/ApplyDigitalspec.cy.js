
describe('apply digital user flow', () => {

//var element = require('../page/pageObjects')

  beforeEach(() => { cy.visit('https://automationexercise.com')})
  afterEach(() => {cy.logout()})

  it('Test Case 1:  1-15 Create an acount and place an order', () => {
    //1. Enter the website and scroll down about halfway down the page.
    cy.scrollTo('center')
    //2. Chose a product and click on “View product” under the picture of the product.
    //3. In the Quantity box enter 30
    //4. Click “Add to cart”
    //5. Click on “Proceed to Checkout”
    cy.checkoutProduct(30)
    //6. Fill in an email address and click on “Register / Login”
    cy.popUpLink()
    //7. Enter name and email under “New User Signup”
    cy.signup('username998','username998@email.com')
    //8. Fill in all information and click on “Create Account”
    cy.submitNewUser(1234, 1 , 1, 1, 'firstname998','lastname998', 'Company998', 'Adress998', 'BA','AR','CABA','998','1111111111') 
    //9. Click on “Continue” under “ACCOUNT CREATED!” title
    cy.continue()
    //10. Click on the Cart in the header
    //11. Click on “Proceed to checkout”
    //12. Add a comment and click on “Place Order”
    cy.placeOrder('Delivery only on mondays')
    //13. Fill in fake Credit Card information and click on “Pay and Confirm Order”
    cy.fillCardInfo('Vaisa','1111 1111 1111 1111 ','111','03','89')
    //14. Click on “Continue” button
    cy.continue()
    //15.  Click on “Logout” on top header
  });

  it('Test Case 2:  16-20 Login and submit a Cuntact Us form', () => {
   //16. On the “Login to your account” box and enter with previously created user
    cy.login()
    cy.signin('username998@email.com',1234)
   // 17. Click on “Contact us” on the header
   // 18. Fill required data and Click on “Submit”
   // 19. Press “OK” in the pop up
   cy.contactUs('username', 'username998@email.com', 'contacSubject', 'message')
   // 20. Finally, click on the “Logout” button on the header.
  })
});

