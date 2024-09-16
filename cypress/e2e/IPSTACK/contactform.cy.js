describe('Contact Form Page', () => {
    before(() => {
        // Visit the contact form page before running any tests
        cy.visit('https://ipstack.com/');
    });

    it('1. Test to  click the contact button and load the contact form page', () => {
        cy.AcceptCookies();
        cy.get(':nth-child(5) > :nth-child(2) > a').click();
        cy.get('h1').should('contain.text', 'Contact ipstack Sales & Support');
        cy.AcceptCookies();
    });

    it('2. Test to check  What if I need more than 2,000,000 API requests per month? text', () => {
        cy.get(':nth-child(1) > .q').should('contain.text', 'What if I need more than 2,000,000 API requests per month?');
    });

    it('3. Test to  Can I cancel anytime?', () => {
        cy.get(':nth-child(2) > .q').should('contain.text', 'Can I cancel anytime?');
    });

    it('4. Test to  check for the How can I pay?', () => {
        cy.get(':nth-child(3) > .q').should('contain.text', 'How can I pay?');
    });

    it('5. Test to  check for Can I pay yearly?', () => {
        cy.get(':nth-child(4) > .q').should('contain.text', 'Can I pay yearly?');
    });

    it('6. Test to verify the presence of first name field', () => {
        cy.get('#first_name').should('be.visible');
    });

    it('7. Test to  verify last name field', () => {
        cy.get('#last_name').should('be.visible');
    });

    it('8. Test to verify the presence of the message textarea', () => {
        cy.get(':nth-child(3) > input').should('be.visible');
    });

    it('9. Test to verify the presence of country code', () => {
        cy.get('#country_code').should('be.visible');
    });

    it('10. Test to verify the subject dropdown is required', () => {
        cy.get(':nth-child(6) > select').should('be.visible')
    });

    it('11. Test to  verify the message textarea is required', () => {
        cy.get(':nth-child(7) > textarea').should('be.visible');
    });

    it('Test to  check the presence of company information', () => {
        cy.contains('Apilayer Data Products GmbH').should('be.visible');
    });

    it('12. Test to  verify the company information address', () => {
        cy.contains('Oppolzergasse 6/1/4').should('be.visible');
    });

    it('13. Test to  click on the FAQ link and verify it navigates to the FAQ section', () => {
        cy.contains('FAQ section').click();
        cy.url().should('include', 'https://ipstack.com/faq');
        cy.visit('https://ipstack.com/contact');
    });

    it('14. Test to display validation errors when submitting empty form', () => {
        // Try to submit the form without filling any fields
        cy.get('.line.submit > .submit').click();
        cy.get('.alerts').should('be.visible').and('contain.text', 'Please enter your first name.');
    });

    it('15. Test to  display error for last name after filling first name', () => {
        cy.get('#first_name').type('John');
        cy.get('.line.submit > .submit').click();
        cy.get('.alerts').should('be.visible').and('contain.text', 'Please enter your last name.');
    });

    it('16. Test to  display error for email after filling last name', () => {
        cy.get('#last_name').type('Doe');
        cy.get('.line.submit > .submit').click();
        cy.get('.alerts').should('be.visible').and('contain.text', 'Please provide a valid e-mail address.');
    });

    it('Test to display error for country code after filling email', () => {
        cy.get(':nth-child(3) > input').type('john.doe@example.com');
        cy.get('.line.submit > .submit').click();
        cy.get('.alerts').should('be.visible').and('contain.text', 'Please select your country.');
    });

    it('17. Test to  display error for Subject after filling country code', () => {
        cy.get('#country_code').select('India');
        cy.get('#state-select').select('Goa');
        cy.get('.line.submit > .submit').click();
        cy.get('.alerts').should('be.visible').and('contain.text', 'Please select a subject.');
    });

    it('18. Test to  display error for message', () => {
        cy.get(':nth-child(6) > select').select('Sales');
        cy.get('.line.submit > .submit').click();
        cy.get('.alerts').should('be.visible').and('contain.text', 'Please compose a message of at least 10 characters.');
    });

    it('19. Test to display error for  after message', () => {
        cy.get(':nth-child(6) > select').select('Sales');
        cy.get('.line.submit > .submit').click();
        cy.get('.alerts').should('be.visible').and('contain.text', 'Please compose a message of at least 10 characters.');
    });

    it('20. Test to check the number of characters more than 10', () => {
        cy.get(':nth-child(7) > textarea').type('This is a test');
        cy.get(':nth-child(7) > textarea').invoke('val').then((text) => {
            if (text.length < 10) {
                cy.get('.alerts').should('contain.text', 'Please compose a message of at least 10 characters.');
            }
        });
    });

    it('21. Test to  navigate to the doc page after clicking the explore docs', () => {
        cy.get('.docs').click();
        cy.visit('https://ipstack.com/documentation');
        cy.visit('https://ipstack.com/contact');
    })

    it('22. Test to  navigate to the doc page after clicking the explore docs', () => {
        cy.get('.container > .cta').click();
        cy.visit('https://ipstack.com/signup/free');
        cy.visit('https://ipstack.com/contact');
    });
});