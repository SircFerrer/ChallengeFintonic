import React from "react";
import "../stylesheets/Filter.scss";
function Filter(props) {
  return (
    <div className="filters">
      <input
        id="search "
        type="text"
        className="filters__input"
        placeholder="Search By Category"
      />
      <input
        id="search "
        type="text"
        className="filters__input"
        placeholder="Search By Type"
      />
      <input
        id="search "
        type="text"
        className="filters__input"
        placeholder="Search By Difficulty"
      />
    </div>
  );
}

export default Filter;
