import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import {MoviesContext} from '../contexts/moviesContext'
import AddReviewButton from '../components/buttons/addReview'

const WatchListPage = props => {
  const context = useContext(MoviesContext);
  const watchList = context.upcoming.filter( m => m.watchList )
  return (
    <MovieListPageTemplate
      movies={watchList}
      title={"Watch List"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default WatchListPage;