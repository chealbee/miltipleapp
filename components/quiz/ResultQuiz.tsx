import clases from "./Quiz.module.scss";
import { motion } from "framer-motion";

function Result({
  corect,
  quizLength,
  reset,
}: {
  corect: number;
  quizLength: number;
  reset: () => void;
}) {
  return (
    <motion.div
      className={clases.result}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        You guessed {corect} of the answer from {quizLength}
      </h2>
      <button onClick={() => reset()}>try again</button>
    </motion.div>
  );
}
export default Result;
