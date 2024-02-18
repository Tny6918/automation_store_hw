import user from '../fixtures/user.json';
import {faker} from '@faker-js/faker';

user.firstName = faker.person.firstName();
user.lastName = faker.person.lastName();
user.email = faker.internet.email({provider: 'example.fakerjs.dev', allowSpecialCharacters: false });
user.lastName = faker.internet.userName();

describe('registration of the new user', () => {
        it('registration check', () => {
            cy.visit('https://automationteststore.com/');

            cy.log('open the registration form');
            cy.get('#customer_menu_top').click();
            cy.get('[title="Continue"]').click();

            cy.log('fill the registration form fields');
            cy.get('#AccountFrm_firstname').should('be.empty');
            cy.get('#AccountFrm_firstname').type(user.firstName);
            //cy.get('#AccountFrm_firstname').should('contain.text', '${inputData.firstName}'); - чомусь поле пусте
            cy.get('#AccountFrm_lastname').should('be.empty');
            cy.get('#AccountFrm_lastname').type(user.lastName);

            cy.get('#AccountFrm_email').should('be.empty');
            cy.get('#AccountFrm_email').type(user.email);

            cy.get('#AccountFrm_telephone').should('be.empty');
            cy.get('#AccountFrm_telephone').type(user.telephone);

            cy.get('#AccountFrm_fax').should('be.empty');
            cy.get('#AccountFrm_fax').type(user.fax);

            cy.get('#AccountFrm_company').should('be.empty');
            cy.get('#AccountFrm_company').type(user.company);

            cy.get('#AccountFrm_address_1').should('be.empty');
            cy.get('#AccountFrm_address_1').type(user.address1);

            cy.get('#AccountFrm_address_2').should('be.empty');
            cy.get('#AccountFrm_address_2').type(user.address2);

            cy.get('#AccountFrm_city').should('be.empty');
            cy.get('#AccountFrm_city').type(user.city);

            cy.get('#AccountFrm_postcode').should('be.empty');
            cy.get('#AccountFrm_postcode').type(user.postcode);

            cy.get('#AccountFrm_country_id').select(user.countryId);

            cy.get('#AccountFrm_zone_id').select(user.zoneId);

            cy.get('#AccountFrm_loginname').should('be.empty');
            cy.get('#AccountFrm_loginname').type(user.lastName);

            cy.get('#AccountFrm_password').should('be.empty');
            cy.get('#AccountFrm_password').type(user.password);

            cy.get('#AccountFrm_confirm').should('be.empty');
            cy.get('#AccountFrm_confirm').type(user.password);

            cy.get('#AccountFrm_newsletter1').check();
            cy.get('#AccountFrm_agree').check();
            cy.get('button[title="Continue"]').click();

            cy.get('.btn.mr10', {timeout: 2000}).click()
            cy.get('.heading1 .subtext', {timeout: 2000}).should('have.text', `${inputData.firstName}`);

        })
})