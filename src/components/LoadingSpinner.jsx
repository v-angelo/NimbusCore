import React from "react";

function LoadingSpinner() {
  return (
    <article className="flex justify-center">
      <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-lg">
        <div className="flex items-center justify-center p-12">
          <div className="relative">
            {/* outer ring */}
            <div className="h-20 w-20 animate-spin rounded-full border-4 border-white/20 border-t-white/80 shadow-lg"></div>

            {/* inner ring */}
            <div className="absolute inset-2 h-12 w-12 animate-spin rounded-full border-3 border-blue-200/30 border-t-blue-200/80 [animation-delay:150ms]"></div>

            {/* center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-3 w-3 animate-pulse rounded-full bg-white/60"></div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-center font-medium text-white/80">
          Fetching latest weather data......
        </p>
      </div>
    </article>
  );
}

export default LoadingSpinner;
