import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { quiz } from "../Quiz/QuizQuestions.js";
import "./Quiz.css";

const Quiz = () => {
  //state variables
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  //QuizQuestions.js
  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  //NEXT button - +1 to activeQuestion index, check answer, update results state
  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setActiveQuestion((prev) => prev + 1);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 1,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
  };

  //Answer Selector - match selected answer with answer in QuizQuestions.js
  // pass index of selection to highlight user selection
  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === questions.correctAnswer) {
      setSelectedAnswer(true);
      console.log("Correct");
    } else {
      setSelectedAnswer(false);
      console.log("Incorrect");
    }
  };

  return (
    <div className="container-md">
      <div className="quiz-box">
        <h1>Test Your Knowledge</h1>
        <hr></hr>
        <h2>{question}</h2>
        <ul>
          {choices.map((answer, index) => (
            <li
              onClick={() => onAnswerSelected(answer, index)}
              key={answer}
              className={
                selectedAnswerIndex === index ? "selected-answer" : null
              }
            >
              {answer}
            </li>
          ))}
        </ul>
        <Button variant="success" onClick={onClickNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Quiz;
