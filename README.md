# Assignment 1 - ReactJS app.

Name: Chen Zhiling

## Features.
 
 + Feature 1 - Sign in and authentication: If users don't log in, they cannot access some specified pages like movie details page.
 + Feature 2 - List for popular movies, trending movies, top rated movies and upcoming movies.
 + Feature 3 - Watch List Page: User can see the watch list movies in the watchlist page.
 + Feature 4 - Favourite Page: User can see the favourite TV shows in the favourite page.
 + Feature 5 - Side Bar: The side bar has all the links in the website, together with a search button.
 + Feature 6 - Search Page: The user can type in the search input and click the search button to find the movies and TV shows they want.
 + Feature 7 - Movie Details Page - The user can view the movie's basic information.
    + Watch trailer button - The user can see the trailer of the movie after click the watch trailer button.
    + Add to watch list button - The user can add the movie to the watch list after click the add to watch list button.
    + Casts - The user can view the casts of the movie.
    + Recommendated Movies - The user can view some recommendated movies related to the movie.
 + Feature 8 - TV Shows Page: The user can see all the TV shows in the form of slider.
    + Airing today TV shows - The user can click the circle button to see all the tv show airing today.
 + Feature 9 - TV Details Page - The user can view the Tv show's basic information.
    + watch tailer button  - The user can see the trailer of the TV shows after click the watch trailer button.
    + Add to favourite button - The user can add the tv show to the favourite page after click the add to favourite button.
    + Casts - the user can view the casts of the tv show.
    + Similar TV shows recommendation - The user can view the similar TV page at the button of the TV details page.


## Setup requirements (If required).

You can use npm or yarn to install the packages.

Before you use yarn, you should delete the package-lock.json.

##### Install dependencies
`yarn install`

##### Run moviesApp from the root directory.
`yarn start`

## API Data Model.

+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ https://api.themoviedb.org/3/movie/${id}/casts - get the cast for a movie
+ https://api.themoviedb.org/3/movie/${id} - get the movie details by id
+ https://api.themoviedb.org/3/movie/${id}/reviews - get the user reviews for a movie
+ https://api.themoviedb.org/3/movie/${id}/videos - get the videos that have been added to a movie
+ https://api.themoviedb.org/3/movie/now_playing - get a list of movies in theatres
+ https://api.themoviedb.org/3/movie/popular - get a list of the current popular movies on TMD
+ https://api.themoviedb.org/3/movie/${id}/recommendations - get a list of recommended movies for a movie
+ https://api.themoviedb.org/3/movie/top_rated - get the top rated movies on TMDb
+ https://api.themoviedb.org/3/trending/movie/week - get the trending movies
+ https://api.themoviedb.org/3/movie/upcoming - get a list of upcoming movies in theatres
+ https://api.themoviedb.org/3/tv/airing_today - get a list of TV shows that are airing today
+ https://api.themoviedb.org/3/tv/on_the_air - get a list of shows that are currently on the air
+ https://api.themoviedb.org/3/tv/popular - get a list of the current popular TV shows on TMDb
+ https://api.themoviedb.org/3/tv//${id}/similar - get a list of similar TV shows
+ https://api.themoviedb.org/3/tv/top_rated - get a list of the top rated TV shows on TMDb
+ https://api.themoviedb.org/3/tv/${id}/credits - get the credits (cast and crew) that have been added to a TV show
+ https://api.themoviedb.org/3/tv/${id} - get the primary TV show details by id
+ https://api.themoviedb.org/3/genre/tv/list - get the list of official genres for TV shows
+ https://api.themoviedb.org/3/tv/${id}/reviews - get the reviews for a TV show
+ https://api.themoviedb.org/3/tv/${id}/videos - get the videos that have been added to a TV show
+ https://api.themoviedb.org/3/search/multi - search multiple models in a single request. Multi search currently supports searching for movies, tv shows and people in a single request.


## App Design.
### UI Design.

![][moviesPage]

>Shows the now playing movies. When the user click the circle button, it can load the previous/next movie. When the user click the movies card, it can show the movie details page.

![][moviesPage2]

![][moviesPage3]

>Shows popular, trending, top rated, upcoming movies. When the user puts the mouse arrow on the movie card, the card will become brighter and clearer. When the user click the arrow button, it can load the previous/next movie card. When the user click the movies card, it can show the movie details page.

![][login]

>Support user to sign in the movie app.

![][pleaseLogin]

>If the user don't log in, when they click the movies card, the browser will pop up prompt box "please login".

![][tvshowsPage]

>Shows tv shows airing today. When the user click the circle button, it can load the previous/next tv show. When the user click the tv show card, it can show the tv show details page.

![][tvshowsPage2]

