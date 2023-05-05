import loginPage from "../PageObjects/loginPage";
const loginpage = new loginPage()

describe('Data Erasure', () => {

    beforeEach('Login', () => {
        cy.visit('/login');

        loginpage.setClickCancel();

        loginpage.setEmail("long17@yopmail.com");

        loginpage.setPassword("1234567");

        loginpage.clickSubmit();
      
    })

})