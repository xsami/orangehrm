import { NAV_BAR } from "../support/selectors";

const ADMIN_URL = 'web/index.php/admin/viewSystemUsers';
const USER_CREATE_URL = 'web/index.php/admin/saveSystemUser';

describe('Admin spec', () => {

    beforeEach(() => {
        cy.loginAsAdmin();
    });

    it('should open the create user and cancel the creation', () => {

        cy.get(NAV_BAR).first().click(); // Navigate to the first section. which has to be admin
        cy.url().should('contain', ADMIN_URL); // Validate you're in the right url

        // TODO: add id's for user create input
        cy.get('button').contains('Add').click();
        cy.url().should('contain', USER_CREATE_URL);
        cy.get('button').contains('Cancel').click();
    });
});