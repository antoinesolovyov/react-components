import React, { useState } from "react";

import SearchIcon from "./icons/search.svg";
import CameraIcon from "./icons/camera.svg";

import "./Search.css";

export default function Search(props) {
  const [value, setValue] = useState("");

  const inputOnChange = event => {
    setValue(event.target.value);
  };

  return (
    <div className="search-wrapper">
      <div className="search-icon-wrapper">
        <SearchIcon className="search-icon" />
      </div>
      <input
        className="search"
        type="text"
        value={value}
        onChange={inputOnChange}
        placeholder="Search"
      />
      <div className="camera-icon-wrapper">
        <CameraIcon className="camera-icon" />
      </div>
    </div>
  );
}
