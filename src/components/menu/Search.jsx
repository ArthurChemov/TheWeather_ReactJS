import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../utilities/api";
// import axios from "axios";
import "./Search.scss"

const Search = ({onSearchChange}) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {

    // const geoApiOptions = {
    //   method: 'GET',
    //   url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000&namePrefix=${inputValue}`,
    //   headers: {
    //     'X-RapidAPI-Key': '55590aa86bmshed775f2c0cf0312p108afcjsnac7a1f012bdc',
    //     'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    //   }
    // };

    // axios.request(geoApiOptions)
    // .then(function (response) {
    //   return(response.data);
    // }).catch(function (error) {
    //   console.error(error);
    // });

    return fetch(
      `${GEO_API_URL}?minPopulation=1000&namePrefix=${inputValue}`,
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
    <form>
        <div className="inputer">
            <AsyncPaginate className="form-control ds-input"
                placeholder="Search for city"
                debounceTimeout={600}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}
            />
        </div>
    </form>
  );
}

export default Search;