import React from "react";

function Search({ setSearchText }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={(event) => setSearchText(event.target.value)} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
