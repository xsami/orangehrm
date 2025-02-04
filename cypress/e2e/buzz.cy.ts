// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import { NAV_BAR, POST_INPUT, POST_FEED } from "../support/selectors";

const BUZZ_URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz';

describe('Buzz spec', () => {

    beforeEach(() => {
        cy.loginAsAdmin();
    });

    it('should redirect to buzz and post in the thread and remove it', () => {
        const newId = uuidv4();
        const notes = `This is a sample text for a post. QA test validation! ${newId}`;

        cy.get(NAV_BAR).last().click(); // Navigate to the last section. which has to be Buzz
        cy.url().should('eq', BUZZ_URL); // Validate you're in the right url

        // We need to wait until the feed api load, before we decide to commit a post
        cy.wait(1000); // TODO: we need to improve this test... maybe wait until loading spinner finishes
        // We notice some flickering in the page. Maybe there's a reload of the screen the first time it loads.

        cy.get(POST_INPUT).type(notes); // Type the new value and submit the post
        cy.get('button[type="submit"]').click();

        // TODO: validate API call to create
        cy.get(POST_FEED).first().should('contain.text', notes); // Validate the first post must be ours

        cy.get('.orangehrm-buzz-post-header-config').first().click();
        cy.get('ul[role="menu"] > li').first().click(); // first element should be the remove item.
        // last element is the delete button. Fire click event
        cy.get('.orangehrm-modal-footer > button').last().click(); 

        // TODO: validate API call to delete
        cy.get(POST_FEED).first().should('not.contain.text', notes); // Validate the post has been removed
    });

});
