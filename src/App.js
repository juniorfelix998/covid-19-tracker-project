import { FormControl, MenuItem, Select } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import InfoBox from './InfoBox'
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  // STATE = how to write a variable in react
  // https://disease.sh/v3/covid-19/countries
  // USEEFFECT = Runs a Piece of code based on a given condition

  useEffect(() => {
    // The code inside here will run once
    // when the component loads and will not run again
    // async -> send a request, wait for it and do something
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, // united states,united kingdom,india
            value: country.countryInfo.iso2, //uk,usa,fr
          }));

          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  };


      {/*Header */}
      {/*Title and Select Input dropdown */}

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value={country.value}>{country.name}</MenuItem>
            {/* Loop Through all the countries 
            and show a drop down*/}
            <MenuItem value="worldwide">WorldWide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}

            {/* <MenuItem value="worldwide">WorldWide</MenuItem>
            <MenuItem value="worldwide">WorldWide</MenuItem>
            <MenuItem value="worldwide">WorldWide</MenuItem>
            <MenuItem value="worldwide">WorldWide</MenuItem> */}
          </Select>
        </FormControl>
      </div>

      <div className="app__stats">
        <InfoBox title="Coronavirus Cases" cases={123} total={2000}/>

        <InfoBox title="Recovered" cases={1234} total={3000}/>

        <InfoBox title="Deaths" cases={1237} total={4000}/>

        {/*InfoBox */}
        {/*InfoBox */}
        {/*InfoBox */}

      </div>


      

      {/*Table */}
      {/*Graph */}

      {/*Map */}
    </div>
  );
}

export default App;
