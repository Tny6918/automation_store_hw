import user from '../fixtures/user.json'
import {authorization} from '../support/helper'
import {findProduct} from "../support/helper";

describe('Order suite', () => {
    it('Order from the homepage', () => {
        cy.log('Open authorization form');
        cy.visit('/index.php?rt=account/login');

        authorization();

        cy.log('User first name should be on page');
        cy.get('.heading1 .subtext').should('contain', user.firstName);

        cy.log('check if the product is available');

        cy.log('Search for products');
        cy.get('#filter_keyword').type('E');
        cy.get(' div [title="Go"]').click();

        findProduct(`[title = "Eye master"]`);

        cy.get('[class="bgnone"]').should('have.text', 'Eye master');

    })
})