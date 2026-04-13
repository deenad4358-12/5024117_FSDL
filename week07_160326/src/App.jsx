import React, { useState } from "react";
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import PropsDemo from "./components/PropsDemo";
import StateDemo from "./components/StateDemo";
import FormDemo from "./components/FormDemo";
import EventsDemo from "./components/EventsDemo";


function App() {
  const [registrations, setRegistrations] = useState([]);

  const addRegistration = (data) => {
    setRegistrations([...registrations, data]);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">🎓 College Event Registration</h1>

      <div className="row">
        <div className="col-md-6">
          <EventForm addRegistration={addRegistration} />
        </div>

        <div className="col-md-6">
          <EventList registrations={registrations} />
        </div>
      </div>
    </div>
  );
}

export default App;