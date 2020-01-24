import React from "react";

import "./App.css";

import Search from "../../components/search/Search.jsx";
import Button from "../../components/button/Button.jsx";
import Burger from "../../components/burger/Burger.jsx";

const App = () => {
  function randomColor() {
    return `rgb(
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)},
      ${Math.floor(Math.random() * 256)})`;
  }

  const componentCount = 3;

  return (
    <>
      <section
        style={{
          background: randomColor(),
          height: `${100 / componentCount}vh`
        }}
      >
        <Search />
      </section>
      <section
        style={{
          background: randomColor(),
          height: `${100 / componentCount}vh`
        }}
      >
        <Button />
      </section>
      <section
        style={{
          background: randomColor(),
          height: `${100 / componentCount}vh`
        }}
      >
        <Burger />
      </section>
    </>
  );
};

export default App;
