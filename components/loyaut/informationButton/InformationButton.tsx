import { useState } from "react";
import informationClases from "./InformationButton.module.scss";
import { motion, AnimatePresence } from "framer-motion";

const InformationButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const changeVisible = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className={informationClases.information}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={informationClases.informationBlock}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
          >
            During development I used: Next.js, scss, TypeScript, Redux, Mock
            API
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className={informationClases.informationButon}
        onClick={() => changeVisible()}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.01, ease: "easeIn" }}
      >
        i
      </motion.div>
    </div>
  );
};
export default InformationButton;
