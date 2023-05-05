import { printf } from "extsprintf";
import loginPage from "../PageObjects/loginPage";
const loginpage = new loginPage()

  beforeEach(() => {
    cy.visit('/login');
  })

  describe('challenge login with Role', () => {
    it('should log in Admin with role User', () => {

      loginpage.setClickCancel();

      loginpage.setEmail("long17@yopmail.com");

      loginpage.setPassword("1234567");

      loginpage.clickSubmit();

      cy.wait(1000)

      // loginpage.getActual();
    })

    it('should log in Admin with role Admin', () => {

      loginpage.setClickCancel();

      loginpage.setEmail("admin@juice-sh.op");

      loginpage.setPassword("admin123");

      loginpage.clickSubmit();

      cy.wait(1000)

      // loginpage.getActual();
  
    })

    it('should log in Admin with role Customer', () => {
  
        loginpage.setClickCancel();
  
        loginpage.setEmail("jim@juice-sh.op");
  
        loginpage.setPassword("ncc-1701");
  
        loginpage.clickSubmit();

        cy.wait(1000)

        // loginpage.getActual();
    })
  })

  describe('Attack', () => {
    let data = [
      ["' or 1=1--", "' or 1=1--"],
      ['or 1=1-','or 1=1-'], 
      ['or 1=1/*','or 1=1/*'], 
      ['" or "a"="a','" or "a"="a']
    ] 
    // before('Get data', function(){
    //   cy.task("parseXlsx").then(res => {
    //     this.data = res[1].data;
    //     cy.log(data)
    //   })
    // })

  data.forEach(row => {
    it('challenge "loginAdmin" with SQLI attack', function(){
    loginpage.setClickCancel();
        if (row.length > 0) {
        //print console
        console.log(row[0]);
        console.log(row[1]);
    
        loginpage.clearEmail();
        loginpage.clearPassword();
    
        loginpage.setEmail(row[0]);

        loginpage.setPassword(row[1]);
    
        loginpage.clickSubmit();
    
        cy.wait(1000)
    
        cy.get(loginpage.btnSubmit).should('be.visible')
    
        cy.clearAllCookies()
        cy.reload()
    
        }
      })
    })
});
    
