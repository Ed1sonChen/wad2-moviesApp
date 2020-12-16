
let movieId = null
let movie;
describe("Movie Details Page", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/movie/popular?api_key=be62f8209a470d981bf010ea52ec236c&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        return response.results[1].id;
      })
      .then((arbitraryMovieIdignored) => {
        movieId = arbitraryMovieIdignored
        return cy
          .request(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=be62f8209a470d981bf010ea52ec236c`
          )
          .its("body");
      })
      .then((movieDetails) => {
        movie = movieDetails;
        return movieDetails.id;
      })
  });
  beforeEach(() => {
    cy.visit(`/movies/details/${movie.id}`);
  });

  it("should display movie title", () => {
    cy.get(".moviedetails").children().contains(movie.title);
  });

  it("should display the movie's details", () => {
    cy.get(".release-date").contains(movie.release_date);
  });

  it("should display the overview", () => {
    cy.get(".synopsis").children().contains(movie.overview)
  });

});