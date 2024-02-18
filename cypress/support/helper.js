export function authorization(username = 'AntonDnipro5', password = 'TestPass1'){
    cy.log('Fill in authorization fields');
    cy.get('#loginFrm_loginname').type(username);
    cy.get('#loginFrm_password').type(password);
    cy.get('[title="Login"]').click();
}

export function findProduct (targetSelector) {
    cy.log('Locate the product');
    cy.get('.contentpanel').then($container => {
        if ($container.find(targetSelector).length) {
            cy.get(targetSelector).click()
        } else {
            cy.log('product not found')
        }
    })
}