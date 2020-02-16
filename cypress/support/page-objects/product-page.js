/// <reference types='Cypress' />

import { Page } from './page'

export class ProductPage extends Page {

    get addedToCartSuccess() {
        return cy.contains('Product successfully added to your shopping cart');
    }
}