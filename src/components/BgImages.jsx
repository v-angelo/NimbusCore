import React from "react";

function BgImages() {
  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/thunder.jpg')` }}
      ></div>
      <div className="absolute inset-0 bg-linear-to-br from-blue-900/40 via-purple-900/30 to-indigo-900/40"></div>
      <div className="absolute inset-0 bg-black/10"></div>
    </>
  );
}

export default BgImages;
