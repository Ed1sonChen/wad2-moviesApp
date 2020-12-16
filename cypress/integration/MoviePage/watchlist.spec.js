describe("Watch List Page", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    describe("Add to watch list button", () => {
        it("should add the movie to the watch list page", () => {
            cy.get('[alt=Tenet]').click();
            cy.get(".ant-btn play-trailer").eq(1).click();
            cy.get(".nav-btn").click();
            cy.get("a").eq(2).click();
            cy.get(".item").eq(0).find(".movie-name").should("include", "Tenet");

        })
    })

})