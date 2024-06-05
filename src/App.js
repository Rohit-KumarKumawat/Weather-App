import { useEffect, useState } from "react";
import Input from "./components/Input";
import Card from "./components/Card";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";
import nature from "./video/sunrise.mp4";
import Button from "./components/Button";
import { useWeather } from "./context/Weather";
import "./App.css";
import darkest from "./video/darkest.mp4";

function App() {
  const weather = useWeather();
  console.log(weather);
  useEffect(() => {
    weather.fetchCurrentUserLocationData();
  }, []);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className={`parent ${isDarkTheme ? "dark-theme" : ""}`}>
      {isDarkTheme ? (
        <video src={darkest} autoPlay muted loop className="video1"></video>
      ) : (
        <video src={nature} autoPlay muted loop className="video1"></video>
      )}
      <div className="App">
        <button className="btn-dark" type="button" onClick={toggleTheme}>
          {isDarkTheme ? <RiMoonClearLine /> : <RiSunLine />}
        </button>
        <h1>Check Weather Now !! </h1>
        <Input />
        <Button onClick={weather.fetchData} value="Search" />
        <Card />
        <Button value="Refresh" onClick={weather.Refresh} />
      </div>
    </div>
  );
}

export default App;
