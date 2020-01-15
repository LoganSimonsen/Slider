import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "react-awesome-slider/src/styled/cube-animation";

function App() {
  return (
    <div className="App">
      <AwesomeSlider animation="cubeAnimation" cssModule={AwesomeSliderStyles}>
        <div>
          stuff here<br></br>
          stuff here<br></br>
          stuff here<br></br>
          stuff here<br></br>
          stuff here<br></br>
        </div>
        <div data-src="https://s3.envato.com/files/2137444/3_Full-screen.jpg" />
        <div data-src="https://cdn.hipwallpaper.com/i/18/59/1tSmj6.jpeg" />
        <div data-src="https://s3.envato.com/files/2137444/3_Full-screen.jpg" />
      </AwesomeSlider>
    </div>
  );
}

export default App;
