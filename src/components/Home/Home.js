import React from "react";
import { useLoaderData } from "react-router-dom";
import Courses from "../Courses/Courses";
import Logo from "../asset/learning1.png";
import "./Home.css";
const Home = () => {
  const courses = useLoaderData([]).data;

  return (
    <div className="container w-100">
      <img className="img-fluid h-50" src={Logo} alt="" />
      <div className="container containers ">
        {courses.map((course) => (
          <Courses key={course.id} course={course}></Courses>
        ))}
      </div>
    </div>
  );
};

export default Home;
