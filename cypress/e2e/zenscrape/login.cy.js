describe('Zenscrape Login Page  ', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });

  before(() => {
    cy.navigateUrlwithCookies('https://app.zenscrape.com/login');
  });

  it('1. Test to display the login page', () => {
    cy.get('.card-header').should('contain.text', 'Login');
  });

  it('2. Test to display the email input field', () => {
    cy.get(':nth-child(2) > .col-md-6 > .form-control').should('be.visible');
  });

  it('3. Test to display the password input field', () => {
    cy.get(':nth-child(3) > .col-md-6 > .form-control').should('be.visible');
  });

  it('4. Test to display the login button', () => {
    cy.get('.btn-primary').should('be.visible');
  });

  it('5. Test to show an error for empty email and password', () => {
    cy.get(':nth-child(2) > .col-md-6 > .form-control').clear();
    cy.get(':nth-child(3) > .col-md-6 > .form-control').clear();
    cy.get('.btn-primary').click();
    cy.get('.alert')
      .should('be.visible')
      .and('contain.text', 'Whoops! Something went wrong!');
    cy.get('.alert > ul > :nth-child(1)').should('be.visible', 'The email field is required.');
    cy.get('.alert > ul > :nth-child(2)').should('be.visible', 'The password field is required.');
  });

  it('6. Test to show an error for invalid email format', () => {
    cy.get(':nth-child(2) > .col-md-6 > .form-control').type('invalid-email');
    cy.get(':nth-child(3) > .col-md-6 > .form-control').type('password123');
    cy.get('.btn-primary').click();
    cy.get('.alert').should('be.visible').and('contain.text', 'Whoops! Something went wrong!');
    cy.get('.alert > ul > :nth-child(1)').should('be.visible', 'The email field is required.');
    cy.get('.alert > ul > :nth-child(2)').should('be.visible', 'The password field is required.');
  });

  it('7. Test to show an error for incorrect password', () => {
    cy.get(':nth-child(2) > .col-md-6 > .form-control').type('TestUserApiLayer@gmail.com');
    cy.get(':nth-child(3) > .col-md-6 > .form-control').type('wrongpassword');
    cy.get('.btn-primary').click();
    cy.get('.alert').should('be.visible').and('contain.text', 'Whoops! Something went wrong!');
    cy.get('.alert > ul > li').should('be.visible', 'These credentials do not match our records');
  });

  it('8. Test to show an error for incorrect email', () => {
    cy.get(':nth-child(2) > .col-md-6 > .form-control').clear().type('testinvalid@gmail.com');
    cy.get(':nth-child(3) > .col-md-6 > .form-control').clear().type('Test@123');
    cy.get('.btn-primary').click();
    cy.get('.alert').should('be.visible').and('contain.text', 'Whoops! Something went wrong!');
    cy.get('.alert > ul > li').should('be.visible', 'These credentials do not match our records');
  });

  it('9. Test to check password field of type password', () => {
    cy.get(':nth-child(3) > .col-md-6 > .form-control').should('have.attr', 'type', 'password');
  });

  it('10. Test to check for Forgot password', () => {
    cy.get('.btn-link').click();
    cy.navigateUrlwithCookies('https://app.zenscrape.com/password/reset');
  })

  it('11. Test to load the Forgot Password page', () => {
    cy.get('.card-header').should('contain.text', 'Reset Password');
  });

  it('12.Test to have the email input field', () => {
    cy.get('.form-control').should('be.visible');
  });

  it('13. Test to allow navigating back to login page', () => {
    cy.navigateUrlwithCookies('https://app.zenscrape.com/login');
  });
});
