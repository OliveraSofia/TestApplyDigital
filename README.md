##Install

# clone this repo to a local directory
git clone https://github.com/OliveraSofia/TestApplyDigital.git

# install cypress
npm install cypress

# install the node_modules
npm install

# start cypress
npx cypress open

#If you get stuck, here is more help:
[Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)

## Strategy and Test Cases

# Strategy
    The chosen strategy was to use [Custom Commands](https://docs.cypress.io/api/cypress-api/custom-commands). This way the test cases can be reused and it is easier to read them. 
    Custom Comands can be found in: cypress\support\commands.js
    To respect the order of the required steps, only 2 test cases were created:

# Test Cases
    
    Test Cases can be found in: cypress\e2e\ApplyDigitalspec.cy.js

    Test Case 1: Create an acount and place an order
        Steps: 
            1. Enter the website and scroll down about halfway down the page.
            2. Chose a product and click on “View product” under the picture of the product.
            3. In the Quantity box enter 30
            4. Click “Add to cart”
            5. Click on “Proceed to Checkout”
            6. Fill in an email address and click on “Register / Login”
            7. Enter name and email under “New User Signup”
            8. Fill in all information and click on “Create Account”
            9. Click on “Continue” under “ACCOUNT CREATED!” title
            10. Click on the Cart in the header
            11. Click on “Proceed to checkout”
            12. Add a comment and click on “Place Order”
            13. Fill in fake Credit Card information and click on “Pay and Confirm Order”
            14. Click on “Continue” button
            15. Click on “Logout” on top header  

    Test Case 2: Login and submit a Cuntact Us form
        Steps:
            16. On the “Login to your account” box and enter with previously created user
            17. Click on “Contact us” on the header
            18. Fill required data and Click on “Submit”
            19. Press “OK” in the pop up
            20. Finally, click on the “Logout” button on the header.

    It could be improved if the modules were tested isolated.

# Data Configuration:

    Will be set up on next push ...