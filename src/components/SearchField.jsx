import React from "react";
import { MapPin, Search, X } from "lucide-react";

function SearchField({
  loading,
  query,
  setQuery,
  onSearch,
  setShowSuggestions,
  setSuggestions,
  onLocationSearch,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim()) {
      onSearch(query.trim());
      setQuery("");
      setShowSuggestions(false);
    }
  };

  const clearSearch = () => {
    setQuery("");
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <article className="group relative">
        {/* search bar */}
        <Search className="text-gray/60 absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 transform transition-all group-focus-within:text-white" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for any city around the world"
          disabled={loading}
          className="w-full rounded-2xl border border-white/20 bg-white/10 py-4 pr-24 pl-12 font-medium text-white placeholder-white/50 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 focus:border-white/40 focus:ring-2 focus:ring-white/30 focus:outline-none"
        />

        {/* buttons */}
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute top-1/2 right-14 -translate-1/2 transform cursor-pointer rounded-full p-1 text-white/50 transition-all hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        )}

        <button
          type="button"
          onClick={onLocationSearch}
          disabled={loading}
          className="absolute top-1/2 right-4 -translate-1/2 transform cursor-pointer rounded-full p-1 text-white/50 transition-all hover:bg-white/10 hover:text-white"
        >
          <MapPin className="h-5 w-5" />
        </button>
      </article>
    </form>
  );
}

export default SearchField;
