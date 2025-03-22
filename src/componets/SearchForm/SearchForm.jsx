import { useState } from "react";
import "./SearchForm.css";


function SearchForm(){
  
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="search__bar-container">
     <input
        type="text"
        placeholder="    Enter topic"
        value={search}
        onChange={handleSearch}
        className="search__input"
      />
      <button className="search__btn">Search</button>
    </div>
  );
}

export default SearchForm;