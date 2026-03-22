import React from "react";

function ToggleTemp({ unit, onToggle }) {
  return (
    <section className="rounded-2xl border border-white/20 bg-white/10 p-1 shadow-lg backdrop-blur-lg">
      <article className="flex items-center">
        <button
          onClick={onToggle}
          className={`cursor-pointer rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 ease-in-out ${unit === "C" ? "scale-105 transform bg-white text-purple-600 shadow-lg" : "text-white/70 hover:bg-white/10 hover:text-white"}`}
        >
          °C
        </button>
        <button
          onClick={onToggle}
          className={`cursor-pointer rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 ease-in-out ${unit === "F" ? "scale-105 transform bg-white text-purple-600 shadow-lg" : "text-white/70 hover:bg-white/10 hover:text-white"}`}
        >
          °F
        </button>
      </article>
    </section>
  );
}

export default ToggleTemp;
