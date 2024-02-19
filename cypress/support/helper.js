import {fi} from "@faker-js/faker";

export function authorization(username = 'AntonDnipro5', password = 'TestPass1'){
    cy.log('Fill in authorization fields');
    cy.get('#loginFrm_loginname').type(username);
    cy.get('#loginFrm_password').type(password);
    cy.get('[title="Login"]').click();
}

export function findProduct (targetSelector) {
    cy.log('Search for products');
    cy.get('#filter_keyword').type('E');
    cy.get(' div [title="Go"]').click();

    cy.log('Locate the product');
    cy.get('body').then(body => {
        if (body.find(`[title="${targetSelector}"]`).length > 0) {
            cy.get(`[title="${targetSelector}"]`).click()
        } else {
            cy.get('.pagination li a').contains('>').click()
            findProduct(targetSelector);
        }
    })
}