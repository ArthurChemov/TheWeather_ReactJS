import { useState } from "react";
import Media from 'react-media';
import { WEATHER_API_URL, WEATHER_API_KEY } from "./components/utilities/api";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import Forecast from "./components/forecast/Forecast";
import Navbar from "./components/menu/Navbar"
import Search from './components/menu/Search';
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
    <section className={`app ${mode ? 'bg-gradient':'bg-gradient'}`} style={mode ? { backgroundColor: '#212529'  } : {backgroundColor: '#ced4da'}}>
      <Navbar mode = {mode} isDark = {isDark}/>
      <Search onSearchChange={handleOnSearchChange}/>
      <Media query="screen and (max-width: 900px)" render={() =>
          (
            <div className='d-flex flex-column full-weather'>
              {currentWeather && <CurrentWeather data={currentWeather} />}
              {forecast && <Forecast data={forecast} />}
            </div>
          )}
        />
      <Media query="screen and (min-width: 900px)" render={() =>
          (
            <div className='d-flex flex-row full-weather'>
              {currentWeather && <CurrentWeather data={currentWeather} />}
              {forecast && <Forecast data={forecast} />}
            </div>
          )}
        />
    </section>
  );
}

export default App;
