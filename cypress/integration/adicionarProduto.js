/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
});

it('Adicionar Produtos no carrinho', () => {

    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get('[class="product-block grid"]')
    .contains('Aether Gym Pant').click()
    cy.get('.button-variable-item-33').click()
    cy.get('.button-variable-item-Brown').click()
    cy.get('.input-text').clear().type('1')
    cy.get('.single_add_to_cart_button').click()    
    cy.get('.woocommerce-message').should('contain', 'Aether Gym Pant” foi adicionado no seu carrinho.')
    
    
});
