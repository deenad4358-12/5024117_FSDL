import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-danger navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">Blood Portal</Link>

        <div>
          <Link className="btn btn-light mx-1" to="/">Home</Link>
          <Link className="btn btn-light mx-1" to="/donate">Donate</Link>
          <Link className="btn btn-light mx-1" to="/request">Request</Link>
          <Link className="btn btn-light mx-1" to="/donors">Donors</Link>
        </div>
      </div>
    </nav>
  );
}