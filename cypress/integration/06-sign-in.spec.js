/// <reference types='Cypress' />

import { Page } from '../support/page-objects/page';
import { AuthenticationPage } from '../support/page-objects/authentication-page';
import { TestData } from '../support/test-data/test-data';

describe('Buying an item', () => {
    let page = new Page();
    let authenticationPage = new AuthenticationPage();
    let testData = new TestData();

    beforeEach(() => {
        cy.visit('');
        page.clickSignIn();
        authenticationPage.signIn(testData.emailAddress, testData.password);
    });
});