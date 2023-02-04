import "./App.css";
import Test from "./component/Test";
import Header from "./component/Header";

// Notes: App.js is parent  for rendering all your customer component
function App() {

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
    <>
      <Header />
    </>
  );
}

export default App;
