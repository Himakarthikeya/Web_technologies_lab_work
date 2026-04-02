import React from "react";

function StudentCard(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Department: {props.department}</p>
      <p>Marks: {props.marks}</p>
      <hr />
    </div>
  );
}

export default StudentCard;