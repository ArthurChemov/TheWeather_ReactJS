import { BrowserRouter } from 'react-router-dom';
import { useState } from "react";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./components/utilities/api";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import Forecast from "./components/forecast/Forecast";
import Navbar from "./components/menu/Navbar"
import "./scss/custom.scss"

function App() {
  const[mode, isDark] = useState(true);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };

  return (
    <div className={`app ${mode ? 'bg-gradient':'bg-gradient'}`} style={mode ? { backgroundColor: '#212529'  } : {backgroundColor: '#ced4da'}}>
      <BrowserRouter>
        <Navbar mode = {mode} isDark = {isDark} onSearchChange={handleOnSearchChange}/>
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
      </BrowserRouter>
    </div>
  );
}

export default App;
