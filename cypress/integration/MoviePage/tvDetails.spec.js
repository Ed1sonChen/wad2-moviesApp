let tvId = null
let tv;

describe("TV show details page", () => {
    before(() => {
        cy.request(
          `https://api.themoviedb.org/3/tv/popular?api_key=be62f8209a470d981bf010ea52ec236c&language=en-US&include_adult=false&include_video=false&page=1`
        )
          .its("body")
          .then((response) => {
            return response.results[1].id;
          })
          .then((arbitraryTvIdignored) => {
            tvId = arbitraryTvIdignored
            return cy
              .request(
                `https://api.themoviedb.org/3/tv/${tvId}?api_key=be62f8209a470d981bf010ea52ec236c`
              )
              .its("body");
          })
          .then((tvDetails) => {
            tv = tvDetails;
            return tvDetails.id;
          })
      });
      beforeEach(() => {
        cy.visit(`/tvshows/details/${tv.id}`);
      });

      it("should display tv title", () => {
        cy.get(".moviedetails").find("h2").contains(tv.title);
      });

      it("shuold display the overview of the tv show", () => {
        cy.get(".synopsis").find("h2").contains(tv.overview);
      })

      it("should open the trailer", () => {
        cy.get(".ant-btn").eq(0).click();
        cy.get(".no-trailer").should("include", "Sorry!");
      })
})