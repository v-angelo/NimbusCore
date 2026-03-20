import React from "react";

function Header() {
  return (
    <header className="mx-auto max-w-7xl">
      <section className="mb-12 text-center">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-white/85 drop-shadow-2xl md:text-6xl">
          Nimbus{" "}
          <span className="bg-linear-to-r from-yellow-300/85 via-amber-400/85 to-orange-500/85 bg-clip-text text-transparent">
            Core
          </span>
        </h1>
      </section>
    </header>
  );
}

export default Header;
