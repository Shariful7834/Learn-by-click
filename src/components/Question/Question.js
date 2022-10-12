import React from "react";
import "./Question.css";
import { Button, ListGroup } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

const Question = ({ singlequestion, handler }) => {
  const { question, id, correctAnswer, options, name } = singlequestion;
  // console.log(options);
  const [a, b, c, d] = options;
  // console.log(a)

  // for (const option of options) {
  //   rightAnswer === correctAnswer &&
  //     toast.success("Success! Right Answer", { autoClose: 500 });

  //   // if (option === correctAnswer) {
  //   // } else {
  //   //   toast.error("Wrong Answer", { autoClose: 500 });
  //   // }
  // }
  const [opt, setOpt] = useState([]);
  // console.log(opt);

  opt === correctAnswer
    ? toast.success("Success! Right Answer", { autoClose: 500 })
    : toast.error("Wrong Answer", { autoClose: 500 });

  // if (opt === correctAnswer) {
  //   console.log("correct ans", opt, correctAnswer);
  // }
  return (
    <>
      <div className="container w-50 h-50 bg-secondary mt-5">
        <h4>{question}</h4>
        <div className="d-grid ">
          <Button onClick={() => setOpt(a)} className="mt-2">
            {a}
          </Button>
          <Button onClick={() => setOpt(b)} className="mt-2">
            {b}
          </Button>
          <Button onClick={() => setOpt(c)} className="mt-2">
            {c}
          </Button>
          <Button onClick={() => setOpt(d)} className="mt-2">
            {d}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Question;
// <div key={option.id} className="text-center">
//   <ListGroup
//     className="my-3 text-center fs-5"
//     defaultActiveKey="#link1"
//   >
//     <ListGroup.Item action onClick={questionHandler}>
//       {option}
//     </ListGroup.Item>
//   </ListGroup>
// </div>
