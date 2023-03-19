export default function Layout({ children, query }) {
    return (
      <div className="container">
        <header>
          <h1>Filmsøk</h1>
        </header>
        {query === "" ? (
          <div>
            <h2>Velkommen til Filmsøk!</h2>
            <p className="firstP">- Oppdag nye filmer og klassikere -</p>
            <h3 className="firstH3">Anbefalinger!</h3>
          </div>
        ) : null}
        <main>{children}</main>
      </div>
    );
  }
  