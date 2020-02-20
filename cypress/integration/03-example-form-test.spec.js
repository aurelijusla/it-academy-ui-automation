/// <reference types='Cypress' />

describe('Example form test', () => {
    beforeEach(() => {
        cy.visit('/index.php?controller=contact');
    });

    it('should send a customer service message', () => {
        cy.get("#id_contact").select('Customer service');
        cy.get("#email").type('random@randomemail.com');
        cy.get("#id_order").type('12345');
        cy.get("textarea").type('Hello, I am an alien');
        cy.contains("Send").click();
        cy.get('.alert-success').should('be.visible');
    });
});