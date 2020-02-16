/// <reference types='Cypress' />

import { Page } from './page'

export class ContactUsPage extends Page {
    
    // 1st way
    /*
    selectCustomerServiceSubjectHeading() {
        return cy.get("#id_contact").select('Customer service')
    }

    selectWebmasterSubjectHeading() {
        return cy.get("#id_contact").select('Webmaster')
    }

    selectNoSubjectHeading() {
        return cy.get("#id_contact").select('-- Choose --')
    }
    */

    // 2nd way
    selectSubjectHeading(subjectHeading) {
        return cy.get('#id_contact').select(`${subjectHeading}`)
    }

    insertEmailAddress(emailAddress) {
        return cy.get('#email').type(emailAddress)
    }

    insertOrderId(orderId) {
        return cy.get('#id_order').type(orderId)
    }

    insertMessage(message) {
        return cy.get('textarea').type(message)
    }

    // Let's say we can reuse this element in other pages
    /*
    clickSend() {
        return cy.contains("Send").click()
    }
    */
}