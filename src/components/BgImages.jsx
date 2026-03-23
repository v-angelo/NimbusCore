import { motion, AnimatePresence } from "motion/react";
import React, { useEffect, useState } from "react";
import { getBgImage } from "../utilities/weatherUtilities";

function BgImages({ currentWeather }) {
  const [bgUrl, setBgUrl] = useState(`'/default.jpg'`);

  useEffect(() => {
    const bgImg = getBgImage(currentWeather);
    if (!bgImg) return;

    const img = new Image();
    img.src = bgImg;
    img.onload = () => setBgUrl(bgImg);
  }, [currentWeather]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={bgUrl}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgUrl})`,
        }}
      ></motion.div>
    </AnimatePresence>
  );
}

export default BgImages;