![][tvshowsPage3]

>Shows popular, on air, top rated tv shows. When the user puts the mouse arrow on the card, the card will become brighter and clearer. When the user click the arrow button, it can load the previous/next tv show. When the user click the tv show card, it can show the tv show details page.

![][watchlistPage]

>Shows the movies in the watch list. When the user click the movies card, it can show the movie details page.

![][favouritePage]

>Shows the user's favourite tv shows. When the user click the tv show card, it can show the tv show details page.

![][sideBar]

>The side bar contains the main routes in the movie app, and support the search functionality.

![][movieDetailsPage]

![][movieDetailspage2]

>The movie details page support the following functionalities:
- show the basic information of the movie
- show the casts of the movie
- show 10 recommended movies related to the current movie
- when the user click the watch trailer button, it will pop up a window to show the trailer of the movie

![][trailer]

>It shows the trailer of the current movie/tv show.

![][tvshowDetail]

![][tvshowDetail2]

>The tv show details page support the following functionalities:
- show the basic information of the tv show
- show the casts of the tv show
- show 10 similar tv shows related to the current tv show
- when the user click the watch trailer button, it will pop up a window to show the trailer of the tv show

![][searchPage]

>The search page show the result of the searched movies/tv shows.

## Routing.

+ /watchlist (private) - displays the user's watch list's movies.
+ /favourites (private) - displays the user's favourite tv shows.
+ /login (public) - display the login page.
+ /movies (public) - display the now playing, popular, trending, top rated, upcoming movies.
+ /movies/details/:id (private) - display the movie details.
+ /tvshows (public) - display the airing today, popular, on air, top rated tv shows.
+ /tvshows/details/:id (private) - display the tv show details.
+ /search (public) - display the searched movies/tv shows.

### Data hyperlinking.

![][linkMovie]

> Clicking a card causes the display of that movie's details.

![][linkArrow]

>Clicking the arrow to see the next/previous movie card.

![][linkCircleButton]

>Clicking the circle button to see the next/previous movie.

![][linkFavourite]

>Clicking add to favourite button to add the tv show to the favourite list.

![][linkLogin]

>Clicking the login button to go to the login page.

![][linkSearch]

>Clicking the search button to search the movies/tv shows the user want.

![][linkSidebar2]

>Clicking the side bar link to redirect to the corresponding route.

![][linkTrailer]

>Clicking the watch trailer button to see the trailer.

![][linkWatchlist]

>Clicking the add to watchlist button to add the movie to the watch list.

## Independent learning (If relevant).

1. create-react-app
    - I used create-react-app to rebuild the structure of the project.
    - structure:

        - ![][structure]

    - reference:
        - https://github.com/facebook/create-react-app

2. redux,redux-thunk and immutable
    - I used the redux instead of context to solve communication between react components and state sharing between components, mainly involved 3 parts (store + action + reducer).
    - filename:
        - /src/store/
    - part of the source code:
        ``` javascript
        import { applyMiddleware, createStore, compose } from "redux";
        import thunk from "redux-thunk";
        import rootReducer from "./reducers";
        const initialState = {};
        const middleware = [thunk];
        const store = createStore(
            rootReducer,
            initialState,
            compose(
                applyMiddleware(...middleware),
                //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            )
        );
        export default store;
        ```

3. axios
    - I used axios to send get request.
    - filename:
        - /src/actions/movie_actions/
        - /src/actions/tv_actions/
        - /src/actions/getsearchResults/
    - part of the source code:
        ``` javascript
        import { GET_GENRE } from "../types";
        import { url } from "../../config/config";
        import { API_KEY } from "../../config/config";
        import axios from "axios";
        import { itemsLoading } from "../../actions/itemsLoading";

        export const getgenre = () => dispatch => {
            dispatch(itemsLoading(true));
            axios
                .get(`${url}/genre/movie/list?api_key=${API_KEY}&language=en-US`)
                .then((res) => {
                    dispatch(itemsLoading(false))
                    dispatch({
                        type: GET_GENRE,
                        payload: res.data.genres
                    })
                })
            };
        ```

