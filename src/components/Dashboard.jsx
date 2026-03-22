import React from "react";
import WeatherDisplay from "./WeatherDisplay";
import WeatherForecast from "./WeatherForecast";

function Dashboard({ forecast, weatherData, unit }) {
  return (
    <section className="grid grid-cols-1 gap-8 xl:grid-cols-3">
      {/* current weather data display */}
      <article className="xl:col-span-2">
        <WeatherDisplay weatherData={weatherData} unit={unit} />
      </article>

      {/* weather forecast display */}
      <article className="xl:col-span-1">
        {forecast && <WeatherForecast />}
      </article>
    </section>
  );
}

export default Dashboard;
