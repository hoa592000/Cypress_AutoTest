//Kiểm tra html injection
import loginPage from "../PageObjects/loginPage";
const loginpage = new loginPage();

beforeEach('Đăng nhập', () => {
    cy.visit('/login');

    loginpage.setClickCancel();

    loginpage.setEmail("admin@juice-sh.op");

    loginpage.setPassword("admin123");

    loginpage.clickSubmit();

})

it('html injection', () => {

    cy.get('button#navbarAccount').click();

    cy.wait(1000)

    cy.get('button[role="menuitem"]')
            .contains("admin@juice-sh.op")
            .click();

    cy.get('#username').clear();
    // input
    cy.get('#username').type('test');
    cy.wait(1000)

    cy.get('#submit').click();

    cy.get('#username').contains('test')
    
})
