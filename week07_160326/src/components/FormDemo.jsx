import React, { useState } from "react";

function FormDemo() {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="card p-3 mb-3 shadow">
      <h4>Form Demo</h4>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        className="form-control mb-2"
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        className="form-control"
        value={form.email}
        onChange={handleChange}
      />
    </div>
  );
}

export default FormDemo;