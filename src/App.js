import { useEffect, useState } from "react";
import "./App.css";
import Cities from "./component/Cities";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Image from "./component/Image";
import Navbar from "./component/Navbar";
import News from "./component/News";

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const apiKey = "53700bda70338d6b9fa2f5ccccea694d";
  const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  const getData = async () => {
    try {
      let res = await fetch(api);
      let data = await res.json();
      // console.log(data);
    } catch (err) {
      // console.log(err);
    }
  };
  getData();
  console.log(latitude);
  console.log(longitude);
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
