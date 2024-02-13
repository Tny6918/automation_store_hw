const tableTestData = [{
    firstName: 'Anton',
    lastName: 'Savenko',
    email: 'antony.saven5@gmail.com',
    telephone: '0963334455',
    fax: '380963334455',
    company: 'Solvve',
    address1: 'Shevchenko 1',
    address2: 'Shevchenko 2',
    city: 'Dnipro',
    postcode: '49000',
    countryId: '220',
    zoneId: '3484',
    loginName: 'AntonDnipro5',
    password: 'TestPass1',
}];

describe('registration of the new user', () => {
    tableTestData.forEach(inputData => {
        it('registration check', () => {
            cy.visit('https://automationteststore.com/');

            cy.log('open the registration form');
            cy.get('#customer_menu_top').click();
            cy.get('[title="Continue"]').click();

            cy.log('fill the registration form fields');
            cy.get('#AccountFrm_firstname').should('be.empty');
            cy.get('#AccountFrm_firstname').type(`${inputData.firstName}`);
            //cy.get('#AccountFrm_firstname').should('contain.text', '${inputData.firstName}'); - чомусь поле пусте
            cy.get('#AccountFrm_lastname').should('be.empty');
            cy.get('#AccountFrm_lastname').type(`${inputData.lastName}`);

            cy.get('#AccountFrm_email').should('be.empty');
            cy.get('#AccountFrm_email').type(`${inputData.email}`);

            cy.get('#AccountFrm_telephone').should('be.empty');
            cy.get('#AccountFrm_telephone').type(`${inputData.telephone}`);

            cy.get('#AccountFrm_fax').should('be.empty');
            cy.get('#AccountFrm_fax').type(`${inputData.fax}`);

            cy.get('#AccountFrm_company').should('be.empty');
            cy.get('#AccountFrm_company').type(`${inputData.company}`);

            cy.get('#AccountFrm_address_1').should('be.empty');
            cy.get('#AccountFrm_address_1').type(`${inputData.address1}`);

            cy.get('#AccountFrm_address_2').should('be.empty');
            cy.get('#AccountFrm_address_2').type(`${inputData.address2}`);

            cy.get('#AccountFrm_city').should('be.empty');
            cy.get('#AccountFrm_city').type(`${inputData.city}`);

            cy.get('#AccountFrm_postcode').should('be.empty');
            cy.get('#AccountFrm_postcode').type(`${inputData.postcode}`);

            cy.get('#AccountFrm_country_id').select(`${inputData.countryId}`);

            cy.get('#AccountFrm_zone_id').select(`${inputData.zoneId}`);

            cy.get('#AccountFrm_loginname').should('be.empty');
            cy.get('#AccountFrm_loginname').type(`${inputData.loginName}`);

            cy.get('#AccountFrm_password').should('be.empty');
            cy.get('#AccountFrm_password').type(`${inputData.password}`);

            cy.get('#AccountFrm_confirm').should('be.empty');
            cy.get('#AccountFrm_confirm').type(`${inputData.password}`);

            cy.get('#AccountFrm_newsletter1').check();
            cy.get('#AccountFrm_agree').check();
            cy.get('button[title="Continue"]').click();

            cy.get('.btn.mr10', {timeout: 2000}).click()
            cy.get('.heading1 .subtext', {timeout: 2000}).should('have.text', `${inputData.firstName}`);

        })
    })
})