import React from "react";
import { Carousel } from "react-responsive-carousel";
import logo from './1.jpg';
import logo2 from './2.jpg';
import logo3 from './3.jpg';
import logo4 from './4.jpg';
import logo5 from './5.jpg';










export default () => (
  <Carousel autoPlay>
    <div>
      <img src={logo} />
      {/* <p className="legend">Legend 1</p> */}
    </div>
    <div>
      <img src={logo2} />
      {/* <p className="legend">Legend 2</p> */}
    </div>
    <div>
      <img src={logo3} />
      {/* <p className="legend">Legend 3</p> */}
    </div>
    <div>
      <img src={logo4} />
      {/* <p className="legend">Legend 4</p> */}
    </div>
    <div>
      <img src={logo5} />
      {/* <p className="legend">Legend 5</p> */}
    </div>


  </Carousel>
);
