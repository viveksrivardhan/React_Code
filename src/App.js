import "./App.css";
import Test from "./component/Test";
import Header from "./component/Header";
import Subheader from "./component/Subheader";
import Counter from "./component/Counter";
import Header2 from "./component/Header2";
import { useEffect } from "react";

// Notes: App.js is parent  for rendering all your customer component
// props: property
// they can be passed one way: parent to child

function App() {


  // [] in useEffect is the dependency array, when to be called.
  // useeffect will be exected very last after everything when the complete document is loaded
  // it is used for doing any side effects on our components
  // ex: calling an api, dom

  useEffect(() => {
    console.log("use effect hook is working in app");
  }, []);



  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // react fragment <> </>
    // in general a div will occupy space in the space, if we need a parent tag(container) and does not want to occupy the space we use the react fragment
    // hooks are used to achieve dynamic functionality in react
    // it works in functional components
    //UseState() is one a major hooks, to make use of this we need to import (import { useState } from "react";)
    <>
      <Header2 />
      {/*<Header /> */}
      {/* <Subheader /> */}
      {/* <Counter/> */}
    </>
  );
}

export default App;
