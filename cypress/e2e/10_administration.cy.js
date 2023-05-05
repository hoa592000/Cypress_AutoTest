describe('/#/administration', () => {
    beforeEach(() => {
        cy.visit('https://juice-shop.eliitme.xyz/#/forgot-password')
      })
    describe('challenge "adminSection"', () => {
      it('should be possible to access administration section with admin user', () => {
        cy.visit('/#/administration')
        cy.url().should('match', /\/administration/)
        cy.wait(1000) // added for debugging the CI
        cy.expectChallengeSolved({ challenge: 'Admin Section' })
      })
    })
  
    describe('challenge "fiveStarFeedback"', () => {
      it('should be possible for any admin user to delete feedback', () => {
        cy.visit('/#/administration')
        cy.wait(1000)
        cy.get('.mat-cell.mat-column-remove > button').first().click()
        cy.expectChallengeSolved({ challenge: 'Five-Star Feedback' })
      })
    })
  })