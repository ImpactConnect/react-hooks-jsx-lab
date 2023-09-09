import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  const textStyle = {
    color: "blue",
  };
  return (
    <div id="home">
      <h1 style={textStyle}>
        {name} a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
