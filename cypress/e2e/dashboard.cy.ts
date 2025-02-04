describe('Dashboard spec', () => {

    beforeEach(() => {
        cy.loginAsAdmin();
    });


    it('should display a navbar when the dashboard loads', () => {
        // Initial check: Verify there are 12 navigation elements
        cy.get('ul.oxd-main-menu > li').its('length').should('eq', 12);

        // Lood all the options in the menu
        cy.fixture('nav_menu').then(({menu}) => {
            cy.get('ul.oxd-main-menu > li').then((htmlItem) => {
                const items = [...htmlItem].map(e => e.innerText.trim());
                expect(items).to.deep.equal(menu);
            });
            
        });
      
        // Perform the search
        cy.get('input[placeholder="Search"]').type('ad');
      
        // Re-query the DOM after the search filter is applied
        cy.get('ul.oxd-main-menu > li').its('length').should('eq', 1);
        cy.get('ul.oxd-main-menu > li > a > span').should(($span) => {
            expect($span).to.contain('Admin');
        });
      });
})