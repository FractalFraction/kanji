describe("Testing the user can go to the webpage and lookup a kanji",()=>{
  it("the user types in a kanji and gets a response back from the server",()=>{
    cy.visit('/')
    cy.intercept("https://kanjiapi.dev/v1/kanji/*",{fixture:'kanji.json'});
    cy.get('#search').type('蛍')
    cy.get('#search').trigger('keypress', { keycode: 13, release: true})
    cy.get('#kanji-on-reading').should('contain','ケイ')
  })

  xit("the user makes a request and gets an image back",()=>{
    cy.visit('/')
  })

  xit("the user makes a specific request to the server and the image returned matches the sample snapshot",()=>{
    cy.visit('/')
    cy.get('#sample-kanji').matchImageSnapshot();
  })

})