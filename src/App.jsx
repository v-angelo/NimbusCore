import React from "react";
import Header from "./components/Header";
import BgImages from "./components/BgImages";
import SearchBar from "./components/SearchBar";
import ToggleTemp from "./components/ToggleTemp";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMsg from "./components/ErrorMsg";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* background images */}
      <BgImages />

      {/* content */}
      <main className="relative z-10 container mx-auto min-h-screen px-4 py-8">
        {/* header */}
        <Header />

        {/* search and temp toggle */}
        <section className="mb-12 flex flex-col items-center justify-center space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6">
          {/* <SearchBar />
          <ToggleTemp /> */}
        </section>

        {/* main content */}
        <section className="space-y-8">
          {/* <LoadingSpinner />
          <ErrorMsg /> */}

          <Dashboard />
        </section>
      </main>
    </div>
  );
}

export default App;
