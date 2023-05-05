import loginPage from "../PageObjects/loginPage";
const loginpage = new loginPage()

describe('Chatbot', () => {

    beforeEach('Login', () => {
        cy.visit('/login');

        loginpage.setClickCancel();

        loginpage.setEmail("' or 1=1--");

        loginpage.setPassword("a");
  
        loginpage.clickSubmit();
      
    })

        it('should be possible to kill the chatbot by setting the process to null', () => {
          // cy.visit('/profile')
          // cy.get('#username').type(
          //   'admin"); process=null; users.addUser("1337", "test'
          // )
          // cy.get('#submit').click()
          cy.visit('/#/chatbot')
    
          cy.get('#message-input').type('hi').type('{enter}')
          cy.get('#message-input').type('...').type('{enter}')
          cy.get('#message-input').type('bye').type('{enter}')
    
          // cy.expectChallengeSolved({ challenge: 'Kill Chatbot' })
        })

})