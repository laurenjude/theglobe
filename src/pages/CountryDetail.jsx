import React, { useEffect, useState } from "react";
import EachCountry from "../components/EachCountry";
import { useParams } from "react-router-dom";

const CountryDetail = () => {
  const { countryname } = useParams();
  const [eachCountry, setEachCountry] = useState({});
  useEffect(() => {
    const getEachData = async () => {
      const fetchEachAPI = await fetch(
        `https://restcountries.com/v3.1/name/${countryname}`
      );
      const eachJsonAPI = await fetchEachAPI.json();

      console.log(eachJsonAPI[0]);
      setEachCountry(eachJsonAPI[0]);
    };
    getEachData();
  }, []);
  return (
    <div>
      <EachCountry eachCountry={eachCountry} />
    </div>
  );
};

export default CountryDetail;
