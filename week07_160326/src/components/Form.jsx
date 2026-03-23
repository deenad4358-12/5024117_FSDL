import React, { useState } from "react";

export default function Form({ addUser }) {
  const [name, setName] = useState("");
  const [event, setEvent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !event) {
      alert("Please fill all fields");
      return;
    }

    addUser({
      id: Date.now(),
      name,
      event,
    });

    setName("");
    setEvent("");
  };

  return (
    <div className="card p-4 mb-4 shadow">
      <h4>Register for Event</h4>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-3"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          className="form-control mb-3"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
        >
          <option value="">Select Event</option>
          <option>Hackathon</option>
          <option>Workshop</option>
          <option>Seminar</option>
          <option>Coding Contest</option>
        </select>

        <button className="btn btn-success w-100">
          Register
        </button>
      </form>
    </div>
  );
}