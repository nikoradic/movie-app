import React, { useEffect, useState } from "react";

import MovieList from "../components/MovieList";
import MovieListHeading from "../components/MovieListHeading";
import SearchBox from "../components/SearchBox";
import SearchMovieList from "../components/SearchMovieList";
import RecentlyViewedButton from "../components/RecentlyViewedButton";
import RemoveMovies from "../components/RemoveMovies";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [searchValue, setSearchValue] = useState("Batman");

  const getMovieFront = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=ff534bf921004fc8678888467e1c97ca&language=en-US&page=1  ";
    const response = await fetch(url);
    const responseJson = await response.json();

    setMovies(responseJson.results);
  };
  useEffect(() => {
    getMovieFront();
  }, []);

  const addRecentlyMovie = (movie) => {
    const newRecentlyList = [...recentlyViewed, movie];
    setRecentlyViewed(newRecentlyList);
  };

  const removeMovie = (movie) => {
    const newRemoveList = recentlyViewed.filter((viewed) => viewed.id !== movie.id);
    setRecentlyViewed(newRemoveList);
    console.log(movie);
  };

  return (
    <>
      <div className="container-fluid movie-app ">
        <div className="row d-flex align-items-center mt-4 mb-4 ">
          <MovieListHeading heading="Movies" />
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <div className="row">
          <MovieList movies={movies} handleRecentlyClick={addRecentlyMovie} recentlyComponent={RecentlyViewedButton} />
        </div>
        <div className="row">
          <MovieListHeading searchValue={searchValue} heading="Search Results" />
        </div>
        <div className="row d-flex align-items-center mt-4 mb-4">
          <SearchMovieList searchValue={searchValue} handleRecentlyClick={addRecentlyMovie} />
        </div>
        <div className="row d-flex align-items-center mt-4 mb-4">
          <MovieListHeading heading="Recently Viewed" />
        </div>
        <div className="row container-fluid ">
          <MovieList movies={recentlyViewed} handleRecentlyClick={removeMovie} recentlyComponent={RemoveMovies} />
        </div>
      </div>
    </>
  );
};

export default Home;
