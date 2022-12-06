import React from "react";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={movie.id} className=" col image-container d-flex justify-content-start  movie-item">
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="movie"></img>
        </div>
      ))}
    </>
  );
};
export default MovieList;
