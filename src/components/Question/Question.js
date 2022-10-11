import React from "react";
import "./Question.css";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

const Question = ({ singlequestion }) => {
  const { question, id, correctAnswer, options, name } = singlequestion;
  // console.log(singlequestion);
  console.log(correctAnswer);

  // console.log(singlequestion);
  // for (const option of options) {
  //   if (option === correctAnswer) {
  //     console.log("correct answer");
  //   }
  // }
  const [ans, setAns] = useState([]);
  const questionHandler = () => {
    options.map((opt) => {
      console.log(opt);
      setAns(opt);
      if (opt === correctAnswer) {
        toast.success("Success! Right Answer", { autoClose: 500 });
      }
    });
  };
  // for (const option of options) {
  //   rightAnswer === correctAnswer &&
  //     toast.success("Success! Right Answer", { autoClose: 500 });

  //   // if (option === correctAnswer) {
  //   // } else {
  //   //   toast.error("Wrong Answer", { autoClose: 500 });
  //   // }
  // }

  return (
    <>
      <div className="container w-50 h-50 bg-secondary mt-5">
        <h4>{question}</h4>
        <h3>
          {options.map((option) => (
            <div key={option.id} className="text-center">
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
