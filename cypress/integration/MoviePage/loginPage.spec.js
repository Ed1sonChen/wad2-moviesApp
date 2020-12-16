describe("Login Page", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    describe("login button test", () => {
        it("should turn to the login page", () => {
            cy.get(".ant-btn").click();
            cy.url().should("include", '/login');
            cy.get(".ant-btn ant-btn-primary").find("span").should("have.value","LOGIN");
        })

        it("should diplay the infor user input", () => {
            cy.get('[data-cy=username]').type("username").should("have.value", "username");
            cy.get('[data-cy=password]').type("password").should("have.value", "password");
        })

        it("should display the correct page after login successful", () => {
            cy.get('[data-cy=username]').type("chen");
            cy.get('[data-cy=password]').type("chen");
            cy.get(".ant-btn").click();
            cy.url().should("include","/movies");
            cy.get(".header-user").find("span").should("have.value","Chen");
        })

        it("should login failed without username or password", () => {
            cy.get('[data-cy=username]').type("chen");
            cy.get(".ant-btn").click();
            cy.url().should("include", "/login");
        })
    })

})