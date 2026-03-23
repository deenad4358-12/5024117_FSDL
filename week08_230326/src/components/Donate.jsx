import React, { useRef, useState } from "react";

export default function Donate() {
  const nameRef = useRef();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    nameRef.current.focus();
  };

  return (
    <div>
      <h2>Donate Blood</h2>

      <form onSubmit={handleSubmit}>
        <input
          ref={nameRef}
          className="form-control mb-2"
          placeholder="Your Name"
          required
        />

        <input
          className="form-control mb-2"
          placeholder="Blood Group"
          required
        />

        <button className="btn btn-danger">Submit</button>
      </form>

      {submitted && <p className="text-success mt-2">Donor Registered!</p>}
    </div>
  );
}