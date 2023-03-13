import MovieCard from "./MovieCard";


export default function MovieList({ movies }) {
    console.log("movies:", movies);

  return (
    <div className="movie-list">
      {movies?.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

