import React from "react";

function App() {
  const name = "Karthik";
  const department = "CSE";
  const year = "3rd Year";
  const section = "A";

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Student Profile</h1>

      <div style={{
        border: "1px solid black",
        display: "inline-block",
        padding: "20px",
        borderRadius: "10px"
      }}>
        <p><b>Name:</b> {name}</p>
        <p><b>Department:</b> {department}</p>
        <p><b>Year:</b> {year}</p>
        <p><b>Section:</b> {section}</p>
      </div>
    </div>
  );
}

export default App;