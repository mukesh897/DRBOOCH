import React from "react";
import { render } from "react-dom";
import Carousel from "./App";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const App = () => (
  <div>
    <Carousel />
  </div>
);

render(<App />, document.getElementById("root"));
