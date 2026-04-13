import React, { useState } from "react";

function StateDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="card p-3 mb-3 shadow">
      <h4>State Demo</h4>
      <p>Registrations Count: {count}</p>

      <button
        className="btn btn-success"
        onClick={() => setCount(count + 1)}
      >
        Increase Count
      </button>
    </div>
  );
}

export default StateDemo;