import React from "react";
import SearchField from "./SearchField";
import SearchDropMenu from "./SearchDropMenu";

function SearchBar() {
  return (
    <section className="relative w-full max-w-2xl">
      <SearchField />

      <SearchDropMenu />
    </section>
  );
}

export default SearchBar;
