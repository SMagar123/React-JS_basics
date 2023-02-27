import React from "react";
import { useEffect, useState } from "react";
function Button({ children, counter, data }) {
  useEffect(() => {
   
  }, []);
  return (
    <>
      <p>Counter in button:{counter}</p>
      <button>{children}</button>
      <p>{data}</p>
    </>
  );
}
function Counter() {
  const [counter, setCounter] = useState(0);
  const [even, setEven] = useState(0);
  const [data, setData] = useState({});
  useEffect(() => {
    // setData((prev) => {
    //   let even, odd;
    //   //assigning even value & clearing odd value
    //   if (counter % 2 === 0) {
    //     even = counter;
    //     odd = "";
    //   } else {
    //     even = "";
    //     odd = counter;
    //   }
    //   return { ...prev, even, odd };
    // });
    (async () => {
      const response = await fetch(
        "https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0"
      );
      const value = await response.json();
      setData(value);
    })();
    if (counter % 2 === 0) {
      setEven(counter);
      localStorage.setItem("counterkey", `counter:${counter}`);
    }
    return () => {
      localStorage.clear();
      console.log(counter, "cleared Fn");
    };
  }, [counter]); //every time when counter is changed trigger happens for useEffect
  useEffect(() => {
    // if (data.odd) {
    //   // watching odd number only
    //   console.log(data);
    // }
    console.log(data);
  }, [data]);
  return (
    <>
      <button onClick={() => setCounter(() => counter + 1)}>+</button>
      <button onClick={() => setCounter(() => counter - 1)}>-</button>
      <p>Counter:{counter}</p>
      <p>Even:{even}</p>
      {counter % 2 === 0 && (
        <Button data={[2, 3, 4]} counter={counter}>
          {even}
        </Button>
      )}
      {localStorage.getItem("counterkey")}
    </>
  );
}

export default Counter;
