import loginPage from "../PageObjects/loginPage";
const loginpage = new loginPage();

beforeEach('Đăng nhập', () => {
    cy.visit('/login');

    loginpage.setClickCancel();

    loginpage.setEmail("admin@juice-sh.op");

    loginpage.setPassword("admin123");

    loginpage.clickSubmit();

})

describe('Kiểm tra xác thực đầu vào', () => {
    let data = [
        ['<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/771984076&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" id = "BugXSS1"></iframe>']
    ]
    data.forEach(row => {
        it('Kiểm tra Cross Site Scripting (XSS)', function() {
            if (row.length > 0) {
                //print console
                console.log(row[0]);


                cy.window().then((win) => {
                    cy.stub(win, 'confirm').returns(true)
                })
                cy.window().document()
                cy.reload()
                cy.get('#searchQuery').click()
                cy.get('#mat-input-0')
                .type(row[0])
                .type('{enter}')
 
                cy.wait(1000)
                    // cy.on('window:confirm', () => true)
                cy.get('#BugXSS1').should('not.be.visible');

                cy.clearAllCookies()
                cy.reload()
            }
        })
    })

})