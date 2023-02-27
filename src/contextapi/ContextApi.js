import React, { createContext, useState } from "react";
import Child2 from "./child2";
import Child1 from "./Child1";
export const ProductContext = createContext();
const ContextApi = () => {
  const [data, setData] = useState("");
  const handleClick = (e) => {
    setData(`click from ${e.target.name}`);
  };
  return (
    <div>
      <h1>Context Api</h1>
      <ProductContext.Provider value={{ data, handleClick }}>
        <Child1 />
        <Child2 />
      </ProductContext.Provider>
    </div>
  );
};

export default ContextApi;
