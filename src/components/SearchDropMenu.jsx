import React from "react";
import { Search } from "lucide-react";

function SearchDropMenu({
  showSuggestions,
  suggestions,
  searchLoading,
  handleSuggestionClick,
}) {
  return (
    <>
      {showSuggestions && (suggestions.length > 0 || searchLoading) && (
        <article className="absolute top-full right-0 left-0 z-50 mt-3 overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-lg">
          {searchLoading ? (
            // searching spinner
            <div className="p-6 text-center text-white/70">
              <div className="mx-auto h-6 w-6 animate-spin rounded-full border-2 border-white/30 border-t-white"></div>
              <p>Search Cities</p>
            </div>
          ) : (
            // search data
            suggestions.map((city, index) => {
              return (
                <button
                  key={`${city.name}-${city.country}-${index}`}
                  onClick={() => handleSuggestionClick(city)}
                  className="group flex w-full cursor-pointer items-center justify-between border-b border-white/10 px-6 py-4 text-left transition-all duration-200 last:border-b-0 hover:bg-white/10"
                >
                  <div>
                    <div className="font-medium text-white group-hover:text-white/90">
                      {city.name}
                      {city.state && (
                        <span className="text-white/70">, {city.state}</span>
                      )}
                    </div>
                    <div className="text-sm text-white">{city.country}</div>
                  </div>
                  <Search className="h-4 w-4 text-white/40 transition-all group-hover:text-white/60" />
                </button>
              );
            })
          )}
        </article>
      )}
    </>
  );
}

export default SearchDropMenu;
