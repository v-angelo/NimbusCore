import React from "react";

function ToggleTemp() {
  return (
    <section className="rounded-2xl border border-white/20 bg-white/10 p-1 shadow-lg backdrop-blur-lg">
      <article className="flex items-center">
        <button
          className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300`}
        >
          °C
        </button>
        <button
          className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300`}
        >
          °F
        </button>
      </article>
    </section>
  );
}

export default ToggleTemp;
