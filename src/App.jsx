import React from "react";
import Header from "./components/Header";
import BgImages from "./components/BgImages";
import SearchBar from "./components/SearchBar";
import ToggleTemp from "./components/ToggleTemp";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMsg from "./components/ErrorMsg";
import Dashboard from "./components/Dashboard";
import { useWeather } from "./hooks/useWeather";

function App() {
  const {
    currentWeather,
    forecast,
    loading,
    error,
    unit,
    fetchWeatherByCity,
    fetchWeatherByLocation,
    toggleUnit,
  } = useWeather();

  const handleRetry = () => {
    if (currentWeather) {
      fetchWeatherByCity(currentWeather.name);
    } else {
      fetchWeatherByCity("london");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* background images */}
      <BgImages currentWeather={currentWeather} />
      <div className="absolute inset-0 bg-linear-to-br from-blue-900/30 via-purple-900/20 to-indigo-900/30"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      {/* content */}
      <main className="relative z-10 container mx-auto min-h-screen px-4 py-8">
        {/* header */}
        <Header />

        {/* search and temp toggle */}
        <section className="mb-12 flex flex-col items-center justify-center space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6">
          <SearchBar
            onSearch={fetchWeatherByCity}
            onLocationSearch={fetchWeatherByLocation}
            loading={loading}
          />
          <ToggleTemp unit={unit} onToggle={toggleUnit} />
        </section>

        {/* dashboard */}
        <section className="space-y-8">
          {loading && <LoadingSpinner />}

          {error && !loading && (
            <ErrorMsg message={error} onRetry={handleRetry} />
          )}

          {currentWeather && !loading && (
            <Dashboard
              forecast={forecast}
              weatherData={currentWeather}
              unit={unit}
            />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
