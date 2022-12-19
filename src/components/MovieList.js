import React from "react";
import { Link } from "react-router-dom";

const MovieList = (props) => {
  const RecentlyComponent = props.recentlyComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={movie.id} className=" col image-container d-flex justify-content-start  movie-item">
          <Link to={`/movie/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path} `} alt="movie" width={200}></img>
          </Link>

          <div
            onClick={() => props.handleRecentlyClick(movie)}
            className="overlay d-flex algin-items-center justify-content-center"
          >
            <RecentlyComponent />

            <div className="card-body">
              <p className="card-text">{movie.vote_average}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default MovieList;
// ( window.location.pathname)
