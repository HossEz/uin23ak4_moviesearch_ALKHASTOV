import { useState } from "react";

export default function SearchResults({ handleSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Søk etter filmer..." value={query} onChange={handleChange} required/>
      <button className="searchBtn" type="submit">Søk</button>
    </form>
  );
}
