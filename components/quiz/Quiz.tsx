import clases from "./Quiz.module.scss";
import Result from "./ResultQuiz";
import Game from "./GameQuiz";
import { useState } from "react";
import { motion } from "framer-motion";

const questions = [
  {
    title: "React is...?",
    variants: ["library", "framework", "application"],
    correct: 0,
  },
  {
    title: "The component is...",
    variants: [
      "application",
      "part of an application or page",
      "what I don't know what is",
    ],
    correct: 1,
  },
  {
    title: "What is JSX?",
    variants: [
      "This is plain HTML",
      "This is a function",
      "This is the same HTML, but with the ability to execute JS code",
    ],
    correct: 2,
  },
];

function Quiz() {
  const [step, setStep] = useState(0);
  const [corect, setCorect] = useState(0);

  const tabToQuiz = (indx: number): void => {
    setStep(step + 1);
    if (questions[step].correct === indx) {
      setCorect(corect + 1);
    }
  };

  const resetQuiz = () => {
    setCorect(0);
    setStep(0);
  };

  return (
    <motion.div
      className={clases.App}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {step < questions.length ? (
        <Game step={step} questions={questions} clickTovariant={tabToQuiz} />
      ) : (
        <Result
          corect={corect}
          quizLength={questions.length}
          reset={resetQuiz}
        />
      )}
    </motion.div>
  );
}

export default Quiz;
