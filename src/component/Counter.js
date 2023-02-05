import React from "react";
import { useState, useEffect } from "react";
//counter refers to state variable which is 0 defined in useState
// setCOunter is state function , we use this to update the counter (state variable)
export default function Counter() {
  //
  const [counter, setCounter] = useState(0);

  //useeffect example to define dependency,

  useEffect(() => {
    console.log("use effect hook is working in app");
    let fetchfun = async () => {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      console.log(data);
    };
    fetchfun();
  }, [counter]);

  function increment() {
    // setCounter(counter+1)
    // how setCounter actually works is
    setCounter((counter) => {
      return counter + 1;
    });
  }
  function decrement() {
    // setCounter(counter - 1);
    setCounter((counter) => {
      return counter - 1;
    });
  }
  return (
    <div>
      <button onClick={increment}>+</button>
      <p>{counter}</p>
      <button onClick={decrement}>-</button>
    </div>
  );
}
