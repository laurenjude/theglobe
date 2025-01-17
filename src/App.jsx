import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetail from "./pages/CountryDetail";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [filtererdcountries, setfiltererdcountries] = useState([]);
  const [loading, setLoading] = useState(true);

  // ===============React Hooks===============

  // useState(): this is use to add state to a functional component... its a way to store and update values (like variables) inside your component

  // useEffect(): this is use to handle side effect in your component... side effects are things like fetching data,updating the UI... it run after the component renders

  // ===============FETCHING API ============

  useEffect(() => {
    const getData = async () => {
      const fetchAPI = await fetch("https://restcountries.com/v3.1/all");
      const jsonAPI = await fetchAPI.json();

      console.log(jsonAPI);
      setAllCountries(jsonAPI);
      setLoading(false);
    };
    setTimeout(() => {
      getData();
    }, 500);
  }, []);

  // ========== FILTER BY SEARCH ==========

  const filterBySearch = (input) => {
    const searchedCountry = allCountries.filter((country) => {
      return country.name.common.toLowerCase().includes(input);
    });
    setfiltererdcountries(searchedCountry);
  };

  // =========== FILTER BY REGION===============

  const filterByRegion = (continent) => {
    const selectedRegion = allCountries.filter((eachCountry) => {
      return eachCountry.region === continent;
    });
    setfiltererdcountries(selectedRegion);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                allCountries={
                  filtererdcountries.length > 0
                    ? filtererdcountries
                    : allCountries
                }
                filterBySearch={filterBySearch}
                filterByRegion={filterByRegion}
                loading={loading}
              />
            }
          />
          <Route path="/:countryname" element={<CountryDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
