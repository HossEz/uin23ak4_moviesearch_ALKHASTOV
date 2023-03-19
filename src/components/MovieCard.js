export default function MovieCard({ movie }) {
  const { Title, Year, imdbID, Type, Poster } = movie;

  return (
    <article className="movie-card">
      <img src={Poster} alt={Title} />
      <h3>{Title}</h3>
      <p>År: {Year}</p>
      <p>Type: {Type}</p>
      <a href={`https://www.imdb.com/title/${imdbID}`} target="_blank" rel="noopener noreferrer">
        Les mer
      </a>
    </article>
  );
}
