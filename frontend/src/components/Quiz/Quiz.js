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
  const [showResult, setShowResult] = useState(false);
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
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 1,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  //Answer Selector - match selected answer with answer in QuizQuestions.js
  // pass index of selection to highlight user selection
  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log("Correct");
    } else {
      setSelectedAnswer(false);
      console.log("Incorrect");
    }
  };

  return (
    <div className="container-md">
      {!showResult ? (
        <div className="quiz-box">
          <h1>Test Your Knowledge</h1>
          <hr />
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
          <Button
            variant="success"
            onClick={onClickNext}
            disabled={selectedAnswerIndex === null}
          >
            {activeQuestion === questions.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      ) : (
        <div className="result">
          <h3>Result</h3>

          <p>
            You scored:<span> {result.score}</span>
          </p>
          <p>
            Correct Answers:<span> {result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers:<span> {result.wrongAnswers}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
