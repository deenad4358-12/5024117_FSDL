import React, { useState, useEffect } from "react";

export default function Request() {
  const [requests, setRequests] = useState(0);

  useEffect(() => {
    console.log("Requests updated:", requests);
  }, [requests]);

  return (
    <div>
      <h2>Blood Requests: {requests}</h2>

      <button
        className="btn btn-warning"
        onClick={() => setRequests(requests + 1)}
      >
        Add Request
      </button>
    </div>
  );
}