import React, { useState } from "react";

function EventForm({ addRegistration }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    college: "",
    event: ""
  });

  const events = [
    "Hackathon",
    "Cultural Fest",
    "Technical Quiz",
    "Sports Meet"
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRegistration(form);

    setForm({
      name: "",
      email: "",
      college: "",
      event: ""
    });
    };

  return (
    <div className="card shadow p-4">
      <h4>Register for Event</h4>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="form-control mb-3"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          className="form-control mb-3"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="college"
          className="form-control mb-3"
          placeholder="College Name"
          value={form.college}
          onChange={handleChange}
          required
        />

        <select
          name="event"
          className="form-select mb-3"
          value={form.event}
          onChange={handleChange}
          required
        >
          <option value="">Select Event</option>
          {events.map((event, index) => (
            <option key={index} value={event}>{event}</option>
          ))}
        </select>

        <button className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
}

export default EventForm;

