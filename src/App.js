import React from "react";

import Notes from "./notes";
import Simulator from "./simulator";
// import Simulator from "./simulator-with-worker";
// import Simulator from "./simulator-workerize";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="header">Star Cluster Collision Simulator</h1>
      <div className="columns">
        <Simulator />
        <Notes />
      </div>
    </div>
  );
}

export default App;
