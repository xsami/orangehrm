/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      /**
       * Custom command to log in to OrangeHRM.
       * @example cy.login('test', '$tr0ngPPass&97')
       */
      login(username: string, password: string): Chainable<void>;
      loginAsAdmin(): Chainable<void>;
      waitLoading(): Chainable<void>;
    }
  }