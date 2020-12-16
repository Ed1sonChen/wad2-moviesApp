describe("Search Page", () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get(".nav-btn").click().get('.open').find("li").eq(4).click();
    });

    it("should display the right search page", () => {
        cy.url().should("include", "/search");
        cy.get(".container-search").find("h2").should("contains", "SEARCH RESULT FOR");
    })

    it("should display the same text with what you typed", () => {
        cy.get(".searchbar").children().eq(0).type('czl')
        .should('have.value', 'czl')
        cy.get(".container-search").find("h2").should("contain", "CZL");
    })

    it("should display the correct movies", () => {
        cy.get(".searchbar").children().eq(0).type('avenger');
        cy.get(".searchbar").children().eq(1).click();
        cy.get(".container-search").find("h2").should("contain", "AVENGER");
        cy.get(".search-results").children().eq(0).get(".movie-name").should("contain", "Captain America: The First Avenger");
    })

})