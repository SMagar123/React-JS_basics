import React, { createContext } from "react";
import Header from "./Header";
const ThemeContext = createContext();
const LandingPage = () => {
  const color = "white";
  const textDetails = `Wandering down the path to the pond had become a daily routine. 
    Even when the weather wasn't cooperating like today with the wind and rain, Jerry still took the morning stroll down the path until he reached the pond. 
    Although there didn't seem to be a particular reason Jerry did this to anyone looking in from the outside, those who knew him well knew exactly what was going on. 
    It could all be traced back to a specific incident that happened exactly 5 years previously.`;
  return (
    <>
      <ThemeContext.Provider value={{ color, textDetails }}>
        <Header />
      </ThemeContext.Provider>
    </>
  );
};

export default LandingPage;
export { ThemeContext };
