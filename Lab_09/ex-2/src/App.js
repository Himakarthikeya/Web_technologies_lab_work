import React from "react";
import StudentCard from "./StudentCard";

function App() {
  return (
    <div>
      <h1>Student Cards</h1>

      <StudentCard name="Karthik" department="CSE" marks="90" />
      <StudentCard name="Ravi" department="ECE" marks="85" />
      <StudentCard name="Anjali" department="IT" marks="95" />
    </div>
  );
}

export default App;