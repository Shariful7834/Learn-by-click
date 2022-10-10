import React from "react";
import { useLoaderData } from "react-router-dom";
import Courses from "../Courses/Courses";
import "./Home.css";
const Home = () => {
  const courses = useLoaderData([]).data;

  return (
    <div className="container containers ">
      {courses.map((course) => (
        <Courses key={course.id} course={course}></Courses>
      ))}
    </div>
  );
};

export default Home;
