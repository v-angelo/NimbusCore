import { Calendar, Droplets } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import React from "react";
import {
  formatDate,
  formatTemp,
  getWeatherIcon,
} from "../utilities/weatherUtilities";

const animateParent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
      ease: "easeInOut",
    },
  },
};

const animateChild = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function WeatherForecast({ forecast, unit }) {
  const dailyForecast = forecast.list.reduce((acc, item) => {
    const date = new Date(item.dt * 1000).toDateString();

    if (!acc[date]) {
      acc[date] = item;
    }

    return acc;
  }, {});

  const dailyItems = Object.values(dailyForecast).slice(0, 5);

  return (
    <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg transition-all duration-500 hover:bg-white/15">
      <div className="mb-8 flex items-center space-x-3">
        <div className="rounded-full bg-white/10 p-2">
          <Calendar className="h-6 w-6 text-white/80" />
        </div>
        <h2 className="text-2xl font-bold text-white">5 Day Forecast</h2>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          variants={animateParent}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {/* map method logic */}
          {dailyItems.map((item, index) => {
            const iconName = getWeatherIcon(item.weather[0]);
            const IconComponent = LucideIcons[iconName] || LucideIcons.Cloud;

            return (
              <motion.article
                key={index}
                variants={animateChild}
                className="group flex cursor-pointer items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:bg-white/10"
              >
                {/* forecast data */}
                <div className="flex flex-1 items-center space-x-5">
                  <div className="transform text-white/90 transition-all duration-300 group-hover:scale-110 group-hover:text-white">
                    {/* dynamic icons */}
                    <IconComponent size={40} />
                  </div>

                  <div className="flex-1">
                    <div className="text-lg font-semibold text-white">
                      {/* date from api here */}
                      {index === 0 ? "Today" : formatDate(item.dt)}
                    </div>

                    <div className="text-sm font-medium text-white/70 capitalize">
                      {item.weather[0].description}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2 text-white/60">
                    <Droplets className="h-5 w-5 text-blue-300" />
                    <span className="text-sm font-medium">
                      {Math.round(item.pop * 100)}%
                    </span>
                  </div>

                  <div className="text-right">
                    <div className="text-xl font-bold text-white">
                      {formatTemp(item.main.temp_max, unit)}°
                    </div>
                    <div className="text-sm font-medium text-white">
                      {formatTemp(item.main.temp_min, unit)}°
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default WeatherForecast;