4. react-slick
    - I used the slider from react-slick to realize the movie carousel effect.
    - filename:
        - /src/components/HorizontalCarousel/HorizontalMovieCarousel
        - /src/components/HorizontalCarousel/HorizontalTvCarousel
        - /src/components/VerticalMovieCarousel/VerticalMovieCarousel
        - /src/components/VerticalMovieCarousel/VerticalTvCarousel
    - part of the source code
        ``` javascript
        import Slider from "react-slick";
        <Slider {...settings}>
                {tvshows &&
                    tvshows.map(tvshow => (
                        <figure key={tvshow.id} className="h-carousel-item">
                            <Link to={`/tvshows/details/${tvshow.id}`}>
                                <img
                                    src={`${path}${imgSize}${tvshow.poster_path}`}
                                    alt={tvshow.name}
                                    className="carousel-img"
                                />
                                <p className="rating">
                                    <svg
                                        className="rating-icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" />
                                    </svg>
                                    {tvshow.vote_average}
                                </p>
                            </Link>
                            <figcaption>
                                <h5 className="movie-name">{tvshow.name}</h5>
                                <p className="genre_name">
                                    {handleGenreName(tvshow.genre_ids[0])}
                                </p>
                            </figcaption>
                        </figure>
                    ))}
            </Slider>
        ```

5. react-redux
    - I used <provider/> component to make the data in the store available to the app and I used the connect from react-redux to connect the components with store.
    - filename:
        - /src/components/Movies/MovieDetails/
        - /src/components/Movies/Movies/
        - /src/components/Search/Search/
        - /src/components/TV/Tv/
        - /src/components/TV/TvDetails/
    - part of the source code
        ``` javascript
        import React from "react";
        import ReactDOM from "react-dom";
        import 'antd/dist/antd.css';
        import App from "./App";
        import store from "./store";
        import { Provider } from "react-redux";

        ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("root")
        );
        ```

6. Material UI
    - I used the material in the side bar.
    - filename:
        -/src/components/VerticalNav/VerticalNav/
    - part of the source code
        ```javascript
        <List component="ul" aria-label="main mailbox folders" className={isSideNavOpen}>
            <ListItem component={NavLink} button to="/movies" onClick={this.closeSideNav} activeClassName="selected">
              <ListItemText primary="Movies" />
            </ListItem>
            <ListItem component={NavLink} button to="/tvshows" onClick={this.closeSideNav} activeClassName="selected">
              <ListItemText primary="Tv Shows" />
            </ListItem>
            <ListItem component={NavLink} button to="/watchlist" onClick={this.closeSideNav} activeClassName="selected">
              <ListItemText primary="Watch List" />
            </ListItem>
            <ListItem component={NavLink} button to="/favourite" onClick={this.closeSideNav} activeClassName="selected">
              <ListItemText primary="Favourite" />
            </ListItem>
            <ListItem component={NavLink} button to="/search" onClick={this.closeSideNav} activeClassName="selected">
              <ListItemText primary="Search" />
            </ListItem>
        </List>
        ```
    - reference:
        - https://material-ui.com/zh/

7. Antd UI
    - I used the antd ui in the login page and movie/tv detail page.
    - file name:
        - /src/components/Login/loginPage/
        - /src/components/Movies/MovieDetails/
        - /src/components/TV/TvDeatils/
    - part of the source code
        ```javascript
        import React, {useState} from 'react';
        import {message, Input, Button} from 'antd';
        import { withRouter } from "react-router-dom";
        import './loginPage.css';

        const LoginPage = ({history})=> {
        const [username, setUserName] = useState();
        const [password, setPassword] = useState();
        const doLogin = () => {
            if (!username || !password) {
            message.warn("username or password cannot be empty.")
            return
            }
            // eslint-disable-next-line
            if(username!='chen'||password!='chen'){
            message.warn("username or password wrong.")
            return
            }
            history.push('/')
            window.username=username
        }
        return (
            <div className={'login-container'}>
            <div className={'login-card'}>
                <Input className={'input'} placeholder="Username"
                    onChange={event => setUserName(event.target.value)}/>
                <Input.Password className={'input'} placeholder="Password"
                    onChange={event => setPassword(event.target.value)}/>
                <Button onClick={doLogin} type={"primary"}>LOGIN</Button>
            </div>
            </div>
        );
        }

        export default withRouter(LoginPage)
        ```
    - reference:
        - https://ant.design/index-cn

---------------------------------

# Assignment 1 - Agile Software Practice.

Name: Chen Zhiling

## some explanation

I am sorry for that I didn't push all the test result to the cypress dashboard. Because I am in China, and the cypress cannot always get the api request from the tmdb api due to the slow network. So the cypress test always failed. I have tried many ways to solve it. You adviced me to find a open api like tmdb in China, but I can not find any open api similar to tmdb. Sometimes it can successfully test, sometimes not. I have write all the test in the cypress/integration/MoviePage.

## App Features.

+ Movies Page - Shows the now playing movies, popular movies, trending movies, top rated movies and upcoming movies.

Tests: cypress/integration/MoviesPage/moviesPage.spec.js

![][moviesPage]

![][moviesPage2]

![][moviesPage3]
 
+ Movie Details page - Shows the details about a movie. 

