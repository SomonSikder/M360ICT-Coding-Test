import React from "react";

import Filter from "./Filter";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="bg-dark">
      <div className="text-white py-5">
        <h2>SpaceX</h2>
        <div className="d-flex justify-content-center">
          <Filter></Filter>
          <SearchBar></SearchBar>
        </div>
      </div>
    </div>
  );
};

export default Header;
