import React, { useState } from "react";

const useLocalStorage = () => {
  const [data, setData] = useState("");
  function getData(key) {
    const tempData = localStorage.getItem(key);
    setData(tempData);
    return tempData;
  }
  function setLocalData(key, value) {
    localStorage.setItem(key, value);
    setData(value);
  }
  return {
    data,
    getData,
    setLocalData,
  };
};

const CustomHook = () => {
  const { data, getData, setLocalData } = useLocalStorage();
  return (
    <div>
      customhooks
      <input
        value={data}
        onChange={(e) => setLocalData("key", e.target.value)}
      />
    </div>
  );
};

export default CustomHook;
