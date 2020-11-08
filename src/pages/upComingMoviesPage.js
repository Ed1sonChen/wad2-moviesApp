import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {upcomingMoviesContext} from '../contexts/upcomingMoviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavorites'

const MovieListPage = () => {
  const context = useContext(upcomingMoviesContext)

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={context.movies}  /* Changed */
      action={(movie) => {
        return <AddToFavoritesButton movie={movie} />;
      }}
    />
  );
};

export default MovieListPage;