import React from "react";
import { useParams } from "react-router-dom";

const apiURL = "https://api.themoviedb.org/3/movie/";
const apiKEY = "ff534bf921004fc8678888467e1c97ca";

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = React.useState(null);

  React.useEffect(() => {
    async function getMovie() {
      try {
        const response = await fetch(`${apiURL}${id}?api_key=${apiKEY}`);
        const data = await response.json();
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovie();
  }, [id]);
  if (!movie) {
    return <h2 className="section-title"> no movie to display</h2>;
  }
  return (
    <div className=" container-fluid ">
      <div className="text-center">
        <h2 className="section-title">{movie.title}</h2>
        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path} `} alt="movie" width={1000}></img>
      </div>
      <h3>{movie.tagline}</h3>
      <p className="color-text">{movie.overview}</p>

      <ul>
        {movie.genres.map((genre) => (
          <li className="badge bg-secondary  gap">{genre.name}</li>
        ))}
      </ul>
      <div>
        {movie.production_companies.map((companies) => (
          <p>{companies.name}</p>
        ))}
      </div>
    </div>
  );
};

export default SingleMovie;
