import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Quizs = () => {
  const quizes = useLoaderData().data;
  // console.log(quizes);
  const { id, questions } = quizes;
  return (
    <div>
      <h1>
        Question :{quizes.name}
        {questions.map((singlequestion) => (
          <Question
            key={singlequestion.id}
            singlequestion={singlequestion}
          ></Question>
        ))}
      </h1>
    </div>
  );
};

export default Quizs;