Tests: cypress/integration/MoviesPage/movieDetails.spec.js 

![][movieDetailspage]

+ TV shows page - Shows the airing today tv shows, popular tv shows, on air tv shows and top rated tv shows.

Tests: cypress/integration/MoviesPage/tvPage.spec.js

![][tvshowsPage]

![][tvshowsPage2]

![][tvshowsPage3]

+ TV Details page - Shows the details about a movie.

Tests: cypress/integration/MoviesPage/tvDetails.spec.js 

![][tvshowDetail]

+ Login page - Support users to log in the application to visit some private route.

Tests: cypress/integration/MoviesPage/loginPage.spec.js

![][login]

+ Search page - Support users to search the movies/tv shows they want to watch.

Tests: cypress/integration/MoviesPage/searchPage.spec.js

![][searchPage]

+ Side Bar - Shows all the links to the pages in the moviesApp.

Tests: cypress/integration/MoviesPage/sideBar.spec.js

![][sideBar]

+ Watch List Page - Support users to add movies which they want to watch in the future to the watch list.

Tests: cypress/integration/MoviesPage/watchlist.spec.js

![][watchlistPage]

+ Favourite Page - Support users to add tv shows to the Favourite page.

Tests: cypress/integration/MoviesPage/favourite.spec.js

![][favouritePage]

## Testing.

Cypress Dashboard URL: https://dashboard.cypress.io/organizations/44a42d42-5bce-42fa-8d94-5c91d9561e16/projects

### Advanced Testing (If required).

+ cypress/integration/MoviesPage/loginPage.spec.js - test when the username is empty
+ cypress/integration/MoviesPage/loginPage.spec.js - test when the password is empty
+ cypress/integration/MoviesPage/tvDetails.spec.js - test when the tv show has no trailer to show

## Independent learning (If relevant).

1. code coverage:
    - I used code coverage for the project by using the instrumenr-cra package.
    - screenshot
        - ![][codeCoverageImport]

        - ![][codeCoverageReport]
    - reference:
        - https://docs.cypress.io/guides/tooling/code-coverage.html#See-also

2. Cypress data-cy 
    - I used data-cy to help easier find the elements.
    - filename:
        - cypress/integration/MoviesPage/loginPage.specjs
    - referemce:
        - https://docs.cypress.io/guides/references/best-practices.html

3. Cypress custom command
    - I used the cypress custom command to simplify test code.
    - filename: 
        - cypress/support/commands.js
        - cypress/integration/MoviesPage/login-custom_command.spec.js
    - part of the source code
        ```javascript
        Cypress.Commands.add('login', (username, pwd) => {
        cy.get('input[data-cy=username]').type(username)
        cy.get('input[data-cy=password]').type(pwd)
        })
        ```
    - reference:
        - https://docs.cypress.io/api/cypress-api/custom-commands.html#Syntax

[model]: ./data.jpg
[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
[reviewLink]: ./public/reviewLink.png
[cardLink]: ./public/cardLink.png
[stories]: ./public/storybook.png
[favouritePage]: ./public/favouritePage.png
[linkArrow]: ./public/linkArrow.png
[linkCircleButton]: ./public/linkCircleButton.png
[linkFavourite]: ./public/linkFavourite.png
[linkLogin]: ./public/linkLogin.png
[linkMovie]: ./public/linkMovie.png
[linkSearch]: ./public/linkSearch.png
[linkSideBar2]: ./public/linkSideBar2.png
[linkSideBar]: ./public/linkSideBar.png
[linkTrailer]: ./public/linkTrailer.png
[linkWatchlist]: ./public/linkWatchlist.png
[login]: ./public/login.png
[movieDetailsPage]: ./public/movieDetailsPage.png
[movieDetailsPage2]: ./public/movieDetailsPage2.png
[movieDetail]: ./public/movieDetail.png
[moviesPage]: ./public/moviesPage.png
[moviesPage2]: ./public/moviesPage2.png
[moviesPage3]: ./public/moviesPage3.png
[pleaseLogin]: ./public/pleaseLogin.png
[searchPage]: ./public/searchPage.png
[sideBar]: ./public/sideBar.png
[structure]: ./public/structure.png
[trailer]: ./public/trailer.png
[tvshowDetail]: ./public/tvshowDetail.png
[tvshowDetail2]: ./public/tvshowDetail2.png
[tvshowsPage]: ./public/tvshowsPage.png
[tvshowsPage2]: ./public/tvshowsPage2.png
[tvshowsPage3]: ./public/tvshowsPage3.png
[watchlistPage]: ./public/watchlistPage.png
[codeCoverageImport]: ./public/codeCoverageImport.png
[codeCoverageReport]: ./public/codeCoverageReport.png

