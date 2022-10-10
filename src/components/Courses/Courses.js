import React from "react";
import { Button } from "react-bootstrap";
import "./Courses.css";

const Courses = ({ course }) => {
  const { logo, name } = course;
  console.log(course);
  return (
    <div className="exercise-container">
      <img src={logo} alt="" />
      <div className="exerciseInfo">
        <h4>{name}</h4>
        {/* <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
          <p>
            For Age: <span className="smallInfo">{age}</span>
          </p>
          <p>
            Time required: <span className="smallInfo">{timerequired}s</span>
          </p> */}
        <button className="addlistBtn ">Add to list</button>
      </div>
    </div>
  );
};

export default Courses;
