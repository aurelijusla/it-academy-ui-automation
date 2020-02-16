/// <reference types='Cypress' />

import { Page } from './page';

export class AuthenticationPage extends Page {
    
    signIn(email, password) {
        cy.get('#email').type(email);
        cy.get('#passwd').type(password);
        return cy.get('#SubmitLogin').click();
    }
}