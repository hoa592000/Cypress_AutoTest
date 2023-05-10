import { before } from "lodash"
import registerPage from "../PageObjects/registerPage";
const registerpage = new registerPage();

describe('Register', () => {

    describe('Kiểm tra xác thực', () => {
        beforeEach(() => {
            cy.visit('/register');
        })

        it('Kiểm tra chính sách mật khẩu yếu', function() {

        registerpage.setClickCancel();

        registerpage.setInputEmail("thanhhoa592000@gmail.com");

        registerpage.setInputPassword("1234567");

        registerpage.setInputRepeatPassword("1234567");

        registerpage.setAnswerControl("test");

        registerpage.setClickRegister();

        cy.wait(10000);
        })

    })
})