/// <reference types='Cypress' />

import { Page } from '../support/page-objects/page';
import { AuthenticationPage } from '../support/page-objects/authentication-page';
import { ProductPage } from '../support/page-objects/product-page';
import { ShoppingCartSummaryPage } from '../support/page-objects/shopping-cart-summary-page';
import { TestData } from '../support/test-data/test-data';

describe('Buying an item', () => {
    let page = new Page();
    let authenticationPage = new AuthenticationPage();
    let productPage = new ProductPage();
    let shoppingCartSummaryPage = new ShoppingCartSummaryPage();
    let testData = new TestData();

    beforeEach(() => {
        cy.visit('');
        page.clickSignIn();
        authenticationPage.signIn(testData.emailAddress, testData.password);
    })

    it('should add an item to cart through search bar', () => {
        page.insertSearchItem(testData.item);
        page.clickFirstItem();
        productPage.clickAddToCart();
        productPage.addedToCartSuccess.should('be.visible');
    })

    it('should buy items in cart', () => {
        page.clickHeaderLogo();
        page.clickAddToCart();
        page.clickCross();
        page.clickCheckOut();
        shoppingCartSummaryPage.clickProceed();
        shoppingCartSummaryPage.clickProceed2();
        shoppingCartSummaryPage.clickTermsCheckbox();
        shoppingCartSummaryPage.clickProceed2();
        shoppingCartSummaryPage.clickPayByBankWire();
        shoppingCartSummaryPage.clickConfirm();
        shoppingCartSummaryPage.orderComplete.should('be.visible');
    })
})