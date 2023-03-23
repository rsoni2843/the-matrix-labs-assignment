import React, { useContext } from "react";
import "../styles/Home.css";
import "../App.css";
import { NavbarContext } from "../context/NavbarContext";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { data, error } = useContext(NavbarContext);
  console.log(data);
  console.log(data);
  const d = new Date();
  let weekDay = d.toLocaleDateString("en-US", { weekday: "long" });
  let time = d.toLocaleTimeString();
  let date = d.toLocaleDateString();
  console.log(weekDay, time, date);

  if (error) {
    return <h1>Some error occured...</h1>;
  }

  return (
    <>
      <main ref={ref} className="home-parent container">
        <div className={` ${inView ? " home-child slide-top" : "home-child "}`}>
          <p className="degree">
            {data && Math?.floor(Number(data?.main?.temp - 273.15)) + "°C"}
          </p>
          <div>
            <span className="city">{data?.name}</span>
            <br />
            <span>{`${weekDay}  ${date}`}</span>
          </div>
        </div>

        {data && data?.main ? (
          <div
            className={` ${inView ? " home-child slide-top" : "home-child "}`}
          >
            <h4>Weather Details</h4>
            <div>
              <div className="weather-details">
                <span>{`Humidity`}</span>
                <span>{data?.main?.humidity + "%"}</span>
              </div>
              <div className="weather-details">
                <span>{`Pressure`}</span>
                <span>{data?.main?.pressure}</span>
              </div>
              <div className="weather-details">
                <span>{`Temprature Range`}</span>
                <span>
                  {Math?.floor(Number(data?.main?.temp_min - 273.15)) + "°C "}
                  {" - "}
                  {Math?.floor(Number(data?.main?.temp_max - 273.15)) + "°C"}
                </span>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </>
  );
};

export default Home;
