import React from "react";

export default function List({ users }) {
  return (
    <div className="card p-4 shadow">
      <h4>Registered Students</h4>

      {users.length === 0 ? (
        <p className="text-muted">No registrations yet</p>
      ) : (
        <ul className="list-group">
          {users.map((u) => (
            <li key={u.id} className="list-group-item">
              {u.name} — {u.event}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}