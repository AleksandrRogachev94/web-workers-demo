import React, { useState } from "react";

const Simulator = () => {
  const [{ status, src }, setState] = useState({ status: "idle", src: null });

  const handleSimulate = () => {
    setState({ status: "pending", src: null });

    const worker = new Worker("simulate-clusters.worker.js");
    worker.postMessage(null);
    worker.addEventListener(
      "message",
      function (e) {
        const src = e.data;
        setState({ status: "resolved", src });
        worker.removeEventListener("simulate", this);
      },
      false
    );
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
