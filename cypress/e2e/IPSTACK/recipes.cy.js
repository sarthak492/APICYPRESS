describe('Contact Form Page', () => {
    before(() => {
        // Visit the contact form page before running any tests
        cy.visit('https://ipstack.com/');
    });

    it('1. Test to naviagate to the FAQs page', () => {
        cy.AcceptCookies();
        cy.get('.header > .container > ul > :nth-child(3) > a').click();
        cy.visit('https://ipstack.com/recipe');
    });
    it('2. Test to show the Recipes page', ()=> {
        cy.get(':nth-child(1) > .feature-blog-text > :nth-child(1) > .post_title').should('contain.text', 'Ipstack Fraud Detection Recipe');
    });
    it('3. Test to check the Recipes inner text available or not', ()=> {
        cy.get(':nth-child(2) > .feature-blog-text > :nth-child(1) > .post_title').should('contain.text', 'Leveraging IP Stack for Enhanced Technical Support: An Overview')
    });
    
    it('4. Test to check for the sidebar recipes text', () => {
        cy.get('.blog-sidebar-content-post').should('contain.text', 'Recipes')
    })
    it('5. Test to check for the home button recipes', () => {
        cy.get('p > [href="/"]').should('contain.text', 'Home');
    })
    it('6. Test to check for the receipes button', () => {
    cy.get('.posts_text').click();
    })
    it('7. Test to click on the footer link recipes', () => {
        cy.get('.custom-container > :nth-child(3) > :nth-child(6) > a').click();
    });
});
