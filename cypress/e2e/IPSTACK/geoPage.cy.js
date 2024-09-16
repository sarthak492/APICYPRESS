/// <reference types="cypress" />

describe("Test for launch of IPSTACK Geo Page", function () {
    before(() => {
        cy.visit('https://ipstack.com/?utm_source=apilayermarketplace&utm_medium=featured');
    });

    describe("Test for launch of IPSTACK Geo Page from Featured APIS", function () {
        it("1. Test to load IPSTACK main page", () => {
            cy.AcceptCookies();
            cy.get('.hero_sec_heading').should('have.text', 'Locate and Identify\n                            Website Visitors by IP\n                            Address\n                        ');
            cy.get('.copyright-text > span').scrollIntoView();
            cy.AcceptCookies();
        })

        it("2. Test to select Get API Key", () => {
            cy.get('.options > :nth-child(1) > .cta').should('have.text', 'Get API Key');
            cy.get('.options > :nth-child(1) > .cta').click();
        });
    });

    describe("Test for pricing page details from toptoolbar", function () {
        it("3. Test to navigate to pricing page from toptollbar", () => {
            cy.get('ul > :nth-child(1) > a').click()
        })

        it("4. Test to check the choose text for yearly", () => {
            cy.get('.subscribe_text > :nth-child(1)').should('have.text', 'Choose annual billing and');
            cy.get('.blue-text').should('have.text', 'save up to 15%');
        })

        it("5. Test to check the price for free for yearly", () => {
            cy.get('.free > h3[data-type="price_yearly"]').should('have.text', '$0');
        })

        it("6. Test to check the price for basic for yearly", () => {
            cy.get('.basic > h3[data-type="price_yearly"]').should('have.text', '$11.99');
        })

        it("7. Test to check the price for professional for yearly", () => {
            cy.get('.professional > h3[data-type="price_yearly"]').should('have.text', '$52.99');
        })

        it("8. Test to check the price for professional plus for yearly", () => {
            cy.get('.professional_plus > h3[data-type="price_yearly"]').should('have.text', '$84.99');
        })

        it("9. Test to check the price for volume for yearly", () => {
            cy.get('.enterprise > h3[data-type="price_yearly"]').should('have.text', 'Volume');
        })

        it("10. Test to change pricing from yearly to monthly", () => {
            cy.get('.freq_changer').click();
        })
        it("11. Test to check the price for free for monthly", () => {
            cy.get('.free > h3[data-type="price_monthly"]').should('have.text', '$0');
        })

        it("12. Test to check the price for basic for monthly", () => {
            cy.get('.basic > h3[data-type="price_monthly"]').should('have.text', '$12.99');
        })

        it("13. Test to check the price for professional for monthly", () => {
            cy.get('.professional > h3[data-type="price_monthly"]').should('have.text', '$59.99');
        })

        it("14. Test to check the price for professional plus for monthly", () => {
            cy.get('.professional_plus > h3[data-type="price_monthly"]').should('have.text', '$99.99');
        })

        it("15. Test to check the price for volume for monthly", () => {
            cy.get('.enterprise > h3[data-type="price_monthly"]').should('have.text', 'Volume');
        })
    });

    describe("Test for documentation page details", function () {
        it("16. Test to naviagate to documentation page", () => {
            cy.get('.header > .container > ul > :nth-child(2) > a').click();
        })

        it("17. Test to navigate the page is navigated to documentation", () => {
            cy.get(':nth-child(1) > .heading').should('have.text', 'Getting Started');
        });

        it("18. Test to select API Access Key option from the left list under Getting Started", () => {
            cy.get('.sidebar > :nth-child(2) > a').click();
            cy.get('.content > :nth-child(2) > :nth-child(4)').should('be.visible');
            cy.get('.content > :nth-child(2) > :nth-child(4)').should('have.text', 'You can gain access to ipstack API by simpling adding your access_API_key in the based URL as a query parameter. For example,');
        })

        it("19. Test to select Billing Overages option under billing from left list of documentation", () => {
            cy.get(':nth-child(19) > a').click();
            cy.get('#billing-overages').should('be.visible');
            cy.get('#billing-overages').should('have.text', 'Business Continuity - API Overages');
        })

    });

    describe("Test for Recipes page details", function () {
        it("20. Test to naviagate to recipes page", () => {
            cy.get('.header > .container > ul > :nth-child(3) > a').click();
        });

        it("21. Test to verify recipes page is loaded", () => {
            cy.get('.blog-sidebar-content-post').should('be.visible');
            cy.get('.blog-sidebar-content-post').should('have.text', 'Recipes');
        });

        it("22. Test to select Ipstack Fraud Detection Recipe from recipes", () => {
            cy.get(':nth-child(1) > .feature-blog-text').click();

        });
    });

    describe("Test for FAQ page details", function () {
        it("23. Test to navigate to FAQ page from toptollbar", () => {
            cy.get('.header > .container > ul > :nth-child(4)').click();
        });

        it("24. Test to verify FAQ page is loaded", () => {
            cy.get('.faq-title').should('be.visible');
            cy.get('.faq-title').should('have.text', 'Frequently Asked Questions');
            cy.get('.hero_small > .container > p').should('have.text', 'View the most common questions people ask about ipstack.');
            cy.get('.contact > .container > .docs-contact-text').should('have.text', 'Any questions? Our team is here to help!');
            cy.get('.contact > .container > .docs-contact-btn > .button').should('have.text', 'Contact Support');
        });

        it("25. Test to load FAQ page completely ", () => {
            cy.get(':nth-child(8) > .label').scrollIntoView();
        });

        it("26. Test to verify Contact Support from FAQ page", () => {
            cy.get('.contact > .container > .docs-contact-btn > .button').click();
        });

        it("27. Test to Contact ipstack Sales & Support page", () => {
            cy.get('h1').should('be.visible');
            cy.get('h1').should('have.text', 'Contact ipstack Sales & Support');
            cy.get('.line.submit > .submit').scrollIntoView();
        });
    });

    describe("Test for Affiliates page details", function () {
        it("28. Test to navigate to Affiliates page from toptollbar", () => {
            cy.get('.header > .container > ul > :nth-child(5)').click();
        });
    });
});