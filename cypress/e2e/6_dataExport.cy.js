import loginPage from "../PageObjects/loginPage";
const loginpage = new loginPage()

describe('Chatbot', () => {

    beforeEach('Login', () => {
        cy.visit('/login');

        loginpage.setClickCancel();

        loginpage.setEmail("long17@yopmail.com");

        loginpage.setPassword("1234567");

        loginpage.clickSubmit();
      
    })
    it('should be possible to steal admin user data by causing email clash during export', () => {
        // cy.login({ email: 'admun', password: 'admun123' })
  
        cy.visit('/#/privacy-security/data-export')
        cy.get('#formatControl').contains('JSON').click()
        cy.get('#submitButton').click()
        cy.expectChallengeSolved({ challenge: 'GDPR Data Theft' })
    //   })
    })

})