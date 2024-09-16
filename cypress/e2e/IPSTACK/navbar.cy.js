describe('Contact Form Page', () => {
    before(() => {
        // Visit the contact form page before running any tests
        cy.visit('https://ipstack.com/');
    });

    it('1. Test to naviagate to the status page', () => {
        cy.AcceptCookies();
        cy.get('.status > a').click();
        cy.visit('https://status.ipstack.com/');
        cy.visit('https://ipstack.com/');
        cy.AcceptCookies();
    });

    it('2. Test to naviagate to the Blog page', () => {
        cy.get('.header > .container > ul > :nth-child(6) > a').click();
        cy.visit('https://ipstack.com/blog');
    });

    it('3. Test to naviagate to the Affiliates page', () => {
        cy.get('.header > .container > ul > :nth-child(5) > a').click();
        cy.visit('https://affiliate.ipstack.com/')
    });

    it('4. Test to naviagate to the FAQ page', () => {
        cy.get('.header > .container > ul > :nth-child(4) > a').click();
        cy.visit('https://ipstack.com/faq');
    });

    it('5. Test to naviagate to the receipes page', () => {
        cy.get('.header > .container > ul > :nth-child(3) > a').click();
        cy.visit('https://ipstack.com/recipe');
    });

    it('6. Test to naviagate to the documentation page', () => {
        cy.get('.header > .container > ul > :nth-child(2) > a').click();
        cy.visit('https://ipstack.com/documentation');
    });

    it('7. Test to navigate to the pricing page', () => {
        cy.get('.container > ul > :nth-child(1) > a').click();
        cy.visit('https://ipstack.com/product');
    });
});