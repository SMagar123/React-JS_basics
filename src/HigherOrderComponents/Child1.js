import React from "react";

const Child1 = ({ children }) => {
  return <div>Child1:{children('someData')}</div>;
};

export default Child1;
