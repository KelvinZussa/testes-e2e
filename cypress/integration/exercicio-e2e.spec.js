/// <reference types="cypress" />
var faker = require('faker');

import Checkout from "../support/page_objects/Carrinho.page";


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        let emailFaker2 = faker.internet.email()
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        cy.Registro(emailFaker2, 'Teste1@teste!#', nomeFaker, sobrenomeFaker)


        cy.adicionarProduto('Aether Gym Pant', '33', 'Brown', 2)
        cy.adicionarProduto('Ajax Full-Zip Sweatshirt', 'S', 'Green', 2)
        cy.adicionarProduto('Ariel Roll Sleeve Sweatshirt', 'M', 'Green', 2)
        cy.adicionarProduto('Aero Daily Fitness Tee', 'L', 'Yellow', 1)

        cy.get('.top-cart-wishlist').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        
        cy.get('.details-review').should('contain', 'Aether Gym Pant')
        .should('contain', 'Ajax Full-Zip Sweatshirt')
        .should('contain', 'Ariel Roll Sleeve Sweatshirt')
        .should('contain', 'Aero Daily Fitness Tee')

        Checkout.fazerCheckout(nomeFaker, sobrenomeFaker, 'Minha empresa', 'Brasil', 'Rua das lagoas', '345', 'Curitiba', 'Paraná', '81250000', '41999999999', emailFaker2)
                 
        cy.get('.woocommerce-customer-details').should('contain','Minha empresa')
        .should('contain','Rua das lagoas')
        .should('contain','345')
        .should('contain','Curitiba')
        .should('contain','81250-000')
        .should('contain','41999999999')


    });





});



