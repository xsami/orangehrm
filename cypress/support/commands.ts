/// <reference types="cypress" />

Cypress.Commands.add('login', (username: string, password: string) => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('loginAsAdmin', () => {

    cy.fixture('admin_user').then(({username, password}) => {
        cy.login(username, password);
    });
});
