/// <reference types="cypress" />
var faker = require ('faker');

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.get('.icon-user-unfollow').click()
        cy.get('#reg_email').type(faker.internet.email())
      cy.get('#reg_password').type('Teste1@teste!#')
      cy.get(':nth-child(4) > .button').click()

       cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
       cy.get('#account_first_name').type(faker.name.firstName())
       cy.get('#account_last_name').type(faker.name.lastName())
      cy.get('#account_display_name').clear().type('Eu')

      cy.get('.woocommerce-Button').click()




       
   

    });
