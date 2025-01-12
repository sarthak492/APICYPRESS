describe('Login Page Test Suite', () => {
  before(() => {
    cy.navigateUrlwithCookies('https://ipapi.com/login');
  });

  // Check if the login page loads correctly
  it('1. Test to click the login button and load the login page', () => {
    cy.get('.login > a').click();
    cy.get('h2').should('contain.text', 'Log in');
  });

  it('2. Test to display the login page', () => {
    cy.get('strong').should('contain.text', 'Log in');
  });

  it('3. Test to click the footer login button and load the login page', () => {
    cy.get('.custom-container > :nth-child(4) > :nth-child(2)').scrollIntoView();
  });

  it('4. Test to display the email input field', () => {
    cy.get('#email').should('be.visible');
  });

  it('5. Test to display the password input field', () => {
    cy.get('#password').should('be.visible');
  });

  it('6. Test to display the login button', () => {
    cy.get('.submit').should('be.visible');
  });

  it('7. Test to show an error for empty email and password', () => {
    cy.get('#email').clear();
    cy.get('#password').clear();
    cy.get('.submit').click();
    cy.get('.alerts') // Replace with the actual selector for error message
      .should('be.visible')
      .and('contain.text', 'Please enter your account email and password.');
  });

  it('8. Test to show an error for invalid email format', () => {
    cy.get('#email').type('invalid-email');
    cy.get('#password').type('password123');
    cy.get('.submit').click();
    cy.get('#email').clear(); // Clear the input for the next test
  });

  it('9. Test to show an error for incorrect password', () => {
    cy.get('#email').type('TestUserApiLayer@gmail.com');
    cy.get('#password').type('wrongpassword');
    cy.get('.submit').click();
    cy.get('.alerts') // Replace with the actual selector for error message
      .should('be.visible')
      .and('contain.text', 'Login failed. Please try again.');
  });

  it('10. Test to show an error for incorrect email', () => {
    cy.get('#email').clear().type('test@gmail.com');
    cy.get('#password').clear().type('tester@123');
    cy.get('.submit').click();
    cy.get('.alerts') // Replace with the actual selector for error message
      .should('be.visible')
      .and('contain.text', 'Login failed. Please try again.');
  });

  it('11. Test to check password field of type password', () => {
    cy.get('#password').should('have.attr', 'type', 'password');
  });

  it('12. Test to check for Forgot password', () => {
    cy.get('.forgot').click();
  })

  it('13. Test to load the Forgot Password page', () => {
    cy.get('strong').should('contain.text', 'Forgot Password');
  });

  it('14. Test to have the email input field', () => {
    cy.get('#email').should('be.visible');
  });

  it('15. Test to allow navigating back to login page', () => {
    cy.get('.log_in_instead').click();
    cy.url().should('include', '/login');
  });

  it('16. Test to login successfully with valid credentials', () => {
    cy.get('#email').clear().type('TestUserApiLayer@gmail.com');
    cy.get('#password').clear().type('tester@123');
    cy.get('.submit').click();
    cy.url().should('include', '/dashboard');
    cy.get('#sidebar').should('be.visible');
    cy.get(':nth-child(3) > .sidebar_header > a > .doc_inner').click();
  });
});