import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Layout from "./components/Layout";
import SearchResults from "./components/SearchResults";
import MovieList from "./components/MovieList";
import './css/main.css'

function App() {
  const [query, setQuery] = useState("");
  const [NoResults, setNoResults] = useState(false);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <Layout query={query}>
      <SearchResults handleSearch={handleSearch} />
      <MovieList query={query} setNoResults={setNoResults} NoResults={NoResults} />
    </Layout>
  );
}

export default App;
