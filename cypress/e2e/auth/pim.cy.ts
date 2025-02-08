describe('PIM specs', () => {

    beforeEach(() => {
        cy.loginAsAdmin();
    });

    it('Update password should validate required fields', () => {

        cy.get('li.oxd-userdropdown').click();
        cy.get('ul.oxd-dropdown-menu > li').eq(2).click();
        cy.url().should('contain', 'web/index.php/pim/updatePassword');
        
        // Try to click on save button
        cy.get('button[type="submit"]').click();

        // Validate all the fields are required. Error class should be added
        cy.get('input[type="password"]').each((inputField) => {
            expect(inputField.hasClass('oxd-input--error')).to.be.true;
        });

    });
});
