import React, { useContext } from "react";
import ProductContext from "./ContextApi";

function Child2() {
  const [data, handleClick] = useContext(ProductContext);
  return (
    <div>
      Child2
      <p>Child 2:{data}</p>
      <button name="childe button 2" onClick={handleClick}>
        Btn1
      </button>
    </div>
  );
}

export default Child2;
