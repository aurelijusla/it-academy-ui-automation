export class Page {
    get alertSuccess() {
        return cy.get('.alert-success')
    }

    clickSend() {
        return cy.contains("Send").click()
    }
}