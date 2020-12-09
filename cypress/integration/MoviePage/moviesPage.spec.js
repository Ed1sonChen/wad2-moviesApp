describe("Home Page", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    describe("Title Test", () => {
      it("should display popular", () => {
        cy.get(".carousel-title").eq(0).should('have.value','POPULAR');
      });

      it("should display trending", () => {
          cy.get(".carousel-title").eq(1).should('have.value',"TRENDING");
      })

      it("should display top rated", () => {
        cy.get(".carousel-title").eq(2).should('have.value',"TOP RATED");
      })

      it("should display upcoming", () => {
        cy.get(".carousel-title").eq(3).should('have.value',"UPCOMING");
      })
    })

    describe("navigation test", () => {
        cy.get(".nav-btn").click();
        cy.wait(1000)
        cy.get(".open").should("have.class",'selected')
    })

    describe('test slick dots', () => {
        cy.get('.slick-dots>li').click()
    })
  })