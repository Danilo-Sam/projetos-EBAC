/// <reference types="cypress" />

describe('Testes para as funcionalidades', () => {

    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar um novo contato', () => {
        const nome = 'Danilo Brito'
        const telefone = '83 999098837'
        const email = 'exemplo@exemplo.com'

        cy.get('[type="text"]').type(nome)
        cy.get('[type="email"]').type(email)
        cy.get('[type="tel"]').type(telefone)

        cy.contains('Adicionar').click()

        cy.contains(nome).should('exist')
        cy.contains(telefone).should('exist')
        cy.contains(email).should('exist')
    })

    it('Deve editar um contato existente', () => {
        cy.get('.sc-beqWaB.contato')
            .first()
            .within(() => {
                cy.get('button.edit').click();
            });

        const novoNome = 'Danilo Sampaio';
        const novoTelefone = '9999999999';
        const novoEmail = 'novoemail@email.com';

        cy.get('[type="text"]').first().clear().type(novoNome);
        cy.get('[type="email"]').first().clear().type(novoEmail);
        cy.get('[type="tel"]').first().clear().type(novoTelefone);

        cy.get('button.alterar[type="submit"]').click();
    });


    it('Deve deletar um contato existente', () => {
        const nome = 'Danilo Brito';

        cy.contains(nome)
            .closest('.sc-beqWaB')
            .within(() => {
                cy.get('.delete').click();
            });

        cy.contains(nome).should('not.exist');
    });
})