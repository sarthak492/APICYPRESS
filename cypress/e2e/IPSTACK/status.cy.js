describe('Test Cases for IPstack status page.', () => {
    before(() => {
        cy.visit('https://status.ipstack.com/');
    });

    it('1.Test to Accept Cookies if not already accepted', () => {
        cy.AcceptCookies();
        // Check if the "Accept Cookies" button is visible or exists
        cy.get('body').then((body) => {
            if (body.find('.lcc-modal--alert').length > 0) {
                cy.get('.lcc-modal__actions > .js-lcc-accept').click(); // Click the button if it exists
                cy.log('Cookies accepted.');
            } else {
                cy.log('Cookies already accepted or not present.');
            }
        });
    });

    it('2.Test to check that the page title contains "Service status"', () => {
        cy.get('.uk-margin-remove').should('be.visible', 'contain.text', 'Service status');
    });

    it('3. Test to check that the status "All systems operational" is visible', () => {
        cy.get('.psp-main-status').contains('All systems operational').should('be.visible', 'contain', 'All systems operational');
    });

    it('4. Test to check the uptime graph text is visible', () => {
        cy.get('.uk-flex-between.uk-flex-middle > .uk-h3').should('be.visible', 'contain.text', 'Uptime');
    });

    it('5. Test to check the Calender button', () => {
        cy.get('.psp-calendar-link').should('be.visible');
    });

    it('6. Test to check the API stak.com text is there or not', () => {
        cy.get('.psp-monitor-name').should('be.visible', 'contain.text', 'api.ipstack.com');
    });

    it('7. Test to check the overall uptime for the last 24 hours is 100%', () => {
        cy.get('.uk-first-column > .uk-h4').should('contain.text', '100.000%');
    });

    it('8. Test to check the overall uptime for the last 7 days is 100%', () => {
        cy.get(':nth-child(2) > .uk-h4').should('contain.text', '100.000%');
    });

    it('9. Test to check the overall uptime for the last 30 days is 100.000%', () => {
        cy.get(':nth-child(3) > .uk-h4').should('contain.text', '100.000%');
    });

    it('10. Test to check the overall uptime for the last 90 days is 99.995%', () => {
        cy.get(':nth-child(4) > .uk-h4').should('contain.text', '99.995%');
    });

    it('11. Test to check the "Status updates" section is visible', () => {
        cy.get('.anouncement-header > .uk-h3').should('be.visible', 'contain.text', 'Status updates');
    });

    it('12. Test to check the "Status update history" link is visible and clickable', () => {
        cy.get('.announcement-empty > .psp-history-link').click();
        cy.wait(1000);
        cy.get('.uk-flex-between > .uk-margin-remove').should('be.visible', 'contain.text', 'Status update history');
        cy.go('back');
        cy.wait(500);
    });

    it('13. Test to check the "Full screen mode" button is visible', () => {
        cy.get('.enter-fullscreen').should('be.visible');
    });

    it('14. Test to check the "Alert Sound off" button is visible', () => {
        cy.get('.toggle-notif').should('be.visible');
    });

    it('15. Test to check the "Terms of Service" link is visible and clickable', () => {
        cy.get('[href="https://uptimerobot.com/terms"]').contains('Terms of Service').should('be.visible');
    });

    it('16. Test to check the Calender View button will open the calender or not', () => {
        cy.get('.psp-calendar-link').click();
        cy.visit('https://status.ipstack.com/780159446/calendar');
    });

    it('17. Test to check "api.ipstack.com history logs" text is there or not', () => {
        cy.get('.monitor-name').should('contain.text', 'api.ipstack.com history logs');
    });

    it('18. Test to check the choose container is there or not', () => {
        cy.get('#select2-calendar-monitor-chooser-container').should('be.visible', 'contain.text', 'api.ipstack.com');
    });

    it('19. Test to check for the selection dropdown clickable or not', () => {
        cy.get('.select2-selection__arrow').click();
    });

    it('20.Test to check the navigation calender availble or not', () => {
        cy.get('.psp-calendar-nav').should('be.visible');
    });

    it('21. Test to check the previous calender arrow button should be clickable', () => {
        cy.get('.calendar-prev > .icon').click();
    });

    it('22. Test to check the first date column is visible or not', () => {
        cy.get('.uk-first-column > table').should('be.visible');
    });

    it('23. Test to check the second date column is visible or not', () => {
        cy.get(':nth-child(2) > table').should('be.visible');
    });

    it('24. Test to check the third date column is avaible or not', () => {
        cy.get(':nth-child(1) > table').should('be.visible');
        cy.go('back');
    });
});