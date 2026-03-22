import React, { useEffect, useRef, useState } from "react";
import SearchField from "./SearchField";
import SearchDropMenu from "./SearchDropMenu";
import { searchCities } from "../services/weatherAPI";

function SearchBar({ onSearch, onLocationSearch, loading }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);

  const searchRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const searchTimeout = setTimeout(async () => {
      if (query.length > 2) {
        setSearchLoading(true);
        try {
          const result = await searchCities(query);
          setSuggestions(result);
          setShowSuggestions(true);
        } catch (err) {
          console.error("Search Failed:", err);
        } finally {
          setSearchLoading(false);
        }
      } else {
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, 300);

    return () => clearTimeout(searchTimeout);
  }, [query]);

  const handleSuggestionClick = (city) => {
    const cityName = city.name ? `${city.name}, ${city.state}` : city.name;
    onSearch(cityName);
    setQuery("");
    setShowSuggestions(false);
  };

  return (
    <section className="relative w-full max-w-2xl" ref={searchRef}>
      <SearchField
        loading={loading}
        query={query}
        setQuery={setQuery}
        onSearch={onSearch}
        setShowSuggestions={setShowSuggestions}
        setSuggestions={setSuggestions}
        onLocationSearch={onLocationSearch}
      />

      <SearchDropMenu
        showSuggestions={showSuggestions}
        suggestions={suggestions}
        searchLoading={searchLoading}
        handleSuggestionClick={handleSuggestionClick}
      />
    </section>
  );
}

export default SearchBar;
