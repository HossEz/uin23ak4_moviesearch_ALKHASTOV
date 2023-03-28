import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ query, setNoResults, NoResults }) {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchMovies = async () => {
      const trimQuery = query.trim();
      let url = `https://www.omdbapi.com/?apikey=74541327&s=${trimQuery}`;
      if (filter !== "all") {
        url += `&type=${filter}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      (data && data.Search) ? setMovies(data.Search) : setNoResults(true);
    };
  
    query.trim() && fetchMovies();
  }, [query, filter, setNoResults]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  
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

  return (
    <>
    <div className="filter-container">
      <div className="filter-options">
        <label>
          <input type="radio" value="all" checked={filter === "all"} onChange={handleFilterChange} />
          Alle
        </label>
        <label>
          <input type="radio" value="movie" checked={filter === "movie"} onChange={handleFilterChange} />
          Filmer
        </label>
        <label>
          <input type="radio" value="series" checked={filter === "series"} onChange={handleFilterChange} />
          Serier
        </label>
        <label>
          <input type="radio" value="game" checked={filter === "game"} onChange={handleFilterChange} />
          Spill
        </label>
      </div>
    </div>
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
