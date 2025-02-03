/// <reference types="cypress" />

describe('template spec', () => {


  // TODO: Test failed to login
  // TODO: Add elements that must live in the login page


  // Test login as administrator
  it('Login as administrator', () => {
    cy.loginAsAdmin();
  });
})