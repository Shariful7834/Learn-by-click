import React from "react";
import "./Question.css";
import { Alert, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


const Question = ({ singlequestion }) => {
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
  const [eye, setEye] = useState([correctAnswer])
   console.log(eye);
const correct = (opt ===correctAnswer )

  if(correct){
    toast.success("Success! Right Answer", { autoClose: 500 })
  } else{
    toast.error("Wrong Answer", { autoClose: 500 });
  }




<<<<<<< HEAD
  // opt === correctAnswer
  //   ? toast.success("Success! Right Answer", { autoClose: 500 })
  //   : toast.error("Wrong Answer", { autoClose: 500 });
=======
>>>>>>> 97828bc09eaea8595bf9ac8df88ef09c336b7282

  // if (opt === correctAnswer) {
  //   console.log("correct ans", opt, correctAnswer);
  // }
 


  
  return (
    <>
     <div className="mainBox">
      
     <div className="container w-50 h-50 bg-secondary mt-5 square bg-light rounded py-5 shadow-5">
     <div className="d-flex justify-content-end">
      <h1 className="d-none">{eye}</h1>
     <a  onClick={()=> setEye(eye)}><FontAwesomeIcon icon={faEye} /> </a>
     
     
      
      </div>

        <h5>Question: {question}</h5>
       
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
