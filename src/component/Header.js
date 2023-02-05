import React from "react"; // this actually enables to write JSX and create components
import "./styles/header.css"; // to load customer css
import { useState } from "react";

//component mount lifestyle
// component mounting, updating, unmounting
// useeffect, props, passing props, destructuring the props, how to pass multiple props

function Header(props) {
  console.log(props);
  console.log(props.appname);
  // if we need manipulate css effects via DOM, we need to paste css style in header.js instead of header.css
  const color = "black";
  const [bgcolor, setbgcolor] = useState(color);
  let stylefordiv = {
    fontFamily: "Aerial",
    fontSize: "small",
    fontWeight: "20px",
  };
  let headerStyle = {
    height: "8%",
    width: "100%",
    backgroundColor: `${bgcolor}`,
    display: "flex",
    padding: "2px",
  };

  function changebg() {
    setbgcolor((prev) => {
      console.log(prev, "This was previous color before changing");
      return "blue";
    });
  }
  function prevbg() {
    setbgcolor((prev) => {
      return (prev = color);
    });
  }

  const effect = "none";
  const [border_effect, setborder] = useState(effect);
  let image_hover = {
    height: "100%",
    width: "90%",
    border: `${border_effect}`,
  };
  function hovereffectbefore() {
    setborder((prev) => {
      return "2px solid white";
    });
  }
  function hovereffectafter() {
    setborder((prev) => {
      return (prev = effect);
    });
  }
  return (
    <div
      className="header"
      style={headerStyle}
      onMouseEnter={changebg}
      on
      onMouseLeave={prevbg}
    >
      <div className="image-box">
        <img
          src="./images/amazon_another.png"
          alt="amazonlogo"
          style={image_hover}
          onMouseEnter={hovereffectbefore}
          on
          onMouseLeave={hovereffectafter}
        />
      </div>
      <div className="location-box">
        <div className="logo"></div>
        <div className="address">
          <div
            style={{
              fontFamily: "Aerial",
              fontSize: "small",
              fontWeight: "bold",
            }}
          >
            Hello
          </div>
          <div style={stylefordiv}>Select your address</div>
        </div>
      </div>
    </div>
  );
}
export default Header;
