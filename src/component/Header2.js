import React from "react";
import "./styles/header.css"; // to load customer css
import { useState } from "react";
import Username from "./Username";
import Login from "./Login";
import Login_PropsDrilling from "./Login_PropsDrilling";
export default function Header2() {
  let headerStyle = {
    height: "8%",
    width: "100%",
    backgroundColor: "grey",
    display: "flex",
    padding: "2px",
  };

  // this state will help us in hidding the login box

  const [showLogin, setShowLogin] = useState(false);
  function handleClick() {
    setShowLogin(true);
  }

  const [username, setUserName] = useState("");

  return (
    <>
      <div style={headerStyle}>
        <Username username={username} />
        <button onClick={handleClick}>Login</button>
      </div>
      {
        // showLogin && <Login />
        // showLogin ? (
        //   <Login setUserName={setUserName} />
        // ) : (
        //   <div>Please click on login</div>
        // )

        showLogin ? (
          <Login_PropsDrilling setUserName={setUserName} />
        ) : (
          <div>Please click on login</div>
        )
      }
    </>
  );
}

//props drilling: if the props are passing from parent to more than two childs, we should avoid doing it
// to solve this problem, we use redux, useContext():
