import { MapPin, Sunrise, Sunset } from "lucide-react";
import React from "react";

function Dashboard() {
  return (
    <section className="grid grid-cols-1 gap-8 xl:grid-cols-3">
      <div className="xl:col-span-2">
        <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg transition-all duration-500 hover:bg-white/15">
          {/* header */}
          <header className="mb-8 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="rounded-full bg-white/10 p-2">
                <MapPin className="h-5 w-5 text-white/80" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">
                  Weather Condition
                </h2>
                <p className="text-sm text-white/60">Country</p>
              </div>
            </div>

            <div className="text-right">
              <div className="text-sm text-white/70">{/* display date */}</div>
              <div className="text-sm text-white/50">{/* display date */}</div>
            </div>
          </header>

          {/* weather data display */}
          <section className="mb-10 flex items-center justify-between">
            <article className="flex-1">
              <div className="mb-3 text-7xl font-bold tracking-tight text-white">
                Temp
              </div>
              <div className="mb-2 text-xl font-medium text-white/90 capitalize">
                Weather Description
              </div>
              <div className="flex items-center space-x-4 text-sm text-white/60">
                <span>Max Temp</span>
                <span>Min Temp</span>
              </div>
            </article>

            <article className="transform text-white/90 transition-transform duration-100 hover:scale-110">
              {/* display dynamic icons */}
            </article>
          </section>

          {/* weather data grid */}
          <section className="grid-cold-2 mb-6 grid gap-4 lg:grid-cols-3">
            {/* map method logic */}
            <article className="group rounded-2xl bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
              <div className="mb-2 flex items-center space-x-3">
                <div
                  className={`rounded-full bg-white/10 p-2 transition-all group-hover:bg-white/20`}
                >
                  {/* dynamic icons */}
                </div>

                <span className="text-sm font-medium text-white/70">
                  Stats Label
                </span>
              </div>
              <div className="pl-11 text-lg font-semibold text-white">
                Stats Value
              </div>
            </article>
          </section>

          {/* sun rise/set time */}
          <section className="grid grid-cols-2 gap-4">
            {/* rise time */}
            <article className="rounded-2xl border border-amber-400/20 bg-linear-to-r from-amber-500/20 to-yellow-500/20 p-4 backdrop-blur-sm">
              <div className="mb-2 flex items-center space-x-3">
                <div className="rounded-full bg-amber-400/20 p-2">
                  <Sunrise className="h-5 w-5 text-amber-300" />
                </div>
                <span className="text-sm font-medium text-white/80">
                  Sunrise
                </span>
              </div>

              <div className="pl-11 text-lg font-semibold text-white">
                {/* dynamic content */}
              </div>
            </article>

            {/* set time */}
            <article className="rounded-2xl border border-purple-400/20 bg-linear-to-r from-purple-500/20 to-pink-500/20 p-4 backdrop-blur-sm">
              <div className="mb-2 flex items-center space-x-3">
                <div className="rounded-full bg-purple-400/20 p-2">
                  <Sunset className="h-5 w-5 text-purple-300" />
                </div>
                <span className="text-sm font-medium text-white/80">
                  Sunset
                </span>
              </div>

              <div className="pl-11 text-lg font-semibold text-white">
                {/* dynamic content */}
              </div>
            </article>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
