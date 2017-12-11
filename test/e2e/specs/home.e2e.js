describe('Home Page', () => {
  before(() => {
    cy.visit('/')
  })

  it('has the correct title', () => {
    cy.title().should('contain', 'Vue')
  })

  it('has the correct content', () => {
    cy.contains('Home Page')
  })
})
