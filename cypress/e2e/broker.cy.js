describe('Search for brokers', () => {
  it('loads brokers and searches for each one', () => {    
    cy.log('Visit the website');
    cy.visit('https://www.yavlena.com/broker/');

    cy.log('Click on the "Зареди още" button to load more brokers');
    cy.contains('Зареди още').click();
    cy.wait(10000)
    cy.get('a.toggle-filter').click();


    cy.log('Get all brokers on the page');
    cy.get('.name a')
      .each((broker) => {
        const brokerName = broker.text();
        cy.log('Searching for broker:', brokerName);
        cy.get('[placeholder="име, район"]').clear().type(brokerName)
        cy.get('.search-btn button').click();
        cy.wait(5000)
        cy.log('Verify if the adress is appearing')
        cy.get('.header-group .office').should('be.visible').then((address) => {
          cy.log('As it is required the address is present:', address.text())
        })
        cy.log('Verify if the number of properties assigned to the broker are displayed.')
        cy.get('div.position a').should('be.visible').then((data) => { cy.log('As it is required the number of properties is present', data.text()) })
        cy.get('span.tel a').should('be.visible').then((data) => {
          const str = data.text();
          if (str.indexOf('+') !== str.lastIndexOf('+')) {
            cy.log("As it's required we have two phone numbers available", str)
          }
        })
      });
  });
});
