import React, { useState,useEffect } from "react";
// e is the event object, check (e) means print to get the events to see what all can be done
export default function Login_PropsDrilling() {
  const [data, setData] = useState({});
  function handleChange(e) {
    // we use spread operator to handle multiple values
    // spread operator is used to create a deep copy of array , objects and also add your data.
    //example of spread operator
    // let a = [1, 2, 3];
    // let b = [...a, 3, 5, 6];

    // let abc = {
    //   name: "vivek",
    // };
    // let abcd = {
    //   ...abc,
    //   name: "ackjabsc",
    // };

    //another example and why we use [] in [e.target.name]
    // in case we need spaces in key, we use []
    // let abcd = {
    //   ...abc,
    //   name: "ackjabsc",
    // };
    //abcd["what is my task"] = "nothing"

    // setData({
    //   ...prev,
    //   [e.target.name]: e.target.value,
    // });
    setData((prev) => ({
      // in order to write a ket it should be written in []
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleClick() {
    console.log(data);
  }

  useEffect(() => {
    console.log("use effect hook is working in app");
    let fetchfun = async () => {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      console.log(data);
    };
    fetchfun();
  }, [data]);

  return (
    <div>
      <input
        type="text"
        placeholder="username"
        onChange={handleChange}
        name="username"
      />
      <input
        type="text"
        placeholder="password"
        onChange={handleChange}
        name="password"
      />
      <input
        type="text"
        placeholder="email"
        onChange={handleChange}
        name="email"
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
