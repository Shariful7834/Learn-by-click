import React from "react";
import "./Question.css";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

const Question = ({ singlequestion }) => {
  const { question, id, correctAnswer, options, name } = singlequestion;
  console.log(singlequestion);
  const [option, setOption] = useState([]);
  // console.log(singlequestion);
  // for (const option of options) {
  //   if (option === correctAnswer) {
  //     console.log("correct answer");
  //   }
  // }
  const questionHandler = () => {
    for (const option of options) {
      option === correctAnswer &&
        toast.success("Success! Right Answer", { autoClose: 500 });

      // if (option === correctAnswer) {
      // } else {
      //   toast.error("Wrong Answer", { autoClose: 500 });
      // }
    }
  };

  return (
    <>
      <div className="container w-50 h-50 bg-secondary mt-5">
        <h3>{question}</h3>
        <h3>
          {options.map((option) => (
            <div className="text-center">
              <Button onClick={questionHandler} className="my-2 w-50">
                <li className="text-start">{option}</li>
              </Button>
            </div>
          ))}
        </h3>
      </div>
    </>
  );
};

export default Question;
