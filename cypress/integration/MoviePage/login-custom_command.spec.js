const username = 'chen'
const pwd = 'chen'
describe("Login Page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/#/MoviesApp/login");
    });

    it("should display the correct page after login successful", () => {
        cy.login(username,pwd)
        cy.get(".ant-btn").click();
        cy.url().should("include","/movies");
        cy.get(".header-user").find("span").should("have.value","Chen");
    })
})