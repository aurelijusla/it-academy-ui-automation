/// <reference types="Cypress" />

describe('Basic actions', () => {
    it('should open the website', () => {
        cy.visit('')
    })

    it('should open "Contact us" page', () => {
        cy.get('#contact-link').click()
        cy.contains('Customer service - Contact us').should('be.visible')
    })
})