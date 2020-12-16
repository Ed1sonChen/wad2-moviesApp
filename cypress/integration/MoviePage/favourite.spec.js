describe("Favourite Page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/#/MoviesApp/tvshows");
    });

    describe("Add to favourite button", () => {
        it("should add the movie to the favourite page", () => {
            cy.get('[alt=The Good Doctor]').click();
            cy.get(".ant-btn play-trailer").eq(1).click();
            cy.get(".nav-btn").click();
            cy.get("a").eq(3).click();
            cy.get(".item").eq(0).find(".genre-name").should("include", "Drama");

        })
    })

})