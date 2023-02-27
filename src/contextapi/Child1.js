import React, { useContext } from "react";
import ProductContext from "./ContextApi";

function Child1() {
  const [data, handleClick] = useContext(ProductContext);
  return (
    <div>
      Child1
      <p>Child 1:{data}</p>
      <button name="childe button 1" onClick={handleClick}>
        Btn1
      </button>
    </div>
  );
}

export default Child1;
