"use client";

import React from "react";
import Shape from "../../../../public/assets/images/shape.png";

export default function BackgroundShapeImage() {
  return (
    <img
      src={Shape.src}
      alt="background shape"
      style={{
        position: "absolute",
        top: "150px", // يبدأ بعد الـ navbar
        left: "-550px",
        width: "2200px",
        height: "627px",
        transform: "rotate(150.8deg)",
        opacity: 0.9,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}



