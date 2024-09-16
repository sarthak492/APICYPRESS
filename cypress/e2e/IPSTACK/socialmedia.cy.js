describe('Test Cases IPstack social media icons', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        cy.visit('https://ipstack.com');
    });

    it('1.Test to Check if twitter icon is there', () => {
        cy.AcceptCookies();
        cy.scrollTo('bottom');
        cy.get('.twitter > a > img').should('be.visible')
    });

    it('2.Test to check Click on twitter icon', () => {
        cy.scrollTo('bottom');
        cy.get('.twitter > a > img').click();
        cy.url('eq', 'https://x.com/apilayer/')
    });

    it('3. Test to Check if facebook icon is there', () => {
        cy.visit('https://ipstack.com')
        cy.scrollTo('bottom');
        cy.get('.facebook > a > img').should('be.visible');
    });

    it('4. Test to Check Click on  facebook icon', () => {
        cy.visit('https://ipstack.com')
        cy.scrollTo('bottom');
        cy.get('.facebook > a > img').click();
        cy.url('eq', 'https://facebook.com/apilayer/')
    });

    it('5. Test to Check if Instagram icon is there', () => {
        cy.visit('https://ipstack.com')
        cy.scrollTo('bottom');
        cy.get('.instagram > a > img').should('be.visible');
    });

    it('6. Test to Check Click on  Instagram icon', () => {
        cy.visit('https://ipstack.com')
        cy.scrollTo('bottom');
        cy.get('.instagram > a > img').click();
        cy.url('eq', 'https://instagram.com/apilayer/');
    });

    it('7. Test to Check if youtube icon is there', () => {
        cy.visit('https://ipstack.com')
        cy.scrollTo('bottom');
        cy.get('.youtube > a > img').should('be.visible');
    });

    it('8. Test to Click on  Youtube icon', () => {
        cy.scrollTo('bottom');
        cy.get('.youtube > a > img').click();
        cy.url('eq', 'https://youtube.com/apilayer/')
    });

    it('9. Test to Check if linkdin icon is there', () => {
        cy.visit('https://ipstack.com')
        cy.scrollTo('bottom');
        cy.get('.linkedin > a > img').should('be.visible');
    });

    it('10. Test to Check Click on  linkdin icon', () => {
        cy.scrollTo('bottom');
        cy.get('.linkedin > a > img').click();
        cy.url('eq', 'https://linkdin.com/apilayer/')
    });
})