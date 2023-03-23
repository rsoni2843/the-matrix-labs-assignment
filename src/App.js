import { useContext, useEffect, useRef, useState } from "react";
import "./App.css";
import Cities from "./component/Cities";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Image from "./component/Image";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { NavbarContext } from "./context/NavbarContext";

function App() {
  const { loading, error } = useContext(NavbarContext);
  // const handleScrollToElement = (event) => {
  //   // window.scrollTo(0, myRef.current.offsetTop);
  // };

  if (loading) {
    return (
      <div className="loading-img">
        <img
          src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
          alt="Loading"
        />
      </div>
    );
  }
  if (error) {
    return <h1>Some Error Occured. Kindly refresh the page.</h1>;
  }
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Cities />
      <Image />
      <News />
      <Footer />
    </div>
  );
}

export default App;

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
