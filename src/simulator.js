import React, { useState } from "react";
import { simulateClusters } from "./util/simulate-clusters";

const Simulator = () => {
  const [{ status, src }, setState] = useState({ status: "idle", src: null });

  const handleSimulate = () => {
    setState({ status: "pending", src: null });
    new Promise((resolve) => resolve(simulateClusters())).then((src) =>
      setState({ status: "resolved", src })
    );
    // const src = simulateClusters();
    // setState({ status: "resolved", src });
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
