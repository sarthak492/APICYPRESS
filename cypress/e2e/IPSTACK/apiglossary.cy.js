describe('API Glosssary Form Page', () => {
    before(() => {
        // Visit the contact form page before running any tests
        cy.visit('https://ipstack.com/');
    });

    it('1. Test to naviagate to the Blog page', () => {
        cy.AcceptCookies();
        cy.get('.custom-container > :nth-child(3) > :nth-child(5) > a').click();
        cy.visit('https://ipstack.com/api-glossary');
        cy.AcceptCookies();
    });

    it('2. Test to  show the Blog page', () => {
        cy.get('h1').should('be.visible', 'contain.text', "Ipstack API Glossary");
    });

    it('3. Test to check the Glossary text available or not', () => {
        cy.get('.hero_small > .container > h2').should('contain.text', "Glossary of API Terms, Definitions & Programming Acronyms");
    });

    it('4. Test to check what is API Glossary text', () => {
        cy.get('h3').should('contain.text', 'What is the API Glossary?');
    });

    it('5. Test to check the sub-heading of the glossary ', () => {
        cy.get('.glossary-sub-heading').should('contain.text', 'Ipstack’s API glossary contains an alphabetical list of API-related special terms, definitions, acronyms, and related phrases to help developers understand the terminology. Browse the Ipstack glossary and learn to speak the language of professional API developers!');
    });

    it('6. Test to check the orderwise alphabetical grossary sections.', () => {
        cy.get('#A').should('be.visible');
        cy.get('#C').should('be.visible');
        cy.get('#D').should('be.visible');
        cy.get('#G').should('be.visible');
        cy.get('#I').should('be.visible');
        cy.get('#U').should('be.visible');
        cy.get('#W').should('be.visible');
    });

    it('7. Test to click on the footer link blog', () => {
        cy.get('.custom-container > :nth-child(3) > :nth-child(5) > a').click();
    });
});