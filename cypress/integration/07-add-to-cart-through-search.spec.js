/// <reference types='Cypress' />

import { Page } from '../support/page-objects/page';
import { AuthenticationPage } from '../support/page-objects/authentication-page';
import { ProductPage } from '../support/page-objects/product-page';
import { TestData } from '../support/test-data/test-data';

describe('Buying an item', () => {
    let page = new Page();
    let authenticationPage = new AuthenticationPage();
    let productPage = new ProductPage();
    let testData = new TestData();

    beforeEach(() => {
        cy.visit('');
        page.clickSignIn();
        authenticationPage.signIn(testData.emailAddress, testData.password);
    });

    it('should add an item to cart through search bar', () => {
        page.insertSearchItem(testData.item);
        page.clickFirstItem();
        productPage.clickAddToCart();
        productPage.addedToCartSuccess.should('be.visible');
    });
});