/// <reference types='Cypress' />

import { Page } from './page'

export class ShoppingCartSummaryPage extends Page {
    get orderComplete() {
        return cy.contains('Your order on My Store is complete.');
    }

    clickProceed() {
        return cy.get('[title="Proceed to checkout"]').eq(1).click();
    }

    clickProceed2() {
        return cy.get('[type="submit"]').contains('Proceed to checkout').click();
    }

    clickTermsCheckbox() {
        return cy.get('#cgv').click();
    }

    clickPayByBankWire() {
        return cy.get('[title="Pay by bank wire"]').click();
    }

    clickConfirm() {
        return cy.get('button').contains('I confirm my order').click();
    }
}