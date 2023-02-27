import React, { useEffect, useRef, useState } from "react";

const UseRefExample = () => {
  const btnRef = useRef(); //always can be accessed with current property
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef();
  //element property modification
  //   useEffect(() => {
  //     if (counter % 2 === 0) {
  //       btnRef.current.style.color = "green";
  //     } else {
  //       btnRef.current.style.color = "red";
  //     }
  //   }, [counter]);
  useEffect(() => {
    // intervalRef.current = setInterval(() => {
    //   setCounter((prev) => prev + 1);
    // }, 1000);
  }, []);
  function handleStart() {
    intervalRef.current = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
  }
  function handleStop() {
    clearInterval(intervalRef.current);
    setCounter(0);
  }
  return (
    <div>
      <h1>Use Reference Example</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <p>Counter:{counter}</p>
      {/* <button onClick={() => setCounter(() => counter + 1)}>
        Counter:{counter}
      </button> */}
      <button ref={btnRef}>Testing Button</button>
      {/*html element are refrenced*/}
    </div>
  );
};

export default UseRefExample;
