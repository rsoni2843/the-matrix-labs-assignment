import React, { createContext, useEffect, useRef, useState } from "react";

export const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  // const apiKey = "53700bda70338d6b9fa2f5ccccea694d";
  // const apiKey = "c7f9c9a78a4cd042da5f59662aa12a1d";
  const apiKey = "791550d7268c458ae2e3d40881b7f913";
  const api = `https://api.openweathermap.org/data/2.5/weather?lat=${
    latitude || 12.9716
  }&lon=${longitude || 77.5946}&appid=${apiKey}`;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      let res = await fetch(api);
      let data = await res.json();
      setLoading(false);
      setError(false);
      setData(data);
      // console.log(data);
    } catch (err) {
      setLoading(false);
      setError(true);
      // console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, [latitude, longitude]);

  return (
    <>
      <NavbarContext.Provider value={{ data, loading, error }}>
        {children}
      </NavbarContext.Provider>
    </>
  );
};

export default NavbarProvider;
