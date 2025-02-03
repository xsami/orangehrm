describe('Reset password spec', () => {


    it('should display a reset password message if the user exist', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
        cy.get('input[name="username"]').type('admin');
        cy.get('button[type="submit"]').click();

        // will redirect. we need to validate the message in the screen.
        cy.get('h6').should('contain', 'Reset Password link sent successfully');
    })
})