describe('Bugaboo contact form', () => {

  it('should clear typeform session storage', () => {
   
 
    cy.visit('https://service.bugaboo.com/s/consumer-contact?language=en_GB'); 
    cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll:visible').contains('Accept').click({force: true})
    cy.wait(4000);

  })

//  it('Select the first option to continue with the form', () => {
    // .cy.contains('Delivery, Return or Refund')
    // .click();
    // cy.get('button.slds-button_brand.flow-button__NEXT').click();

  })

//  it('Check if the user is not able to submit the form without filling in any of the required fields.', () => {
    // cy.get('#input-48').type('123456789');
    // cy.get('#input-51').type('ABC123');
    // cy.get('#input-55').type('This is a test message.');
    // cy.get('#input-58').type('Bujare');
    // cy.get('#input-61').type('Ndrecaj');
    
    // cy.get('#recaptcha-anchor')
    //   .click();
    // cy.get('button.slds-button_brand.flow-button__NEXT').click();
//  })


//  it('Check if the user is not able to submit the form by filling in the email field with an invalid email address format.', () => {
    // cy.get('#input-48').type('letters');
    // cy.get('#input-51').type('ABC123');
    // cy.get('#input-55').type('This is a test message.');
    // cy.get('#input-58').type('Bujare');
    // cy.get('#input-61').type('Ndrecaj');
    // cy.get('#input-64').type('invalidemail');
    // cy.get('#input-67').type('invalidemail');
    // // Find the input field by its data-id attribute
    // cy.get('input[data-id="countryPhone"]').as('countryPhoneInput');

    // // Click on the input field to focus it
    // cy.get('@countryPhoneInput').click();

    // // Type in the country code you want to select
    // cy.get('@countryPhoneInput').type('{downarrow}{enter}');
    // cy.get('#select-69').select('CountriesList.US');
    // cy.get('#recaptcha-anchor')
    //   .click();
    // cy.get('button.slds-button_brand.flow-button__NEXT').click();
//  })


//  it('Check if the user is able to successfully submit the form by filling in all the required and optional fields ', () => {
    // cy.get('#input-48').type('123456789');
    // cy.get('#input-51').type('ABC123');
    // cy.get('#input-55').type('This is a test message.');
    // cy.get('#input-58').type('Bujare');
    // cy.get('#input-61').type('Ndrecaj');
    // cy.get('#input-64').type('test@example.com');
    // cy.get('#input-67').type('test@example.com');
    // // Find the input field by its data-id attribute
    // cy.get('input[data-id="countryPhone"]').as('countryPhoneInput');

    // // Click on the input field to focus it
    // cy.get('@countryPhoneInput').click();

    // // Type in the country code you want to select
    // cy.get('@countryPhoneInput').type('{downarrow}{enter}');
    // cy.get('#select-69').select('CountriesList.US');
    // cy.get('#recaptcha-anchor')
    //   .click();
    // cy.get('button.slds-button_brand.flow-button__NEXT').click();
    
    // cy.get('span').contains('Thank you for contacting us about your product. You will receive a confirmation in your email. We will process your request as soon as possible.')
    //   .should('be.visible');
//  })

//  })




