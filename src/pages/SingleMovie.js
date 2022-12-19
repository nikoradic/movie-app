import React from "react";
import { useParams, Link } from "react-router-dom";

const url = "https://api.themoviedb.org/3/movie/{movie_id}?api_key=ff534bf921004fc8678888467e1c97ca&language=en-US";

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = React.useState(null);

  React.useEffect(() => {
    async function getMovie() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.movies) {
          const { title: name } = data.drinks[0];
          const newMovie = {
            name,
          };
          setMovie(newMovie);
        } else {
          setMovie(null);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getMovie();
  }, [id]);
  if (!movie) {
    return <h2 className="section-title"> no movie to display</h2>;
  }
  const { name } = movie;
  return (
    <section className="section cocktail-section">
      <Link to={`/movie/${id}`} className="btn btn-primary btn-details">
        Details
      </Link>
      <h2 className="section-title">{name}</h2>
    </section>
  );
};

export default SingleMovie;
