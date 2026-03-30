import React from "react";

function EventsDemo() {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <div className="card p-3 mb-3 shadow">
      <h4>Events Demo</h4>

      <button className="btn btn-primary" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default EventsDemo;