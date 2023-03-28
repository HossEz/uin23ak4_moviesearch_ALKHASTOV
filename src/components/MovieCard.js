import { useState, useEffect } from "react";

export default function MovieCard({ movie }) {
  const { Title, Year, imdbID, Type, Poster } = movie;
  const [details, setDetails] = useState({});
  const [posterError, setPosterError] = useState(false);


  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(`https://www.omdbapi.com/?apikey=74541327&i=${imdbID}`);
      const data = await response.json();
      setDetails(data);
    };
    fetchDetails();
  }, [imdbID]);

  const PosterError = () => {
    setPosterError(true);
  };

  return (
    <article className="movie-card">
      {posterError ? (
        <img src="https://cloud.filmfed.com/defaults/movie-poster/l_movie_poster_default.png" alt={Title} />
      ) : (
        <img src={Poster} alt={Title} onError={PosterError}/>
      )}
      <h3>{Title}</h3>
      <p><span>Plott: </span>{details.Plot}</p>
      <p><span>År: </span>{Year}</p>
      <p><span>Type: </span>{Type}</p>
      <p><span>Regissør: </span>{details.Director}</p>
      <p><span>Skuespillere: </span>{details.Actors}</p>
      <p><span>Awards: </span>{details.Awards}</p>
      <a className="lesBtn" href={`https://www.imdb.com/title/${imdbID}`} target="_blank" rel="noopener noreferrer">
        Les mer på IMDb
      </a>
    </article>
  );
}
