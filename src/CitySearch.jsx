import React, { useState, useEffect } from "react";
import citiesData from "./cities.json";

import styles from "./CitySearch.module.css"

const CitySearch = () => {
  const [search, setsearch] = useState("");
  const [closestCity, setClosestCity] = useState("");

  const getClosestCity = (search) => {
    if (!search) {
      setClosestCity("");
      return;
    }
    const filteredCities = citiesData.filter((city) =>
      city.startsWith(search)
    );
    setClosestCity(filteredCities.length > 0 ? filteredCities[0] : "");
  };

  const changeHandler = (e) => {
    const value = e.target.value;
    setsearch(value);
    getClosestCity(value);
  };

    return (
        <div className={styles.container}>
          <input 
            type="text"
            value={search} 
            onChange={changeHandler}
            placeholder="Enter city's name.."
          />
          {closestCity && (
            <div className={styles.div}>
              {closestCity}
            </div>
          )}
        </div>
      );
    };
export default CitySearch;

