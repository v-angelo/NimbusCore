import React from "react";
import {
  MapPin,
  Sunrise,
  Sunset,
  Eye,
  Wind,
  Waves,
  Droplets,
  Gauge,
  Thermometer,
} from "lucide-react";

import {
  formatTemp,
  formatTime,
  getWeatherIcon,
  getWindDirection,
} from "../utilities/weatherUtilities";
import * as LucideIcons from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const animateParent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const animateChild = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

function WeatherDisplay({ weatherData, unit }) {
  const iconName = getWeatherIcon(weatherData.weather[0]);
  const IconComponent = LucideIcons[iconName] || LucideIcons.Cloud;

  const weatherStats = [
    {
      icon: Eye,
      label: "Visibility",
      value: `${(weatherData.visibility / 1000).toFixed(1)} km`,
      color: "text-cyan-400",
    },
    {
      icon: Wind,
      label: "Wind Speed",
      value: `${weatherData.wind.speed.toFixed(1)} m/s`,
      color: "text-green-400",
    },
    {
      icon: Waves,
      label: "Wind Direction",
      value: `${getWindDirection(weatherData.wind.deg)}: ${weatherData.wind.deg}°`,
      color: "text-emerald-400",
    },
    {
      icon: Droplets,
      label: "Humidity",
      value: `${weatherData.main.humidity}%`,
      color: "text-teal-400",
    },
    {
      icon: Gauge,
      label: "Pressure",
      value: `${weatherData.main.pressure} hPa`,
      color: "text-fuchsia-400",
    },
    {
      icon: Thermometer,
      label: "Feels Like",
      value: `${formatTemp(weatherData.main.feels_like, unit)}°${unit}`,
      color: "text-violet-400",
    },
  ];

  return (
    <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg transition-all duration-500 hover:bg-white/15">
      {/* header */}
      <header className="mb-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="rounded-full bg-white/10 p-2">
            <MapPin className="h-5 w-5 text-white/80" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">
              {weatherData.name}
            </h2>
            <p className="text-sm text-white/60">{weatherData.sys.country}</p>
          </div>
        </div>

        <div className="text-right">
          <div className="text-sm text-white/70">
            {new Date(weatherData.dt * 1000).toLocaleDateString("en-US", {
              weekday: "long",
              month: "short",
              day: "numeric",
            })}
          </div>
          <div className="text-sm text-white/50">
            {new Date(weatherData.dt * 1000).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      </header>

      {/* weather data display */}
      <section className="mb-10 flex items-center justify-between">
        <article className="flex-1">
          <motion.div
            initial={{ scale: 0.8, x: 0, y: 0 }}
            animate={{ scale: 1, x: 0, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="mb-3 text-7xl font-bold tracking-tight text-white"
          >
            {formatTemp(weatherData.main.temp, unit)}°
            <span className="text-4xl font-normal text-white/70">{unit}</span>
          </motion.div>
          <div className="mb-2 text-xl font-medium text-white/90 capitalize">
            {weatherData.weather[0].description}
          </div>
          <div className="flex items-center space-x-4 text-sm text-white/60">
            <span>Max: {formatTemp(weatherData.main.temp_max, unit)}°</span>
            <span>Min: {formatTemp(weatherData.main.temp_min, unit)}°</span>
          </div>
        </article>

        <motion.article
          key={IconComponent}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9, y: 1 }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 2,
          }}
          className="cursor-pointer text-white/90"
        >
          {/* display dynamic icons */}
          <IconComponent size="100" className="drop-shadow-2xl" />
        </motion.article>
      </section>

      {/* weather data grid */}
      <AnimatePresence mode="wait">
        <motion.section
          variants={animateParent}
          initial="hidden"
          animate="visible"
          className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-3"
        >
          {/* map method logic */}
          {weatherStats.map((stat, index) => (
            <motion.article
              key={index}
              variants={animateChild}
              className="group cursor-pointer rounded-2xl bg-white/5 p-4 backdrop-blur-sm hover:bg-white/10"
            >
              <div className="mb-2 flex items-center space-x-3">
                <div
                  className={`rounded-full bg-white/10 p-2 transition-all group-hover:bg-white/20`}
                >
                  {/* dynamic icons */}
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>

                <span className="text-sm font-medium text-white/70">
                  {stat.label}
                </span>
              </div>
              <div className="pl-11 text-lg font-semibold text-white">
                {stat.value}
              </div>
            </motion.article>
          ))}
        </motion.section>
      </AnimatePresence>

      {/* sun rise/set time */}
      <AnimatePresence mode="wait">
        <motion.section className="grid grid-cols-2 gap-4">
          {/* rise time */}
          <motion.article
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="cursor-pointer rounded-2xl border border-amber-400/20 bg-linear-to-r from-amber-500/20 to-yellow-500/20 p-4 backdrop-blur-sm hover:from-amber-500/30 hover:to-yellow-500/30"
          >
            <div className="mb-2 flex items-center space-x-3">
              <div className="rounded-full bg-amber-400/20 p-2">
                <Sunrise className="h-5 w-5 text-amber-300" />
              </div>
              <span className="text-sm font-medium text-white/80">Sunrise</span>
            </div>

            <div className="pl-11 text-lg font-semibold text-white">
              {/* dynamic content */}
              {formatTime(weatherData.sys.sunrise)}
            </div>
          </motion.article>

          {/* set time */}
          <motion.article
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="cursor-pointer rounded-2xl border border-purple-400/20 bg-linear-to-r from-purple-500/20 to-pink-500/20 p-4 backdrop-blur-sm hover:from-purple-500/30 hover:to-pink-500/30"
          >
            <div className="mb-2 flex items-center space-x-3">
              <div className="rounded-full bg-purple-400/20 p-2">
                <Sunset className="h-5 w-5 text-purple-300" />
              </div>
              <span className="text-sm font-medium text-white/80">Sunset</span>
            </div>

            <div className="pl-11 text-lg font-semibold text-white">
              {/* dynamic content */}
              {formatTime(weatherData.sys.sunset)}
            </div>
          </motion.article>
        </motion.section>
      </AnimatePresence>
    </div>
  );
}

export default WeatherDisplay;
