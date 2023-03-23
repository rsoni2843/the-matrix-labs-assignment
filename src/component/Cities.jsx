import React, { useEffect, useState } from "react";
import "../App.css";
import "../styles/Cities.css";
import { city } from "../data";
import { useInView } from "react-intersection-observer";
const img =
  "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
const Cities = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <>
      <main ref={ref} className="container city-parent">
        <h2 className="heading">Cities</h2>
        <div className={"city-cards-parent"}>
          {city?.map((el, i) => {
            return (
              <div
                id="box"
                key={el.id}
                className={` ${
                  inView
                    ? " scale-up-hor-center  city-card-child"
                    : "city-card-child"
                }`}
              >
                <img src={el.img} />
                <div className="city-card-weather-details">
                  <span>24°C </span>
                  <span>{el.name}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="input-container">
          <input placeholder="Search Text" />
        </div>
      </main>
    </>
  );
};

export default Cities;
