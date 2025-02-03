/// <reference types="cypress" />

const USER_API = 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/time-at-work*';

describe('login spec', () => {

  // Test failed to login
  it('should display invalid credentials if user or password is incorrect', () => {
    cy.login('abcdf$%$#423', 'qwerty');
    cy.get('div[role="alert"]', { timeout: 1000 }).should('contain', 'Invalid credentials');
  })

  // Test login as administrator
  it('Login as administrator', () => {
    cy.loginAsAdmin();

    cy.intercept('GET', USER_API).as('userApi');
    cy.wait('@userApi').then((response) => {
      expect(response?.response?.statusCode).to.equal(200);
    });

  });

})