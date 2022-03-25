import * as PUTBooks from '../requests/PUTBooks.request';
import * as GETBooks from '../requests/GETBooks.request';
import * as POSTBooks from '../requests/POSTBooks.request';

describe('PUT Books', () => {
    it('Alter um livro', () => {
        GETBooks.allBooks().then((resAllBooks) => {
            PUTBooks.allterBook(resAllBooks.body[0].id).should((resAllterBook) => {
                expect(resAllterBook.status).to.eq(200);
                expect(resAllterBook.body).to.be.not.null;
                expect(resAllterBook.body.title).to.eq('Livro Alterado');
            })
        })
    });
    it('Criar e alterar um livro', () => {
        POSTBooks.addBook().then((resAddBook) => {
            PUTBooks.allterBook(resAddBook.body.id).should((resAllterBook) => {
                expect(resAllterBook.status).to.eq(200);
                expect(resAllterBook.body).to.be.not.null;
                expect(resAllterBook.body.title).to.eq('Livro Alterado');
            })
        })
    });

});

