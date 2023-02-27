import React, { useState } from "react";
import Child1 from "./Child1";

const HigherOrderComponents = () => {
  const [parentData, setParentData] = useState({});
  const handleClick = (param) => {
    setParentData(param);
  };
  return (
    <div>
      HigherOrderComponents
      <Child1>{(param) => <p onClick={()=>handleClick}>{param}</p>}</Child1>
      <p>{parentData}</p>
    </div>
  );
};

export default HigherOrderComponents;
