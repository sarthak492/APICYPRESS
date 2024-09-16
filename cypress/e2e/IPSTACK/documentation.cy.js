describe('Documentation Page', () => {
    before(() => {
        cy.visit('https://ipstack.com/');
    });

    it('1. Test to naviagate to the Doc', () => {
        cy.AcceptCookies();
        cy.get('.header > .container > ul > :nth-child(2) > a').click();
        cy.visit('https://ipstack.com/documentation');
    });

    it('2. Test to check the text in the documentation', () => {
        cy.AcceptCookies();
        cy.get('h1').should('be.visible', 'contain.text', 'Ipstack API');
    });

    it('3. Test to check the text in the documentation', () => {
        cy.get(':nth-child(1) > .heading').should('be.visible', 'contain.text', 'Getting Started');
    });

    it('4. Test to navigate to "API Access Key" section', () => {
        cy.get('.sidebar > :nth-child(2) > a').contains('API Access Key').click();
        cy.get('#apiaccesskey').should('be.visible').and('contain.text', 'API Access Key');
    });

    it('5. Test to navigate to "API Response" section', () => {
        cy.get('.sidebar > :nth-child(3) > a').contains('API Response').click();
        cy.get('#apiresponse').should('be.visible').and('contain.text', 'API Response');
    });

    it('6. Test to navigate to "Available Endpoints" section', () => {
        cy.get('.sidebar > :nth-child(4) > a').contains('Available Endpoints').click();
        cy.get('#endpoints').should('be.visible').and('contain.text', 'Available Endpoints');
    });

    it('7. Test to navigate to "Connection via HTTPS" section', () => {
        cy.get('.sidebar > :nth-child(5) > a').contains('Connection via HTTPS').click();
        cy.get('#https').should('contain.text', 'Connecting via HTTPS');
    });

    it('8. Test to navigate to "JSONP Callbacks" section', () => {
        cy.get('.sidebar > :nth-child(6) > a').contains('JSONP Callbacks').click();
        cy.get('#jsonp').should('be.visible').and('contain.text', 'JSONP Callbacks');
    });

    it('9. Test to navigate to "Error Codes" section', () => {
        cy.get('.sidebar > :nth-child(7) > a').contains('Error Codes').click();
        cy.get('#errors').should('contain.text', 'Error Codes');
    });

    it('10.Test to check Endpoints text', () => {
        cy.get(':nth-child(8) > .heading').contains('Endpoints');
    });

    it('11.Test to navigate to "Standard Lookup" section', () => {
        cy.get('.sidebar > :nth-child(9) > a').contains('Standard Lookup').click();
        cy.get('#standard').should('be.visible').and('contain.text', 'Standard IP Lookup');
    });

    it('12. Test to navigate to "Bulk Lookup" section', () => {
        cy.get('.sidebar > :nth-child(10) > a').click();
        cy.get('#bulk').should('be.visible').and('contain.text', 'Bulk IP Lookup');
    });

    it('13. Test to navigate to "Requester Lookup" section', () => {
        cy.get('.sidebar > :nth-child(11) > a').click();
        cy.get('#requester').should('be.visible').and('contain.text', 'Requester IP Lookup');
    });

    // Adding tests for the "Options" section
    it('14. Test to navigate to "Specify Output Format" section', () => {
        cy.get(':nth-child(13) > a').contains('Specify Output Format').click();
        cy.get('#outputformat').should('be.visible').and('contain.text', 'Specify Output Format');
    });

    it('15. Test to navigate to "Specify Response Fields" section', () => {
        cy.get(':nth-child(14) > a').contains('Specify Response Fields').click();
        cy.get('#fields').should('be.visible').and('contain.text', 'Specify Response Fields');
    });

    it('16. Test to navigate to "Specify Response Language" section', () => {
        cy.get(':nth-child(15) > a').contains('Specify Response Language').click();
        cy.get('#language').should('be.visible').and('contain.text', 'Specify Response Language');
    });

    it('17. Test to navigate to "Enable Hostname Lookup" section', () => {
        cy.get(':nth-child(16) > a').contains('Enable Hostname Lookup').click();
        cy.get('#hostname').should('be.visible').and('contain.text', 'Enable Hostname Lookup');
    });

    it('18. Test to navigate to "Enable Security Module" section', () => {
        cy.get(':nth-child(17) > a').contains('Enable Security Module').click();
        cy.get('#security').should('be.visible').and('contain.text', 'Enable Security Module');
    });

    //test cases for the Billing section.
    it('19. Test to navigate to Billing text', () => {
        cy.get(':nth-child(18) > .heading').should('be.visible', 'Billing');
    });

    it('20. Test to navigate to Billing Overages section', () => {
        cy.get(':nth-child(19) > a').contains('Billing Overages').click();
        cy.get(':nth-child(17) > :nth-child(3)').should('be.visible').and('contain.text', 'What is an overage?');
    });

    it('21. Test to navigate to Platinum Support section', () => {
        cy.get(':nth-child(20) > a').contains('Platinum Support').click();
        cy.get(':nth-child(18) > :nth-child(3)').should('be.visible').and('contain.text', 'What does Platinum Support include?');
    });

    it('22. Test to check for Upgrade now button', () => {
        cy.get('.platinum-btn').contains('Upgrade now').click();
        cy.visit('https://ipstack.com/product');
        cy.go('back');
    });

    it('23. Test to check for the footer links documentation', () => {
        cy.get('.custom-container > :nth-child(3) > :nth-child(2) > a').click();
    });
});