describe('Pricing page', () => {
    before(() => {
        // Visit the contact form page before running any tests
        cy.visit('https://ipstack.com');
    });

    it('1.Test to navigate to the Pricing page', () => {
        cy.AcceptCookies();
        cy.get('ul > :nth-child(1) > a').click();
        cy.visit('https://ipstack.com/product');
    });

    it('2.Test to check the presence of Pricing text', () => {
        // Check for the presence of Pricing
        cy.get('.pricing_top_heading').should('be.visible', 'contain.text', 'Pricing');
    });

    it('3.Test to check the presence of the toggle field', () => {
        // Check for the presence of all pricing cards
        cy.get('.toggle').should('be.visible');
    });

    it('4.Test to check the monthly toggle field', () => {
        // Check for the presence of all pricing cards
        cy.get('.toggle > :nth-child(1)').should('be.visible');
    });

    it('5.Test to check the Yearly toggle field', () => {
        // Check for the presence of all pricing cards
        cy.get('.toggle > :nth-child(2)').should('be.visible');
    });

    it('6.Test to check the frequntly changer toggle field', () => {
        // Check for the presence of all pricing cards
        cy.get('.freq_changer').should('be.visible');
    });

    it('7.Test to check the subscribe text', () => {
        cy.get('.subscribe_text > :nth-child(1)').should('contain.text', 'Choose annual billing and');
    });

    it('8.Test to check the subscribe blue text', () => {
        cy.get('.blue-text').should('be.visible', 'contain.text', 'save up to 15%.');
    });

    it('9.Test to chek the Free plan', () => {
        cy.get('.free > .heading > .price_title').should('be.visible', 'contain.text', 'FREE');
        cy.get('.free > h3[data-type="price_yearly"]').should('be.visible', 'contain.text', '$0');
    });

    it('10.Test to chek the Basic plan', () => {
        cy.get('.basic > .heading > .price_title').should('be.visible', 'contain.text', 'BASIC');
        cy.get('.basic > h3[data-type="price_yearly"]').should('be.visible', 'contain.text', '$11.99');
    });

    it('11.Test to chek the Professional plus plan', () => {
        cy.get('.heading > .price_title_professional').should('be.visible', 'contain.text', 'PROFESSIONAL');
        cy.get('.professional > h3[data-type="price_yearly"]').should('be.visible', 'contain.text', '$52.99');
    });

    it('12.Test to chek the Enterprice plan', () => {
        cy.get('.professional_plus > .heading > .price_title').should('be.visible', 'contain.text', 'PROFESSIONAL PLUS');
        cy.get('.professional_plus > h3[data-type="price_yearly"]').should('be.visible', 'contain.text', '$84.99');
    });

    it('13.Test to chek the Enterprice plan', () => {
        cy.get('.enterprise > .heading > .price_title').should('be.visible', 'contain.text', 'ENTERPRISE');
        cy.get('.enterprise > h3[data-type="price_yearly"]').should('be.visible', 'contain.text', 'Volume');
    });

    it('14.Test to check the Free plan features', () => {
        cy.get('.free > .features').should('contain.text', '100 Requests / mo')
            .and('contain.text', 'No Support')
            .and('contain.text', 'Location Module')
            .and('contain.text', ' Encryption');
    });

    it('15.Test to check the features in the Basic plan', () => {
        cy.get('.basic > .features').should('contain.text', '50,000 Requests / mo')
            .and('contain.text', 'Standard Support')
            .and('contain.text', 'Location Module')
            .and('contain.text', 'SSL Encryption')
            .and('contain.text', 'Currency Module')
            .and('contain.text', 'Time Zone Module')
            .and('contain.text', 'Connection Module');
    });

    it('16. Test to check the features in the Professional plan', () => {
        // Directly target the .professional > .features selector and verify its content
        cy.get('.professional > .features').should('contain.text', '500,000 Requests / mo')
            .and('contain.text', 'Standard Support')
            .and('contain.text', 'Location Module')
            .and('contain.text', 'SSL Encryption')
            .and('contain.text', 'Currency Module')
            .and('contain.text', 'Time Zone Module')
            .and('contain.text', 'Connection Module')
            .and('contain.text', 'Bulk Endpoint');
    });

    it('17. Test to check the features in the Professional Plus plan', () => {
        // Directly target the .professional_plus > .features selector and verify its content
        cy.get('.professional_plus > .features').should('contain.text', '2,000,000 Requests / mo')
            .and('contain.text', 'Standard Support')
            .and('contain.text', 'Location Module')
            .and('contain.text', 'SSL Encryption')
            .and('contain.text', 'Currency Module')
            .and('contain.text', 'Time Zone Module')
            .and('contain.text', 'Connection Module')
            .and('contain.text', 'Bulk Endpoint')
            .and('contain.text', 'Security Module');
    });

    it('18. Test to check the features in the Enterprise plan', () => {
        // Directly target the .enterprise > .features selector and verify its content
        cy.get('.enterprise > .features').should('contain.text', 'Any requests volume you need')
            .and('contain.text', 'Location Module')
            .and('contain.text', 'SSL Encryption')
            .and('contain.text', 'Currency Module')
            .and('contain.text', 'Time Zone Module')
            .and('contain.text', 'Connection Module')
            .and('contain.text', 'Bulk Endpoint')
            .and('contain.text', 'Security Module')
            .and('contain.text', 'Custom Solutions');
    });

    it('19. Toggle the subscription button to monthly', () => {
        cy.get('.freq_changer').click();
    });

    it('20.Test to chek the Free plan', () => {
        cy.get('.free > .heading > .price_title').should('be.visible', 'contain.text', 'FREE');
        cy.get('.free > h3[data-type="price_monthly"]').should('be.visible', 'contain.text', '$0');
    });

    it('21.Test to chek the Basic plan', () => {
        cy.get('.basic > .heading > .price_title').should('be.visible', 'contain.text', 'BASIC');
        cy.get('.basic > h3[data-type="price_monthly"]').should('be.visible', 'contain.text', '$12.99');
    });

    it('22.Test to chek the Professional plus plan', () => {
        cy.get('.heading > .price_title_professional').should('be.visible', 'contain.text', 'PROFESSIONAL');
        cy.get('.professional > h3[data-type="price_monthly"]').should('be.visible', 'contain.text', '$59.99');
    });

    it('23.Test to chek the Enterprice plan', () => {
        cy.get('.professional_plus > .heading > .price_title').should('be.visible', 'contain.text', 'PROFESSIONAL PLUS');
        cy.get('.professional_plus > h3[data-type="price_monthly"]').should('be.visible', 'contain.text', '$99.99');
    });

    it('24.Test to chek the Enterprice plan', () => {
        cy.get('.enterprise > .heading > .price_title').should('be.visible', 'contain.text', 'ENTERPRISE');
        cy.get('.enterprise > h3[data-type="price_monthly"]').should('be.visible', 'contain.text', 'Volume');
    });

    it('25.Test to chek Platinum Support! button is there or not', () => {
        cy.get('.platinum_right_section > h3').should('be.visible', 'contain.text', 'Platinum Support!');
    });

    it('26.Test to check platinum support button click', () => {
        cy.get('.platinum_right_section > div').should('be.visible').click();
        cy.visit('https://ipstack.com/documentation#support-section');
        cy.go('back');
    });

    it('27. Test to check Get free api key button', () => {
        cy.get('.free > .button').should('be.visible', 'contain.text', 'GET FREE API KEY').click();
        cy.visit('https://ipstack.com/signup/free');
        cy.go('back');
    });

    it('29. Test to check Basic plan sign up button', () => {
        cy.get('.basic > .button').should('be.visible', 'contain.text', 'SIGN UP').click();
        cy.visit('https://ipstack.com/signup/basic');
        cy.go('back');
    });

    it('30. Test to check  Professional plan sign up button', () => {
        cy.get('.professional > .button').should('be.visible', 'contain.text', 'SIGN UP').click();
        cy.visit('https://ipstack.com/signup/pro');
        cy.go('back');
    });

    it('31. Test to check  Professional plus plan sign up button', () => {
        cy.get('.professional_plus > .button').should('be.visible', 'contain.text', 'SIGN UP').click();
        cy.visit('https://ipstack.com/signup/proplus');
        cy.go('back');
    });

    xit('32. Test to check  Enterprise plan sign up button', () => {
        cy.get('.enterprise > .button').should('be.visible', 'contain.text', 'CONTACT US').click();
        cy.visit("https://ipstack.com/contact");
        cy.go('back');
    });
});