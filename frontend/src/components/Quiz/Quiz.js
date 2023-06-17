import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { quiz } from "../Quiz/QuizQuestions.js";
import { motion } from "framer-motion";
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

  // Restart the quiz at end by resetting the state
  const restartQuiz = () => {
    setActiveQuestion(0);
    setSelectedAnswer("");
    setSelectedAnswerIndex(null);
    setShowResult(false);
    setResult({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    });
  };

  return (
    <div className="container-md">
      {!showResult ? (
        <div className="quiz-box">
          <h3>Test Your Knowledge</h3>
          <hr />
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <motion.li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={
                  selectedAnswerIndex === index ? "selected-answer" : null
                }
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#6baf54",
                }}
              >
                {answer}
              </motion.li>
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
          <motion.h3 animate={{ scale: 1.1 }} transition={{ duration: 0.35 }}>
            Your Results
          </motion.h3>
          <div className="resultsbox">
            <motion.p>
              Your Score:<span> {result.score}/6</span>
            </motion.p>
            <p>
              Correct:<span> {result.correctAnswers}</span>
            </p>
            <p>
              Wrong:<span> {result.wrongAnswers}</span>
            </p>
            <Button variant="success" onClick={restartQuiz}>
              <i class="fa-solid fa-rotate-left"></i> Try Again
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
