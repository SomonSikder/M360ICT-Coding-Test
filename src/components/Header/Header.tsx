import React from "react";

import Filter from "./Filter";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="bg-dark">
      <div className="text-white text-center p-4">
        <h2 className="mb-3">SpaceX</h2>
        <div className="d-flex justify-content-center">
          <Filter></Filter>
          <SearchBar></SearchBar>
        </div>
      </div>
    </div>
  );
};

export default Header;
