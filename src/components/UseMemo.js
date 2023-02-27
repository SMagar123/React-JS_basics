import React, { useEffect, useState, useMemo } from "react";

const UseMemo = () => {
  const [data, setData] = useState([]);
  async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const value = await response.json();
    setData(value);
  }
  useEffect(() => {
    getData();
  }, []);
  const filteredArray = useMemo(() => {
    return data.filter((each) => each.id % 2 === 0).slice(0, 21);
  }, [data]);
  return (
    <div>
      {filteredArray.map((each) => (
        <li key={each.title}>{each.title}</li>
      ))}
    </div>
  );
};

export default UseMemo;
