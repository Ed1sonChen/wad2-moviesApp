# Assignment 1 - ReactJS app.

Name: Chen Zhiling

## Features.

...... A bullet-point list of the ADDITIONAL user features you have implemented for the  Movies Fan app ......,
 
 + Feature 1 - .... a statement of its purpose/objective ..... 
 + Feature 2 - .......
 + Feature 3 = ......
 + etc
 + etc

## Setup requirements (If required).

##### Install dependencies
`yarn install`

##### Run moviesApp from the root directory.
`yarn start`

## API Data Model.

..... List the additional TMDB endpoints used in your assignment, e.g.

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

### Component catalogue (If required).

....... Insert a screenshot from the Storybook UI, hi-light stories relating to new/modified components you developed - see example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the new/modified views you have added to the Movies Fan app. Include a caption for each one clearly stating its purpose and any user interaction it supports ........

![][movieDetail]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.

![][review]
>Shows the full text for a movie review. 

## Routing.

...... Insert a list of the additional routes supported by your Movies Fan app. If relevant, specify which of the routes require authentication, i.e. protected/private.

+ /movies/favorites (protected) - displays the user's favorite movies selection.
+ /reviews/:id (public) - displays the full text of a movie review.
+ etc.
+ etc.

### Data hyperlinking.

.... Use screenshots to illustrate where data hyperlinking is present in your views - include captions.

![][cardLink]
> Clicking a card causes the display of that movie's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review

## Independent learning (If relevant).

. . . . . Briefly mention each technologies/techniques used in your project codebase that were not covered in the lectures/labs. Provide source code filename references to support your assertions and include reference material links (articles/blogs).

---------------------------------

[model]: ./data.jpg
[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
[reviewLink]: ./public/reviewLink.png
[cardLink]: ./public/cardLink.png
[stories]: ./public/storybook.png