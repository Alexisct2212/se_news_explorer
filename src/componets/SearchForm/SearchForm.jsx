import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      onSearch(search.trim()); // ✅ Pass the current search directly
    }
  };

  return (
    <form className="search__bar-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter topic"
        value={search}
        onChange={handleSearchChange}
        className="search__input"
      />
      <button type="submit" className="search__btn">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
