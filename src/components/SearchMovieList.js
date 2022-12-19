import { useState, useEffect } from "react";
import RecentlyViewedButton from "./RecentlyViewedButton";

const SearchMovieList = ({ searchValue, handleRecentlyClick }) => {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=ff534bf921004fc8678888467e1c97ca&language=en-US&page=1&query=${searchValue} `;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      setMovies(responseJson.results);
    }
  };

  useEffect(() => {
    if (searchValue.length > 0) getMovieRequest(searchValue);
  }, [searchValue]);

  if (movies.length > 0) {
    console.log(movies);

    return (
      <>
        {movies.map((movie, index) => (
          <div key={movie.id} className=" col image-container d-flex justify-content-start  movie-item">
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="movie"></img>
            <div
              onClick={() => handleRecentlyClick(movie)}
              className="overlay d-flex algin-items-center justify-content-center"
            >
              <RecentlyViewedButton />

              <div className="card-body">
                <p className="card-text">{movie.vote_average}</p>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
};
export default SearchMovieList;
