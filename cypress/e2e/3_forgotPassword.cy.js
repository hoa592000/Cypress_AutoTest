import forgotPassword from "../PageObjects/forgotPassword";

describe('ForgotPassword', () => {

    const forgotpassword = new forgotPassword();

    beforeEach(() => {
        cy.visit('/forgot-password');
      })
    
      describe('for his OWASP account', () => {
        it('should be able to reset password with his security answer', () => {

            forgotpassword.setClickCancel();

            forgotpassword.setEmail("bjoern@owasp.org");

            forgotpassword.setSecurityQuestion("Zaya");

            forgotpassword.setNewPassword("kitten lesser pooch");

            forgotpassword.setRepeatNewPassword("kitten lesser pooch");

            forgotpassword.clickResetButton();

            forgotpassword.verfyConfirmSuccesseful;
        })
        // cy.expectChallengeSolved({ challenge: 'Login Admin' })
    })
    describe('challenge role User', () => {
        it('should log in Admin with role User', () => {

            forgotpassword.setClickCancel();

            forgotpassword.setEmail("long17@yopmail.com");

            forgotpassword.setSecurityQuestion("security question");

            forgotpassword.setNewPassword("1234567");

            forgotpassword.setRepeatNewPassword("123456767");

            forgotpassword.clickResetButton();

        })
    
    })
})
