import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {upcomingMoviesContext} from '../contexts/upcomingMoviesContext'
import AddToWatchListButton from '../components/buttons/addToWatchList'

const MovieListPage = () => {
  const context = useContext(upcomingMoviesContext)

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={context.movies}  /* Changed */
      action={(movie) => {
        return <AddToWatchListButton movie={movie} />;
      }}
    />
  );
};

export default MovieListPage;