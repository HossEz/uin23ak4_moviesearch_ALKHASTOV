export default function Layout({ children, query }) {
  return (
    <div className="container">
      <header>
        <a href="/">
          <h1>Filmsøk</h1>
        </a>
      </header>
      {query ? (
        <h3 className="firstH3">Søkeresultater:</h3>
      ) : (
        <div>
          <h2>Velkommen til Filmsøk!</h2>
          <p className="firstP">- Oppdag nye filmer og klassikere -</p>
          <h3 className="firstH3">Anbefalinger!</h3>
        </div>
      )}
      <main>{children}</main>
    </div>
  );
}
