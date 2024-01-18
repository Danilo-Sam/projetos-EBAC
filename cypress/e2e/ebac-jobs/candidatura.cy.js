/// <reference types="cypress" />

describe('Testes para a pag de candidatos', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    it('Deve levar o user até o formulario de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
    })

    it('Deve preencer o fomulario de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('Jailson Joventino')
        cy.get('input[name="email"]').type('jjs2@hotmail.com')
        .get('input[name="telefone"]').type('83999098837')
        cy.get('input[name="endereco"]').type('João Pessoa PB')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade"]').select('outros')
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (evento) => {
            expect(evento).contain('Obrigado pela candidatura!')
        })
    })
})