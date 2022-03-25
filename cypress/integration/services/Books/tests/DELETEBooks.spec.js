import * as DELETEBooks from '../requests/DELETEBooks.request';
import * as GETBooks from '../requests/GETBooks.request';
import * as POSTBooks from '../requests/POSTBooks.request';

describe('DELETE Books', () => {
    it('Deletar um livro', () => {
        GETBooks.allBooks().then((resAllBooks) => {
            //  cy.log(resAllBooks.body[0].id)  - consultando a lista de livros, que me retorne um id. para que eu possa seguir com o DELETE, garanto que existe dados.
            DELETEBooks.deleteBook(resAllBooks.body[0].id).should((resDeleteBook) => {
                expect(resDeleteBook.status).to.eq(200);
            })
        })
    })
});

it('Criar e excluir um livro', () => {
    POSTBooks.addBook().then((resAddBook) => {
        DELETEBooks.deleteBook(resAddBook.body.id).should((resDeleteBook) => { // retorna apenas um objeto da lista
            expect(resDeleteBook.status).to.eq(200)
        })
    })
});

