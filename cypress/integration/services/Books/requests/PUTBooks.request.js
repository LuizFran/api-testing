/// <reference types="cypress" />

const payloadAllterBook = require('../payloads/allter-book.json')

function allterBook(idBook) {
    return cy.request({
        method: 'PUT',
        url: `Books/${idBook}`,
        headers: {
            "content-type": 'application/json ',
        },
        failOnStatusCode: false,
        body: payloadAllterBook
    })
}

export { allterBook };