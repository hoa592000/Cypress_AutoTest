
describe('Register', () =>{
    beforeEach(()=> {
        cy.visit('/register')
    })
    describe('challenge "persistedXssUser"', ()=> {
        beforeEach(() => {
        })
    })

    it('Register', function(){
    Act = "User Registration"
    
    // cy.visit('https://juice-shop.eliitme.xyz/#/register');

    cy.get('button[class="mat-focus-indicator mat-tooltip-trigger mat-raised-button mat-button-base mat-warn ng-star-inserted"').click();

    //input email
    cy.get('input[id="emailControl"][type="text"]').type('long17@yopmail.com');

    //input password
    cy.get('input[id="passwordControl"][type="password"]').type('1234567');
    
    //input repeat password
    cy.get('input[id="repeatPasswordControl"][type="password"]').type('1234567');
    
    // cy
    })
})