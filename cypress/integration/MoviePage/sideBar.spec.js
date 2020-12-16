describe("Movies Page", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    describe("side bar", () => {
        it("should open the side bar", () => {
            cy.get(".nav-btn").click();
            cy.get("ul")
                .eq(1)
                .within(() => {
                    cy.get("a").eq(0).find(span).contains("Movies");
                    cy.get("a").eq(1).find(span).contains("Tv shows");
                    cy.get("a").eq(2).find(span).contains("Watch List");
                    cy.get("a").eq(3).find(span).contains("Favourite");
                    cy.get("a").eq(4).find(span).contains("Search");
                })
        })

        it("should navigate to the correct page", () => {
            cy.get('[href="#/MoviesApp/tvshows"]').click();
            cy.url().should("include", "/tvshows");
        })
    })
})