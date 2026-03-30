import React from "react";

function EventList({ registrations }) {
  return (
    <div className="card shadow p-4">
      <h4>Registered Students</h4>

      {registrations.length === 0 ? (
        <p>No registrations yet</p>
      ) : (
        <ul className="list-group">
          {registrations.map((reg, index) => (
            <li key={index} className="list-group-item">
              <strong>{reg.name}</strong> - {reg.event}
              <br />
              <small>{reg.email} | {reg.college}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EventList;