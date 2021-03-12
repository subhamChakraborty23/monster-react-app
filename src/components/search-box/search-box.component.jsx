import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({placeholder,handleChange}) => {
  return (
    <input
      className="search"
      type="search"
      placehoder={placeholder}
      onChange={handleChange} />
  );
};
