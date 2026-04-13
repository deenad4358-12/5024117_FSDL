import React from "react";

export default function DonorList() {
  const donors = [
    { id: 1, name: "Rahul", blood: "A+" },
    { id: 2, name: "Priya", blood: "B+" },
    { id: 3, name: "Amit", blood: "O-" }
  ];

  return (
    <div>
      <h2>Available Donors</h2>

      <ul className="list-group">
        {donors.map((donor) => (
          <li key={donor.id} className="list-group-item">
            {donor.name} - {donor.blood}
          </li>
        ))}
      </ul>
    </div>
  );
}