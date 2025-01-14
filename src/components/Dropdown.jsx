import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
const Dropdown = ({ filterByRegion }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const [options, setoptions] = useState([
    "ALL",
    "Africa",
    "Americas",
    "Antartic",
    "Asia",
    "Europe",
    "Oceania",
    "...",
  ]);

  const [selectedRegion, setSelectedRegion] = useState("Filter By Region");

  return (
    <div
      onClick={() => {
        setToggleDropdown(!toggleDropdown);
      }}
      className="d-flex align-items-center gap-5 shadow p-3 rounded-2 custom-text-color position-relative dropdown-display"
    >
      <p className="mb-0 custom-text-color ">{selectedRegion}</p>
      <RiArrowDownSLine
        style={{
          transform: toggleDropdown ? "rotate(180deg)" : "rotate(0deg)",
          transition: "0.3s ease-in-out",
        }}
      />
      {/* conditional rendering */}
      {toggleDropdown && (
        <ul className="position-absolute dropdown-option bg-element px-0 py-2 rounded-2 shadow">
          {options.map((option) => {
            return (
              <li
                onClick={() => {
                  setSelectedRegion(
                    option === "All" ? "Filter by Region" : option
                  );

                  filterByRegion(option);
                }}
                className="px-3 py-1"
              >
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
