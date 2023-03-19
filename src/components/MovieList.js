import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ query, setNoResults, NoResults }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const trimQuery = query.trim();
      if (trimQuery) {
        const response = await fetch(`https://www.omdbapi.com/?apikey=74541327&s=${trimQuery}&type=movie`);
        const data = await response.json();
        if (data && data.Search) {
          setMovies(data.Search);
          setNoResults(false);
        } else {
          setNoResults(true);
        }
      }
    };

    fetchMovies();
  }, [query, setNoResults]);


  useEffect(() => {
    const fetchMoviesJB = async () => {
      const response = await fetch(`https://www.omdbapi.com/?apikey=74541327&s=James+Bond&type=movie`);
      const data = await response.json();
      setMovies(data.Search);
    };

    if (movies.length === 0) {
      fetchMoviesJB();
    }
  }, [movies]);


    // console.log(movies.length);
    // console.log(movies);

  return (
    <>
      {NoResults ? (
        <p className="noResults">Ingen resultater funnet.</p>
      ) : (
        <div className="movie-list">
          {movies?.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </>
  );
}
