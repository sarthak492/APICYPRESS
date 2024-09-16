describe('Contact Form Page', () => {
    before(() => {
        // Visit the contact form page before running any tests
        cy.visit('https://ipstack.com/');
    });

    it('1. Test to naviagate to the FAQs page', () => {
        cy.AcceptCookies();
        cy.get('.header > .container > ul > :nth-child(4) > a').click();
        cy.visit('https://ipstack.com/faq');
        cy.AcceptCookies();
    });

    it('2. Test to show the FAQs page', () => {
        cy.get('.faq-title').should('contain.text', 'Frequently Asked Questions');
    });

    it('3. Test to check the FAQs text available or not', () => {
        cy.get('.hero_small > .container > p').should('contain.text', 'View the most common questions people ask about ipstack.')
    });

    it('4. Test to have the Any questions text ', () => {
        cy.get('.contact > .container > .docs-contact-text').should('contain.text', 'Any questions? Our team is here to help!');
    });

    it('5. Test to have contact support button ', () => {
        cy.get('.contact > .container > .docs-contact-btn > .button').should('be.visible');
    });

    it('6. Test to have DATA & FEATURES text', () => {
        cy.get(':nth-child(6) > .container > .accordion > h2').should('contain.text', 'DATA & FEATURES');
    });

    it('7. Test to check for the API ACCESS', () => {
        cy.get(':nth-child(7) > .container > .accordion > h2').should('contain.text', 'API ACCESS');
    });

    it('8. Test to check Plans and pricing ', () => {
        cy.get(':nth-child(8) > .container > .accordion > h2').should('contain.text', 'PLANS & PRICING');
    });

    it('9. Test to check ipstack geolocation services worldwide', () => {
        cy.get('.cta.contact-documentation > .container > .docs-contact-text').should('contain.text', 'Ipstack is one of the most popular IP to geolocation API services worldwide');
    });

    it('10. Test to click on the footer link FAQs', () => {
        cy.get('.custom-container > :nth-child(3) > :nth-child(4) > a').click();
    });
});
