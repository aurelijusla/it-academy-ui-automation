/// <reference types='Cypress' />

export class Page {
    get alertSuccess() {
        return cy.get('.alert-success');
    }

    clickSend() {
        return cy.contains('Send').click();
    }

    clickSignIn() {
        return cy.contains('Sign in').click();
    }

    insertSearchItem(item) {
        return cy.get('#search_query_top').type(item);
    }

    clickFirstItem() {
        return cy.get('.ac_even').first().click();
    }

    clickCheckOut() {
        return cy.contains('Check out').click({force: true});
    }

    clickAddToCart() {
        return cy.contains('Add to cart').click({force: true});
    }

    clickHeaderLogo() {
        cy.get('#header_logo').click();
    }

    clickCross() {
        cy.get('.cross').click();
    }
}