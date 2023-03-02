import { FC } from "react";
import clases from "./Quiz.module.scss";

interface Iquiz {
  title: string;
  variants: string[];
  correct: number;
}
interface GameProps {
  step: number;
  questions: Iquiz[];
  clickTovariant: (indx: number) => void;
}

const Game: FC<GameProps> = ({ step, questions, clickTovariant }) => {
  const pogres = (step / questions.length) * 100;

  return (
    <>
      <div className={clases.progress}>
        <div
          style={{ width: `${pogres}%` }}
          className={clases["progress__inner"]}
        ></div>
      </div>
      <h1 className={clases.quizHeading}>{questions[step].title}</h1>
      <ul>
        {questions[step].variants.map((ell, indx) => (
          <li
            className={clases.listItem}
            key={ell}
            onClick={() => clickTovariant(indx)}
          >
            {ell}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Game;
