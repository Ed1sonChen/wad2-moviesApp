describe("TV shows Page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/#/MoviesApp/tvshows");
    });
  
    describe("Title Test", () => {
      it("should display popular", () => {
        cy.get(".container pb-6").find("h3").eq(0).should('have.value','POPULAR');
      });

      it("navigation test", () => {
        cy.get(".nav-btn").click();
        cy.wait(1000)
        cy.get(".open").should("have.class",'selected')
      })

      it("test slick dots", () => {
        cy.get('.slick-dots>li').click()
      })
   })
})