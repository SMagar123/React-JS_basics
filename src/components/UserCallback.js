import React, { useEffect, useState, useCallback } from "react";
const checkRender = new Set();
const Button = ({ btnVal, handleSubmit }) => {
  return (
    <button onClick={() => handleSubmit("click from child")}>{btnVal}</button>
  );
};
const UserCallback = () => {
  const [data, setData] = useState([]);
  async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const value = await response.json();
    setData(value);
  }
  useEffect(() => {
    getData();
  }, []);
  const handleSubmit = useCallback(
    (arg) => {
      console.log("arg", arg);
      console.log(data);
    },
    [data]
  );
  checkRender.add(handleSubmit);
  console.log(checkRender.size);
  return (
    <div>
      <button></button>
      <p>{data.title}</p>
      <button onClick={handleSubmit("some arg...")}>Submit</button>
      <Button btnVal={data.title} handleSubmit={handleSubmit}>
        Child
      </Button>
    </div>
  );
};

export default UserCallback;
