import React from "react";
// e is the event object, check (e) means print to get the events to see what all can be done
export default function Login({ setUserName }) {
  let name = "";
  function handleChange(e) {
    console.log(e.target.value);
    name = e.target.value;
    // setUserName(e.target.value);
  }
  function submit() {
    setUserName(name);
  }
  return (
    <div>
      <input type="text" placeholder="username" onChange={handleChange} />
      <input type="text" placeholder="password" />
      <input type="Submit" placeholder="Submit" onClick={submit} />
    </div>
  );
}
