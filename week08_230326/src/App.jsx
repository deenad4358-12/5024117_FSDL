import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Home Page
function Home() {
  return (
    <div className="text-center">
      <h1>🩸 Blood Donation Portal</h1>
      <p>Donate blood, save lives ❤️</p>
    </div>
  );
}

// Donate Page (Adds donor dynamically)
function Donate({ addDonor }) {
  const [name, setName] = useState("");
  const [blood, setBlood] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !blood) return;

    addDonor({ id: Date.now(), name, blood });

    setName("");
    setBlood("");
  };

  return (
    <div>
      <h2>Donate Blood</h2>

      <form onSubmit={handleSubmit} className="mt-3">
        <input
          className="form-control mb-2"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="form-control mb-2"
          placeholder="Blood Group"
          value={blood}
          onChange={(e) => setBlood(e.target.value)}
        />

        <button className="btn btn-danger">Register</button>
      </form>
    </div>
  );
}

// Request Page (Dynamic counter)
function Request() {
  const [requests, setRequests] = useState(0);

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

// Donor List (Dynamic + Keys)
function Donors({ donors }) {
  return (
    <div>
      <h2>Available Donors</h2>

      {donors.length === 0 ? (
        <p>No donors yet</p>
      ) : (
        <ul className="list-group">
          {donors.map((d) => (
            <li key={d.id} className="list-group-item">
              {d.name} - {d.blood}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Main App
export default function App() {
  const [donors, setDonors] = useState([]);

  const addDonor = (newDonor) => {
    setDonors([...donors, newDonor]);
  };

  return (
    <Router>
      <nav className="navbar navbar-dark bg-danger p-3">
        <Link className="text-white mx-2" to="/">Home</Link>
        <Link className="text-white mx-2" to="/donate">Donate</Link>
        <Link className="text-white mx-2" to="/request">Request</Link>
        <Link className="text-white mx-2" to="/donors">Donors</Link>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate addDonor={addDonor} />} />
          <Route path="/request" element={<Request />} />
          <Route path="/donors" element={<Donors donors={donors} />} />
        </Routes>
      </div>
    </Router>
  );
}