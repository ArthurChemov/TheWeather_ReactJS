import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../utilities/api";
import "./Navbar.scss"

const Navbar = ({mode, isDark, onSearchChange}) => {
  const setLight = () => isDark(!mode);
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
	    .catch(err => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return(
    <div className="navbar bg-gradient" style={mode ? { backgroundColor: '#212529'  } : {backgroundColor: '#6c757d'}}>
      <header className="container text-white d-flex justify-content-between">
        <div className="title">
          <h2>Weather</h2>
          <h2>Weather</h2><i className="bi bi-thermometer-sun h2"></i>
        </div>
        <AsyncPaginate className="form-control ds-input w-50"
          placeholder="Search for city"
          debounceTimeout={600}
          value={search}
          onChange={handleOnChange}
          loadOptions={loadOptions}
        />
        {/* <form className="d-flex align-items-center w-50" autoComplete="off">
          <input type="search" className="form-control ds-input w-75" id="search-input" placeholder="Search..." aria-label="Search..." value={search} loadOptions={loadOptions} onChange={handleOnChange}/>
        </form> */}
        <h2 className="mode">
          <button type="button" className={`bi ${mode ? 'bi-brightness-high-fill':'bi-moon-stars-fill'}`} onClick={setLight}></button>
        </h2>
      </header>
    </div>
  );
}

export default Navbar;