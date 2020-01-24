import React, { useState } from "react";

import "./Burger.css";

import BurgerIcon from "./icons/burger.svg";
import ClosedIcon from "./icons/closed.svg";

export default function Burger() {
  const [burgerClicked, setBurgerClicked] = useState(false);

  const onClickHandler = () => {
    setBurgerClicked(!burgerClicked);
  };

  return (
    <div className="burger-wrapper">
      {!burgerClicked ? (
        <BurgerIcon className="burger" onClick={onClickHandler} />
      ) : (
        <ClosedIcon className="burger" onClick={onClickHandler} />
      )}
    </div>
  );
}
