"use client"
import Glide from "@glidejs/glide";
import { useEffect } from "react";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

export default function MobileSlider({ children,ctrl}) {
  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "slider",
      startAt: 0,
      perView: 1,
      peek: {
        before: 4,
        after: 60
      },
      rewind:false,
    });

    glide.mount(); // Initialize the slider

    return () => {
      glide.destroy(); // Clean up the slider when the component unmounts
    };
  }, [ctrl]);

  return (
    <div className="text-sm">
      <div
        id="options-peek"
        className="slider glide glide--swipeable glide--ltr glide--slider"
      >
        <div className="slider__track glide__track" data-glide-el="track">
          <ul
            className="slider__slides glide__slides">
            {children}
          </ul>
        </div>
      </div>
    </div>
  );
}