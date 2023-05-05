class loginPage {

    btnCancel1 = "button[class='mat-focus-indicator mat-tooltip-trigger mat-raised-button mat-button-base mat-warn ng-star-inserted']";
    btnCancel2 = "button[id='cancelButton'][title='Cancel the tutorial']";
    txtEmail = "input[id='email'][name='email']";
    txtPassword = "input[id='password'][name='password']";
    btnSubmit = "#loginButton";

    Expected_Tile = "All Products";
    Actual_Tile = "div[class='ng-star-inserted']"
    setClickCancel() {

        cy.get(this.btnCancel1).click();

        cy.get(this.btnCancel2).click();
    }

    setEmail(email) {

        cy.get(this.txtEmail).type(email);
    }

    setPassword(pasword) {

        cy.get(this.txtPassword).type(pasword);
    }

    clickSubmit() {

        cy.get(this.btnSubmit).contains('Log in').click();
    }

    verifyLogin()
    {
        cy.get(this.txtAccount).should('have.text','Account');
    }  

    clearEmail() {
        cy.get(this.txtEmail).clear()
    }

    clearPassword() {
        cy.get(this.txtPassword).clear()
    }

    getActual() {
        // cy.contains(this.Actual_Tile)
        cy.get(this.Actual_Tile).contains(this.Expected_Tile)
    }

}

export default loginPage;