import React, { useState } from "react";
// eslint-disable-next-line import/no-webpack-loader-syntax
import SimulateWorker from "workerize-loader!./util/simulate-clusters";

const Simulator = () => {
  const [{ status, src }, setState] = useState({ status: "idle", src: null });

  const handleSimulate = () => {
    setState({ status: "pending", src: null });

    const worker = new SimulateWorker();
    worker
      .simulateClusters()
      .then((src) => setState({ status: "resolved", src }));
  };

  return (
    <div>
      <h2>Simulator</h2>
      <p>Click the button to simulate collision of 2 star clusters</p>
      <button onClick={handleSimulate}>Simulate!</button>

      {status === "pending" && <p>Simulating...</p>}

      {status === "resolved" && (
        <div className="result">
          <img src={src} alt="star clusters" />
        </div>
      )}
    </div>
  );
};

export default Simulator;
