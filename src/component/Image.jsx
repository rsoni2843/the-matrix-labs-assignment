import React from "react";
import { useInView } from "react-intersection-observer";
import "../App.css";
const Image = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <>
      <main ref={ref} className="container image-parent">
        <h2>Earth</h2>
        <img
          className={` ${
            inView ? " scale-up-center  earth-image" : "earth-image"
          }`}
          src="https://upload.wikimedia.org/wikipedia/commons/2/22/Earth_Western_Hemisphere_transparent_background.png"
          alt=""
        />
      </main>
    </>
  );
};

export default Image;
