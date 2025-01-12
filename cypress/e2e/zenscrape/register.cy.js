describe('Zenscrape Register Page  ', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        cy.navigateUrlwithCookies('https://zenscrape.com/');
    });

    it('1. Test to click the register button', () => {
        cy.get('.rounded-md > .shadow').click();
    });

    it('2. Test to redirect to the Register page', () => {
        cy.navigateUrlwithCookies('https://app.zenscrape.com/register');
    });

    it('3. Test to Verify subscription text is there or not', () => {
        cy.get('.float-left').should('be.visible', 'contain.text', 'Subscription');
    });

    it('4. Test to Verify subscription options are visible', () => {
        cy.get(':nth-child(1) > :nth-child(1) > .d-flex').should('be.visible');
        cy.get(':nth-child(2) > :nth-child(1) > .d-flex').should('be.visible');
        cy.get(':nth-child(3) > :nth-child(1) > .d-flex').should('be.visible');
        cy.get(':nth-child(4) > :nth-child(1) > .d-flex').should('be.visible');
        cy.get(':nth-child(5) > :nth-child(1) > .d-flex').should('be.visible');
    });

    it('5. Test to Verify subscription monthly or yearly option availble or not', () => {
        cy.get('.btn-group').should('be.visible');
    });

    it('6. Test to check whether the monthly subscription by default toggled or not', () => {
        cy.get('.active').should('be.visible');
    });

    it('7. Test to check All VAT applicable text is there or not', () => {
        cy.get('.m-4').should('be.visible', 'contain.text', 'All subscription plan prices are excluding applicable VAT.');
    });

    it('8. Test to Verify the default subscription plan is "Small"', () => {
        cy.get(':nth-child(2) > :nth-child(1) > .d-flex > .radio-select').should('be.visible');
    });

    it('9. Test to Verify the "Features" buttons availble for all the plans', () => {
        cy.get(':nth-child(1) > :nth-child(2) > .btn').contains('Features');
        cy.get(':nth-child(2) > :nth-child(2) > .btn').contains('Features');
        cy.get(':nth-child(3) > :nth-child(2) > .btn').contains('Features');
        cy.get(':nth-child(4) > :nth-child(2) > .btn').contains('Features');
        cy.get(':nth-child(5) > :nth-child(2) > .btn').contains('Features');
    });

    it('10. Test to Verify the Monthly Prices for the all subscriptions plans', () => {
        cy.get(':nth-child(1) > :nth-child(3) > .table-plan-text').contains('Free');
        cy.get(':nth-child(2) > :nth-child(3) > .table-plan-text').contains('$59.99 / Monthly');
        cy.get(':nth-child(3) > :nth-child(3) > .table-plan-text').contains('$99.99 / Monthly');
        cy.get(':nth-child(4) > :nth-child(3) > .table-plan-text').contains('$249.99 / Monthly');
        cy.get(':nth-child(5) > :nth-child(3) > .table-plan-text').contains('$349.99 / Monthly');
    });

    it('11. Test to Verify the "Features" button of the Free plan and should open the popup for free plan', () => {
        cy.get(':nth-child(1) > :nth-child(2) > .btn').contains('Features').click({ force: true });
        cy.get('.modal-header').contains('Free');
        cy.get('.plan-feature-list > li').should('be.visible', 'contain.text', '1.000 requests per month');
        cy.get('.modal-footer > .btn').click({ force: true });
        cy.wait(500);
    });

    it('12. Test to Verify the "Features" button of Small Monthly plan and should open the popup for Small Monthly plan', () => {
        cy.get(':nth-child(2) > :nth-child(2) > .btn').contains('Features').click({ force: true })
        cy.get('.modal-header').contains('Small');
        cy.get('.plan-feature-list > li').should('be.visible', 'contain.text', '250.000 requests per month');
        cy.get('.modal-footer > .btn').click({ force: true });
        cy.wait(500);
    });

    it('13. Test to Verify the "Features" button of Medium Monthly plan and should open the popup for Medium Monthly plan', () => {
        cy.get(':nth-child(3) > :nth-child(2) > .btn').contains('Features').click({ force: true });
        cy.get('.modal-header').contains('Medium');
        cy.get('.plan-feature-list > li').should('be.visible', 'contain.text', '1.000.000 requests per month');
        cy.get('.modal-footer > .btn').click({ force: true });
        cy.wait(500);
    });

    it('14. Test to Verify the "Features" button of Large Monthly plan and should open the popup for Large Monthly plan', () => {
        cy.get(':nth-child(4) > :nth-child(2) > .btn').contains('Features').click({ force: true });
        cy.get('.modal-header').contains('Large');
        cy.get('.plan-feature-list > li').should('be.visible', 'contain.text', '3.000.000 requests per month');
        cy.get('.modal-footer > .btn').click({ force: true });
        cy.wait(500);
    });

    it('15. Test to Verify the "Features" button of Professional Monthly plan and should open the popup for Professional Monthly plan', () => {
        cy.get(':nth-child(5) > :nth-child(2) > .btn').contains('Features').click({ force: true });
        cy.get('.modal-header').contains('Professional');
        cy.get('.plan-feature-list > li').should('be.visible', 'contain.text', '5 000 000 requests per month');
        cy.wait(500);
        cy.get('.modal-footer > .btn').click({ force: true });
    });

    it('16. Test to toggle Yearly subscription plan', () => {
        cy.get('.btn-group > :nth-child(2)').contains('Yearly').click();
    });

    it('17. Test to Verify the Yearly Prices for the all subscriptions plans', () => {
        cy.get(':nth-child(1) > :nth-child(3) > .table-plan-text').contains('Free');
        cy.get(':nth-child(2) > :nth-child(3) > .table-plan-text').contains('$575.90 / Yearly');
        cy.get(':nth-child(3) > :nth-child(3) > .table-plan-text').contains('$959.90 / Yearly');
        cy.get(':nth-child(4) > :nth-child(3) > .table-plan-text').contains('$2,399.90 / Yearly');
        cy.get(':nth-child(5) > :nth-child(3) > .table-plan-text').contains('$3,359.90 / Yearly');
    });

    it('18. Test to Verify the "Features" button of the Free plan and should open the popup for free plan', () => {
        cy.get(':nth-child(1) > :nth-child(2) > .btn').contains('Features').click({ force: true });
        cy.get('.modal-header').contains('Free');
        cy.get('.plan-feature-list > li').should('be.visible', 'contain.text', '1.000 requests per month');
        cy.get('.modal-footer > .btn').click({ force: true });
        cy.wait(500);
    });

    it('19. Test to Verify the "Features" button of Small Yearly plan and should open the popup for Small Yearly plan', () => {
        cy.get(':nth-child(2) > :nth-child(2) > .btn').contains('Features').click({ force: true })
        cy.get('.modal-header').contains('Small Yearly');
        cy.get('.plan-feature-list > li').should('be.visible', 'contain.text', '250 000 requests per month');
        cy.get('.modal-footer > .btn').click({ force: true });
        cy.wait(500);
    });

    it('20. Test to Verify the "Features" button of Medium Yearly plan and should open the popup for Medium Yearly plan', () => {
        cy.get(':nth-child(3) > :nth-child(2) > .btn').contains('Features').click({ force: true });
        cy.get('.modal-header').contains('Medium');
        cy.get('.plan-feature-list > li').should('be.visible', 'contain.text', '1.000.000 requests per month');
        cy.get('.modal-footer > .btn').click({ force: true });
        cy.wait(500);
    });

    it('21. Test to Verify the "Features" button of Large Yearly plan and should open the popup for Large Yearly plan', () => {
        cy.get(':nth-child(4) > :nth-child(2) > .btn').contains('Features').click({ force: true });
        cy.get('.modal-header').contains('Large');
        cy.get('.plan-feature-list > li').should('be.visible', 'contain.text', '3.000.000 requests per month');
        cy.get('.modal-footer > .btn').click({ force: true });
        cy.wait(500);
    });

    it('22. Test to Verify the "Features" button of Professional Yearly plan and should open the popup for Professional Yearly plan', () => {
        cy.get(':nth-child(5) > :nth-child(2) > .btn').contains('Features').click({ force: true });
        cy.get('.modal-header').contains('Professional');
        cy.get('.plan-feature-list > li').should('be.visible', 'contain.text', '5 000 000 requests per month');
        cy.wait(500);
        cy.get('.modal-footer > .btn').click({ force: true });
    });

    it('23.Test to verify the Profile text is there or not', () => {
        cy.get('.card-header > span').should('contain.text', 'Profile');
    })

    it('24. Test to verify all the Profile fields are available', () => {
        cy.contains('Name').should('be.visible');
        cy.contains('E-Mail Address').should('be.visible');
        cy.contains('Password').should('be.visible');
        cy.contains('Confirm Password').should('be.visible');
        cy.contains('Address').should('be.visible');
        cy.contains('Address Line 2').should('be.visible');
        cy.contains('City').should('be.visible');
        cy.contains('State & ZIP / Postal Code').should('be.visible');
        cy.contains(' Country').should('be.visible');
    });

    it('25. Test to check the Biling section is there or not for the subscription plans', () => {
        cy.get(':nth-child(4) > .col-lg-8 > .card > .card-header').should('be.visible', 'contain.text', 'Billing Information - Secure Payment powered by Stripe');
    });

    it('26. Test to check the Cardholder Name and Card Number', () => {
        cy.get(':nth-child(4) > .col-lg-8 > .card > .card-body > form > :nth-child(1) > .col-md-4').should('be.visible').and('contain.text', "Cardholder's Name");
    });

    it('27. Test to select the free plan to register', () => {
        cy.get(':nth-child(1) > :nth-child(1) > .d-flex > .radio-select').click();
    });

    it('28. Tes to Validate All fields accept input', () => {
        cy.get(':nth-child(3) > .col-lg-8 > .card > .card-body > form > :nth-child(1) > .col-md-6 > .form-control').type('Test User');
        cy.get(':nth-child(2) > .col-md-6 > .form-control').type('Testuser2@gmail.com');
        cy.get(':nth-child(3) > .col-md-6 > .form-control').type('Password123!');
        cy.get(':nth-child(4) > .col-md-6 > .form-control').type('Password123!');
        cy.get(':nth-child(5) > .col-sm-6 > .form-control').type('New Road');
        cy.get(':nth-child(6) > .col-sm-6 > .form-control').type('Street food road');
        cy.get(':nth-child(7) > .col-sm-6 > .form-control').type('Bengaluru');
        cy.get(':nth-child(8) > :nth-child(2) > .form-control').type('KA');
        cy.get(':nth-child(3) > .form-control').type('10001');
        cy.get(':nth-child(9) > .col-sm-6 > .form-control').select('India');
    });

    xit('29. Test to  click on the Register button', () => {
        cy.get('.col-md-6 > .btn').click();
        cy.url().should('include', '/email/verify');
    });
});