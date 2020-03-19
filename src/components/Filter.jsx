import React from "react";
import "../stylesheets/Filter.scss";
function Filter(props) {
  const handleSearchCategory = ev => {
    props.handleSearchCategory({ value: ev.target.value });
  };

  const handleSearchType = ev => {
    props.handleSearchType({ value: ev.target.value });
  };

  const handleSearchDif = ev => {
    props.handleSearchDif({ value: ev.target.value });
    console.log(ev.target.value);
  };

  return (
    <div className="filters">
      <input
        onChange={handleSearchCategory}
        id="searchCategory"
        type="text"
        className="filters__input"
        placeholder="Search By Category"
        value={props.searchCategory}
      />
      <input
        onChange={handleSearchType}
        id="searchType"
        type="text"
        className="filters__input"
        placeholder="Search By Type"
        value={props.searchType}
      />


      <input
        onChange={handleSearchDif}
        id="searchDifficulty"
        type="text"
        className="filters__input"
        placeholder="Search By Difficulty"
        value={props.searchDif}
      />
    </div>
  );
}

export default Filter;
