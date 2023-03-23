import React from "react";
import "../App.css";
import "../styles/News.css";
import { city } from "../data";
import { useInView } from "react-intersection-observer";
const News = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <>
      <main ref={ref} className="container">
        <h2 className="heading">News</h2>
        <div className="news-parent">
          {city?.map((el, i) => {
            return (
              <div
                className={` ${inView ? " fade-in  news-child" : "news-child"}`}
                key={el.id}
              >
                <img src={el.img} alt={el.name} />
                <span>{el.name}</span>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default News;
