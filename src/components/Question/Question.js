import React from "react";
import "./Question.css";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useState } from "react";

const Question = ({ singlequestion, handler }) => {
  const { question, correctAnswer, options } = singlequestion;
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
     <div className="mainBox">
     <div className="container w-50 h-50 bg-secondary mt-5 square bg-light rounded py-5 shadow-5">
        <h5>Question{}{question}</h5>
       
        <div className="d-grid   ">
          <Button onClick={() => setOpt(a)} className="addlistBtn mt-2 text-center">
            <li>{a}</li>
          </Button>
          <Button onClick={() => setOpt(b)} className=" addlistBtn mt-2 text-center">
            <li>{b}</li>
          </Button>
          <Button onClick={() => setOpt(c)} className="addlistBtn mt-2 text-center">
            <li>{c}</li>
          </Button>
          <Button onClick={() => setOpt(d)} className=" addlistBtn mt-2 text-center">
            <li>{d}</li>
          </Button>
        </div>
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
