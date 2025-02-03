/// <reference types="cypress" />

describe('login spec', () => {

  // Test failed to login
  it('should display invalid credentials if user or password is incorrect', () => {
    cy.login('abcdf$%$#423', 'qwerty');
    cy.get('div[role="alert"]', { timeout: 1000 }).should('contain', 'Invalid credentials');
  })


  // TODO: Add elements that must live in the login page


  // Test login as administrator
  it('Login as administrator', () => {
    cy.loginAsAdmin();
  });

})