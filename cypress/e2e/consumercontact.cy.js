//   const email = `bujare${Math.floor(Math.random() * 100000)}@test.com`;
//   const randomIndex = Math.floor(Math.random() * (options.length - 1)) + 1

// describe('Bugaboo contact form', () => {
//   beforeEach(() => {
//     cy.visit('https://service.bugaboo.com/s/consumer-contact?language=en_GB');
//     cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').contains('Accept').click({force: true});
//     cy.wait(4000);
//     cy.contains('Delivery, Return or Refund').click();      
//     cy.get('button.slds-button_brand.flow-button__NEXT').click();
//   });


describe('Bugaboo contact form', () => {
  let cookies;

  it('should clear typeform session storage', () => {
    cy.forceVisit('https://service.bugaboo.com/s/consumer-contact?selectedItem=Consumer_Contact_Form__c&language=en_US');
    // cy.getSocialCookies().then((socialCookies) => {
    //   cookies = socialCookies;
    // });
    // cy.wrap(cookies).each((cookie) => {
    //   cy.setCookie(cookie.name, cookie.value, {
    //     domain: cookie.domain,
    //     expiry: cookie.expires,
    //     httpOnly: cookie.httpOnly,
    //     path: cookie.path,
    //     secure: cookie.secure,
    //   });
    // });
    // cy.visit('https://salesforce.com');

    cy.wait(5000);
    // cy.setCookie('CookieConsentPolicy', '0:1');
    cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click({ force: true });
    // cy.get('#CybotCookiebotDialogContentWrapper').should('not.be.visible');
    cy.wait(3000);

    //  })



    //it('2. Verify if the "Order Number" field accepts only numeric values. ', () => {
    //cy.get('button[data-value="Delivery, Return or Refund"]').click({force: true}); // select the dropdown button
    // Wait for the button to become visible before clicking it
    // Wait for the button to become visible before clicking it
    // https://stackoverflow.com/questions/57506285/using-cypress-drop-down-select-values-are-not-happening

    cy.contains('What is your question?').click();
    cy.wait(5000);
    // cy.get('#combobox-button-11').trigger('mouseover').click()
    //data-item-id="combobox-button-9-0"
    //aria-checked="true"
    // cy.contains('[data-item-id="combobox-button-11-0"]').click();

    cy.contains('Delivery, Return or Refund').click({ force: true });

    cy.contains('What is your question?').then(($btn) => {
      $btn.attr('data-value', 'Delivery, Return or Refund')
    })

    //cy.contains('Delivery, Return or Refund');


    cy.wait(5000);


    //cy.get('#combobox-button-11 > span').eq(0).click() // to open the drop down
    // cy.get('.slds-combobox__input.slds-input_faux').contains('Delivery, Return or Refund').click()
    // cy.get('.slds-form-element').select(':nth-child(1)'); // to click the actual option
    //cy.wait(2000); // wait for 2 seconds
    // // cy.get('.slds-truncate', { timeout: 2000 }).contains('Delivery, Return or Refund').click();
    // cy.id('span.slds-truncate', 'Order or Payment Related')
    //   .should('be.visible')
    //   .click();


    // Select the option by text 
    //cy.contains('Delivery, Return or Refund').click({force: true});
    // cy.get('button[data-value="Delivery, Return or Refund"]').click({force: true});     
    //     cy.get('button.slds-button_brand.flow-button__NEXT').click();
    //     cy.contains('What is your question?').click();
    // //cy.wait(10000);

    // cy.get('#input-48').type('ABC123')
    // cy.get('#recaptcha-anchor').click();
    // cy.get('button.slds-button_brand.flow-button__NEXT').click();
    // cy.get('#input-48').should('not.be.visible', 'ABC123');
  })

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




