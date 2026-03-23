import React from "react";

export default function Navbar({ title }) {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <h3 className="text-white">{title}</h3>
      </div>
    </nav>
  );
}