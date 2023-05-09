import { before } from "lodash"

describe('Kiểm tra quản lý định danh', () => {
    beforeEach(() => {
        cy.visit('/register');
    })

    it('Kiểm tra đăng kí người dùng mới', function() {

        cy.get('button[class="mat-focus-indicator mat-tooltip-trigger mat-raised-button mat-button-base mat-warn ng-star-inserted"').click();

        //input email
        cy.get('input[id="emailControl"][type="text"]').type('thanhhoa592000@gmail.com');

        //input password
        cy.get('input[id="passwordControl"][type="password"]').type('1234567');

        //input repeat password
        cy.get('input[id="repeatPasswordControl"][type="password"]').type('1234567');

        // Click vào
        cy.get('div[class="mat-form-field-infix ng-tns-c21-10"]').click();

        // chọn câu hỏi security
        cy.get('#mat-option-0').click();

        // trả lời câu hỏi
        cy.get('#securityAnswerControl').type('test');

        //click đăng kí
        cy.get('#registerButton').click();

    })
})