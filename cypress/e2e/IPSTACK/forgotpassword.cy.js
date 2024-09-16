describe('Forgot password page', () => {
    before(() => {
        // Visit the login page before running any tests
        cy.visit('https://ipstack.com/');
    });

    it('1. Test to click the forgot password button and load the forgot password page', () => {
        cy.AcceptCookies();
        cy.get(':nth-child(4) > :nth-child(3) > a').click();
        cy.get('strong').should('contain.text', 'Forgot Password');
        cy.AcceptCookies();
    });

    it('2. Test to load the Forgot Password page', () => {
        cy.get('strong').should('contain.text', 'Forgot Password');
    });

    it('3. Test to have the email input field', () => {
        cy.get('#email').should('be.visible');
    });

    it('4. Test to check if email field is empty and not proceed', () => {
        cy.get('#email').clear();
        cy.get('.submit').click();
        // Assuming there's an error message for empty input
        cy.get('.alerts').should('be.visible').and('contain.text', 'Please enter your account e-mail address.');
    });

    it('5. Test to display an error for non-registered email', () => {
        cy.get('#email').clear().type('yjk@gmail.com');
        cy.get('.submit').click();
        // Assuming there's an error message or validation text
        cy.get('.alerts').should('be.visible').and('contain.text', 'Update has failed with the following error: The submitted credentials are not connected to an existing user.');
    });

    it('6. Test to display success message when a valid email is submitted', () => {
        cy.get('#email').clear().type('TestUserApiLayer@gmail.com');
        cy.get('.submit').click();
        // Assuming a success message is displayed
        cy.get('.success').should('contain.text', 'An email containing password reset instructions has been sent to your email address.');
    });

    it('7. Test to allow navigating back to login page', () => {
        cy.get('.log_in_instead').click();
        cy.url().should('include', '/login');
    });

    it('8. Test to redirect to the Forgot Password page when clicking the footer link', () => {
        // Click the "Forgot Password" link in the footer
        cy.get(':nth-child(4) > :nth-child(3) > a').click();
        // Verify that the URL includes '/forgot'
        cy.url().should('include', '/forgot');
        cy.get('strong').should('contain.text', 'Forgot Password');
        cy.get('#email').should('be.visible');
    });

});
