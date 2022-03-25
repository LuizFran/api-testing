// verbo/metodo - endpoint - motivo (request)  estensao 

/// <reference types="cypress" />

function allBooks() {
    // cy.request - client http 
    return cy.request({
        method: 'GET',
        url: 'Books',
        failOnStatuscode: false,
    })

}

export { allBooks };