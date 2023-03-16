//   const email = `bujare${Math.floor(Math.random() * 100000)}@test.com`;
//   const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1


describe('Bugaboo contact form', () => {
  beforeEach(() => {
    cy.visit('https://service.bugaboo.com/s/consumer-contact?language=en_GB');
    cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').contains('Accept').click({force: true});
    cy.wait(4000);
    cy.contains('Delivery, Return or Refund').click();      
    cy.get('button.slds-button_brand.flow-button__NEXT').click();
  });



// it('2. Verify if the "Order Number" field accepts only numeric values. ', () => {
//   cy.get('#input-48').type('ABC123')
//   cy.get('#input-48').next().should('have.text', 'This value must be a number.')
//   cy.get('#input-48').clear()
//   cy.get('#input-48').type('123456')
//   cy.get('#input-48').next().should('not.exist')
//  })

//  it('3. Verify if the "Item Code / Name" field accepts alphanumeric values.', () => {    
//     cy.get('#input-51').type('TEST123');  
//     cy.get('#recaptcha-anchor').click();
//     cy.get('button.slds-button_brand.flow-button__NEXT').click();
//     cy.get('#input-51').type('ABC123').should('be.visible', 'TEST123')
//  })

//  it('Verify if the "Item Code / Name" field accepts alphanumeric values.', () => {    
//     cy.get('#input-51').type('TEST123');  
//     cy.get('#recaptcha-anchor').click();
//     cy.get('button.slds-button_brand.flow-button__NEXT').click();
//     cy.get('#input-51').type('ABC123').should('be.visible', 'TEST123')
//  })

//  it('Verify if the user is not able to submit the form by filling in the email field with an invalid email address format.', () => {
//     cy.get('#input-64').type('invalidemail');
//     cy.get('#input-67').type('invalidemail');
//     cy.get('#recaptcha-anchor').click();
//     cy.get('button.slds-button_brand.flow-button__NEXT').click();
//     cy.contains('Please enter a valid email id')
//  })

//   it('Verify if the user is able to successfully submit the form by filling in the email field with a valid email address format.', () => {
//     cy.get('#input-48').type('123456789');
//     cy.get('#input-51').type('ABC123');
//     cy.get('#input-55').type('This is a test message.');
//     cy.get('#input-58').type('Bujare');
//     cy.get('#input-61').type('Ndrecaj');
//     cy.get('#input-64').type(email);
//     cy.get('#input-67').type(email);
//     cy.get('input[data-id="countryPhone"]').as('countryPhoneInput');
//     cy.get('@countryPhoneInput').click();
//     cy.get('@countryPhoneInput').type('{downarrow}{enter}');
//     cy.get('#select-158').then(($select) => {
//       const options = $select.find('option')
//       cy.wrap(options[randomIndex]).invoke('val').then((value) => {
//         cy.wrap($select).select(value)
//       })
//     })
//     cy.get('#recaptcha-anchor').click();
//     cy.get('button.slds-button_brand.flow-button__NEXT').click();
//     cy.get('span').contains('Thank you for contacting us about your product. You will receive a confirmation in your email. We will process your request as soon as possible.')
//       .should('be.visible');
//   })

//  it('Check if the user is not able to submit the form without filling in any of the required fields.', () => {
//     cy.get('#input-48').type('123456789');
//     cy.get('#input-51').type('ABC123');
//     cy.get('#input-55').type('This is a test message.');
//     cy.get('#input-58').type('Bujare');
//     cy.get('#input-61').type('Ndrecaj');
//     cy.get('#recaptcha-anchor').click();
//     cy.get('button.slds-button_brand.flow-button__NEXT').click();
//     cy.get('#input-48').should('be.visible');
//  })


//  it('Check if the user is able to successfully submit the form by filling in all the required fields ', () => {
//     cy.get('#input-48').type('123456789');
//     cy.get('#input-51').type('ABC123');
//     cy.get('#input-55').type('This is a test message.');
//     cy.get('#input-58').type('Bujare');
//     cy.get('#input-61').type('Ndrecaj');
//     cy.get('#input-64').type(email);
//     cy.get('#input-67').type(email);
//     cy.get('input[data-id="countryPhone"]').as('countryPhoneInput');
//     cy.get('@countryPhoneInput').click();
//     cy.get('@countryPhoneInput').type('{downarrow}{enter}');
//     cy.get('#select-158').then(($select) => {
//       const options = $select.find('option')
//       cy.wrap(options[randomIndex]).invoke('val').then((value) => {
//         cy.wrap($select).select(value)
//       })
//     })
//     cy.get('#recaptcha-anchor').click();
//     cy.get('button.slds-button_brand.flow-button__NEXT').click();
//     cy.get('span').contains('Thank you for contacting us about your product. You will receive a confirmation in your email. We will process your request as soon as possible.')
//       .should('be.visible');
//  })

});




