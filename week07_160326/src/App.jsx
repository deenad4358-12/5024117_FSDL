import React from "react";
import Navbar from "./components/Navbar";
import StateManager from "./components/StateManager";

export default function App() {
  return (
    <div>
      <Navbar title="🎓 College Event Registration Portal" />
      <StateManager />
    </div>
  );
}