/// <reference types="Cypress" />

import { ContactUsPage } from '../support/page-objects/contact-us-page'
import { TestData } from '../support/test-data/test-data'

describe('Basic actions', () => {
    let contactUsPage = new ContactUsPage();
    let testData = new TestData();

    beforeEach(() => {
        cy.visit('/index.php?controller=contact')
    })

    it('should select first item in dropdown', () => {
        contactUsPage.selectSubjectHeading('Customer service');
        contactUsPage.insertEmailAddress(testData.emailAddress);
        contactUsPage.insertOrderId(testData.orderId);
        contactUsPage.insertMessage(testData.message);
        contactUsPage.clickSend();
        contactUsPage.alertSuccess.should('be.visible')
    })
})