import React, { useContext, useState } from "react";
import LandingBody from "./LandingBody";
import { ThemeContext } from "./LandingPage";
const Header = () => {
  const colorObtained = useContext(ThemeContext);
  const [backColor, setBackColor] = useState(colorObtained.color);
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          boxShadow: "0 0  3px gray",
          backgroundColor: `${backColor}`,
        }}
      >
        <div className="logo" style={{ marginLeft: "0em" }}>
          {backColor === "white" ? (
            <h2 style={{ color: "red" }}>RAMAELONEPAL</h2>
          ) : (
            <h2 style={{ color: "white" }}>RAMAELONEPAL</h2>
          )}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "1em",
            width: "50%",
          }}
        >
          {backColor === "white" ? (
            <h3 style={{ color: "red" }}>Home</h3>
          ) : (
            <h3 style={{ color: "white" }}>Home</h3>
          )}
          {backColor === "white" ? (
            <h3 style={{ color: "red" }}>About</h3>
          ) : (
            <h3 style={{ color: "white" }}>About</h3>
          )}
          {backColor === "white" ? (
            <h3 style={{ color: "red" }}>Contact</h3>
          ) : (
            <h3 style={{ color: "white" }}>Contact</h3>
          )}
          <button
            onClick={() => {
              backColor === "white"
                ? setBackColor("black")
                : setBackColor("white");
            }}
          >
            {backColor === "white" ? "DarkTheme" : "LightTheme"}
          </button>
        </div>
      </div>
      <LandingBody />
    </>
  );
};

export default Header;
