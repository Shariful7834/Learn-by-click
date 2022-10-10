import React from "react";
import "./Question.css";
import { Button } from "react-bootstrap";

const Question = ({ singlequestion }) => {
  const { question, id, correctAnswer, options, name } = singlequestion;
  // console.log(singlequestion);
  // for (const option of options) {
  //   if (option === correctAnswer) {
  //     console.log("correct answer");
  //   }
  // }

  return (
    <>
      <div className="container w-50 h-50 bg-primary">
        <h2>{question}</h2>
        <h3>
          {options.map((option) => (
            <Button>{option}</Button>
          ))}
        </h3>
      </div>
    </>
  );
};

export default Question;
