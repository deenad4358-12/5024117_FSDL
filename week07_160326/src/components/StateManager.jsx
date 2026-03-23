import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

export default function StateManager() {
  const [users, setUsers] = useState([]);

  const addUser = (data) => {
    setUsers([...users, data]);
  };

  return (
    <div className="container mt-4">
      <Form addUser={addUser} />
      <List users={users} />
    </div>
  );
}