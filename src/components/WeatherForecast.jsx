import { Calendar, Droplets } from "lucide-react";
import React from "react";

function WeatherForecast() {
  return (
    <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg transition-all duration-500 hover:bg-white/15">
      <div className="mb-8 flex items-center space-x-3">
        <div className="rounded-full bg-white/10 p-2">
          <Calendar className="h-6 w-6 text-white/80" />
        </div>
        <h2 className="text-2xl font-bold text-white">5 Day Forecast</h2>
      </div>

      <div className="space-y-4">
        {/* map method logic */}
        <div className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
          {/* forecast data */}
          <div className="flex flex-1 items-center space-x-5">
            <div className="transform text-white/90 transition-all duration-300 group-hover:scale-110 group-hover:text-white">
              {/* dynamic icons */}
            </div>

            <div className="flex-1">
              <div className="text-lg font-semibold text-white">
                {/* date from api here */}
              </div>

              <div className="text-sm font-medium text-white/70 capitalize">
                Weather Description
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-white/60">
              <Droplets className="h-5 w-5 text-blue-300" />
              <span className="text-sm font-medium">{/* details */}</span>
            </div>

            <div className="text-right">
              <div className="text-xl font-bold text-white">Temperature</div>
              <div className="text-sm font-medium text-white">Main temp</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecast;
