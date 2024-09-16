describe('Zenscrape Status page', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // Returning false here prevents Cypress from failing the test
        return false;
    });

    before(() => {
        cy.navigateUrlwithCookies('https://zenscrape.freshstatus.io/');
        cy.wait(2000);
    });

    it('1. Test to check for the All service Operational text is there or not', () => {
        cy.componentVisiblityCheck('.statusbar-text', 'All Services Operational');
    });

    it('2. Test to check for Zenscarpe webscrape text is there or not', () => {
        cy.componentVisiblityCheck('.page-description > p', 'Zenscrape | Web Scraping API');
    });

    it('3. Test to check the Operational option', () => {
        cy.componentVisiblityCheck(':nth-child(5) > .ComponentStatusListContainer > .operational', 'Operational');
    });

    it('4. Test to check Degraded Performance check', () => {
        cy.componentVisiblityCheck(':nth-child(5) > .ComponentStatusListContainer > .degraded', 'Degraded Performance');
    });

    it('5. Test to check Partial Outage Option', () => {
        cy.componentVisiblityCheck(':nth-child(5) > .ComponentStatusListContainer > .partial', 'Partial Outage');
    });

    it('6. Test to check the Major  Option', () => {
        cy.componentVisiblityCheck(':nth-child(5) > .ComponentStatusListContainer > .major', 'Major Outage');
    });

    it('7. Test to check the maintaince option', () => {
        cy.componentVisiblityCheck(':nth-child(5) > .ComponentStatusListContainer > .maintenance', ' Maintenance');
    });

    it('8. Test to check the Subscribe button is there or not', () => {
        cy.componentVisiblityCheck('.subscribe');
    });

    it('9. Test to check by clicing the Subscribe button', () => {
        cy.get('.subscribe').click();
    });

    it('10. Test to check the Email text,caption, Email input field, and the Subscribe button is there or not', () => {
        cy.wait(4000);
        cy.get('.popover.open').should('have.css', 'opacity', '1'); 
        cy.componentVisiblityCheck('.tab > .label');
        cy.componentVisiblityCheck('.styles__Message-sc-1ej8vf0-2');
        cy.componentVisiblityCheck('.Input__StyledInput-sc-44hm6r-0');
        cy.componentVisiblityCheck('.Button__StyledButton-sc-69l6ml-0')
    });

    xit('11. Test to enter the Email and click on the subscribe button', () => {
        cy.get('.Input__StyledInput-sc-44hm6r-0').type('Test2@gmail.com');
        cy.get('.Button__StyledButton-sc-69l6ml-0').click();
    });

    xit('12. Test to enter the Email and click on the subscribe button', () => {
        cy.componentVisiblityCheck('.title', 'One last step')
        cy.get('.Subscription__Redirection-sc-1lmxftv-4 > a').click();
    });

    it('13. Test to check the Login button is there or not', () => {
        cy.componentVisiblityCheck('.btn-group > .Link--primary')
    });

    it('14. Test to check cliking on Login button to show up the drop down list ', () => {
        cy.get('.btn-group > .Link--primary').click();
        cy.componentVisiblityCheck('[href="https://zenscrape.freshstatus.io/admin"]');
        cy.componentVisiblityCheck('[href="/login"]');
    });

    it('14. Test to check the 100% last day button is there or not and click on that link', () => {
        cy.componentVisiblityCheck('.history').click();
    });

    it('15. Test to check the Uptime history text', () => {
        cy.componentVisiblityCheck('h2', 'Uptime History');
    });

    it('16. Test to check Month picker is there or not', () => {
        cy.componentVisiblityCheck('.id__MonthPicker-sc-1fem2nn-2');
    });

    it('17. Test to check Month picker is there or not', () => {
        cy.componentVisiblityCheck('.id__DropdownButton-sc-1fem2nn-7');
    });

    it('18. Test to click on the back to status button', () => {
        cy.componentVisiblityCheck('.id__Breadcrumps-sc-1fem2nn-0').click();
    });

    it('19. Test to check the active tab button is there or not', () => {
        cy.componentVisiblityCheck('.active', 'Incident History');
    });

    it('20. Test to check the Upcoming Maintaince tab button is there or not', () => {
        cy.componentVisiblityCheck('.tab', 'Upcoming Maintenance');
    });

    it('21. Test to check the dropdown for days is there or not', () => {
        cy.componentVisiblityCheck('.dropdown_selected');
    });

    it('22. Test to check the Login button is there or not', () => {
        cy.componentVisiblityCheck('.pages__HomepageContent-sc-1g5814v-0 > .Link--primary', 'See Incident History');
    });

    it('23. Test to check the Inicident history button click', () => {
        cy.get('.pages__HomepageContent-sc-1g5814v-0 > .Link--primary').click();
    });

    it('24. Test to check incident history text is there or not', () => {
        cy.componentVisiblityCheck('.filter-panel > h2', 'Incidents History')
    });

    it('25. Test to check year drop down is there or not', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .btn-group > .dropdown_selected')
    });

    it('26. Test to check sort drop down is there or not', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .btn-group > .dropdown_selected')
    });

    it('27. Test to check Filter drop down is there or not', () => {
        cy.componentVisiblityCheck(':nth-child(1) > .btn-group > .dropdown_selected')
    });

    it('28. Test to check click on the back to status page', () => {
        cy.get('.IncidentHistory__Breadcrumps-sc-1shesrj-0').click();
    });

    it('29. Test to check Home icon present in the footer or not', () => {
        cy.componentVisiblityCheck('.www');
    });

    it('30. Test to check Home icon present in the footer or not', () => {
        cy.componentVisiblityCheck('.tz__control')
    });
});
