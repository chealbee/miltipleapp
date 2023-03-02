import { curen } from "@/store/convertor/convertorCurrencySlice";
import { motion } from "framer-motion";
import React from "react";

const defaultCurrencies = ["UAH", "USD", "EUR", "GBP"];

const Convertor = ({
  selecdedCurrency,
  setCurrency,
  setval,
  val,
}: {
  selecdedCurrency: string;
  setCurrency: (cur: curen) => void;
  setval: (val: string) => void;
  val: string | number;
}) => {
  const SeacrhVariants = {
    initial: () => {
      return { opacity: 0 };
    },
    animate: (c: number) => {
      return {
        opacity: 1,
        transition: { duration: 0.2, delay: 0.2 + c * 0.1 },
      };
    },
  };

  return (
    <div className="block">
      <ul className="currencies">
        {defaultCurrencies.map((cur, indx) => (
          <motion.li
            key={cur}
            className={selecdedCurrency === cur ? "active" : ""}
            onClick={() => setCurrency(cur as curen)}
            initial={"initial"}
            animate={"animate"}
            variants={SeacrhVariants}
            custom={indx}
          >
            {cur}
          </motion.li>
        ))}
      </ul>
      <motion.input
        type="number"
        placeholder="0"
        value={val}
        initial={"initial"}
        animate={"animate"}
        variants={SeacrhVariants}
        custom={4}
        onChange={(e) => setval(e.target.value)}
      />
    </div>
  );
};
export default Convertor;
