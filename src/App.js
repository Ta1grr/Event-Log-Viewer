import React from "react";
import "./App.css";
import TableFormat from "./components/Table/index";
import NavBar from "./components/NavBar/index";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <TableFormat />
    </div>
  );
}

export default App;
