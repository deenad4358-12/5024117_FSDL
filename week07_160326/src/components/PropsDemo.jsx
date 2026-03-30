import React from "react";

function PropsDemo(props) {
  return (
    <div className="card p-3 mb-3 shadow">
      <h4>Props Demo</h4>
      <p>Name: {props.name}</p>
      <p>Event: {props.event}</p>
    </div>
  );
}

export default PropsDemo;