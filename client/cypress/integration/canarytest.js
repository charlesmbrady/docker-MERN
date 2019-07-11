/* eslint-disable no-undef */
/**
 * Cypress Tests
 */

describe('Canary Test', () => {
    // eslint-disable-next-line no-unused-expressions
    it('app loads with text', () => {
        cy.visit('/')
        cy.get('p').should('have.text', 'Basic dockerized react appno checks')
    })
})