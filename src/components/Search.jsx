import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
const Search = ({ filterBySearch }) => {
  return (
    <form className="position-relative">
      <BiSearchAlt2 className="fs-2 ms-4 position-absolute search-icon custom-text-color bg-element" />
      <input
        onChange={(event) => {
          filterBySearch(event.target.value.toLocaleLowerCase());
        }}
        className=" py-3 border-0 shadow  pe-2 ronded-2 bg-element custom-text-color sp"
        type="text"
        placeholder="Search For A Country..."
      />
    </form>
  );
};

export default Search;
