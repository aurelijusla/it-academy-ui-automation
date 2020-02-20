/// <reference types='Cypress' />

describe('Basic actions', () => {
    it('should open "Contact us" page', () => {
        cy.visit('');
        cy.get('#contact-link').click();
        cy.contains('Customer service - Contact us').should('be.visible');
    });
});