describe('Zenscrape Api Documentation Page', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        cy.visit('https://zenscrape.com/');
    });

    it('0. Test to Accept Cookies if not already accepted', () => {
        cy.AcceptCookies();
    });

    it('1. Test to Click to the Documentation hyperlink', () => {
        cy.get('.gap-8 > [href="//app.zenscrape.com/documentation"]').click();
    });

    it('2. Test to check the text in the documentation', () => {
        cy.wait(8000);
        cy.componentVisiblityCheck(':nth-child(1) > .col-md-12 > h4', 'Documentation');
    });

    it('3. Test to check Register Free Api button is there or not', () => {
        cy.componentVisiblityCheck('aside > .btn', 'Register Free Apikey');
    });

    it('4. Test to Click on Register Free API Key button', () => {
        cy.get('aside > .btn').click();
        //   cy.assertPathname('/register?plan=free');
        cy.navigateUrlwithCookies('https://app.zenscrape.com/documentation');
    });

    it('5. Test to check the Pro Tip alert message is there or not', () => {
        cy.componentVisiblityCheck('.alert', 'Pro Tip: Register your free apikey here and all code snippets below will contain your private apikey. If you have already registered, login before viewing the documentation.');
    });

    it('6. Test to check Postman Collection text and Run post man button is there or not', () => {
        cy.componentVisiblityCheck('#postman', 'Postman Collection');
        cy.componentVisiblityCheck('.postman-run-button');
    });

    xit('7. Test to check the Run in Postman button', () => {
        cy.get('.postman-run-button').click();
        cy.wait(5000)
        cy.url().should('eq', 'https://app.getpostman.com/run-collection/85f8b936e3e1870c3fa9');
        cy.go('back');
    });

    it('8. Test to Navigate For Request Costs', () => {
        cy.get('.mb-3 > :nth-child(1) > .nav-link').click();
        cy.componentVisiblityCheck('#failed', 'Credit Costs & Failed Requests');
    });

    it('9. Test to Navigate to Basic Usage', () => {
        cy.get('.mb-3 > :nth-child(2) > .nav-link').click();
        cy.componentVisiblityCheck('#basicUsage > .mb-3 > .col-md-12 > h5', 'Basic Usage');
    });

    it('10. Test to navigate to "Web Scraping API" section', () => {
        cy.get('.mb-3 > :nth-child(3) > .nav-link').click();
        cy.componentVisiblityCheck('#webScrapingApi > .mb-3 > .col-md-12 > h5', 'Web Scraping API');
    });

    it('11. Test to navigate to "Proxy Mode', () => {
        cy.get('.mb-3 > :nth-child(4) > .nav-link').click();
    });

    it('12. Test to navigate to "Premium Location List" section', () => {
        cy.get('.mb-3 > :nth-child(5) > .nav-link').click();
        cy.componentVisiblityCheck('#proxyLocationList > :nth-child(1) > .col-md-12 > h5', 'Premium Proxy Location List');
    });

    it('13. Test to navigate to "Error Codes" section', () => {
        cy.get('.mb-3 > :nth-child(6) > .nav-link').click();
        cy.componentVisiblityCheck('#errorCodes > .mb-3 > .col-md-12 > h5', 'Error Codes');
    });

    it('14. Test to check Using Premium Proxies Section', () => {
        cy.get('aside > .mb-2 > :nth-child(1) > .nav-link')
        cy.componentVisiblityCheck('.mb-3 > .col-md-12 > #premiumProxies', 'Using Premium Proxies');
    });

    it('15. Test to navigate to "Setting a Custom Header" section', () => {
        cy.get('aside > .mb-2 > :nth-child(2) > .nav-link').click();
        cy.componentVisiblityCheck('#keepCustomHeaders > .mb-3 > .col-md-12 > h5', 'Setting a Custom Header');
    });

    it('16. Test to navigate to "Enable JS Rendering" section', () => {
        cy.get('aside > .mb-2 > :nth-child(3) > .nav-link')
        cy.componentVisiblityCheck('#enableJs > .mb-3 > .col-md-12 > h5', 'Enable JS Rendering');
    });

    it('17. Test to navigate to "Getting around Cloudflare" section', () => {
        cy.get('aside > .mb-2 > :nth-child(4) > .nav-link').scrollIntoView();
        cy.get('aside > .mb-2 > :nth-child(4) > .nav-link').click();
        cy.componentVisiblityCheck('#cloudFlare > .row > .col-md-12 > h5', 'Getting around Cloudflare DDoS Protection');
    });

    it('18. Test to navigate to "Bocking particluar Resources" section', () => {
        cy.get('aside > .mb-2 > :nth-child(5) > .nav-link').scrollIntoView();
        cy.get('aside > .mb-2 > :nth-child(5) > .nav-link').click();
    });

    it('19. Test to navigate to "Setting a Cookie" section', () => {
        cy.get('aside > .mb-2 > :nth-child(6) > .nav-link').scrollIntoView();
        cy.get('aside > .mb-2 > :nth-child(6) > .nav-link').click();
        cy.componentVisiblityCheck('#settingCookie > .mb-3 > .col-md-12 > h5', 'Setting a Cookie');
    });
});