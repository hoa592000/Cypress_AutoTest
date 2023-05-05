import loginPage from "../PageObjects/loginPage";
const loginpage = new loginPage();

describe('Search', () => {

    beforeEach('Login', () => {
        cy.visit('/login');

        loginpage.setClickCancel();

        loginpage.setEmail("' or 1=1--");

        loginpage.setPassword("1234567");

        loginpage.clickSubmit();

    })
    it('logout', function(){
      cy.get('button#mat-focus-indicator mat-menu-trigger buttons mat-button mat-button-base').click();
    })
})