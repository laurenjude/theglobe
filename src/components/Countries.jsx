import React from "react";
import { Link } from "react-router-dom";

const Countries = ({ allCountries }) => {
  return (
    <div className="allcountries p-5">
      {allCountries.map((country) => {
        return (
          <Link
            key={country.name.common}
            to={`/${country.name.common}`}
            className="text-decoration-none text-black bg-element custom-text-color "
          >
            <div className="shadow rounded-2">
              <img className="rounded-top-2" src={country.flags.png} alt="" />
              <div className="text-start custom-text-color bg-element">
                <h3 className="mb-3">{country.name.common}</h3>
                <p className="mb-1">
                  <b>Population:</b> {country.population.toLocaleString()}{" "}
                </p>
                <p className="mb-1">
                  <b>Region:</b> {country.region}{" "}
                </p>
                <p className="mb-1">
                  <b>Capital:</b> {country.capital}{" "}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Countries;
