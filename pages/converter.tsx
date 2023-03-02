import Convertor from "@/components/convertor/Convertor";
import { motion } from "framer-motion";
import axios from "axios";
import { GetServerSideProps } from "next";
import useCofigureConventor from "@/components/convertor/useCofigureConventor";

export interface currencysArray {
  base: string;
  rates: {
    EUR: number;
    GBP: number;
    UAH: number;
    USD: number;
  };
}

export const getServerSideProps: GetServerSideProps<{
  data: currencysArray;
}> = async (context) => {
  const res = await axios.get(
    "https://api.apilayer.com/fixer/2022-02-02?symbols=USD%2CEUR%2CGBP%2CUAH&base=USD",
    {
      headers: {
        apikey: "BXtPrfXxzcOw2UbgZNoXYfnd0ui3lJbX",
      },
    }
  );
  const data = res.data;
  return {
    props: { data },
  };
};

const converter = ({ data }: { data: currencysArray }) => {
  const {
    isSelectedFrom,
    isSelectedTo,
    val1,
    val2,
    dispatch,
    setval2,
    setval1,
    setCurencyTo,
    setCurencyFrom,
  } = useCofigureConventor({ data });

  return (
    <motion.div
      className="convertor"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Convertor
        selecdedCurrency={isSelectedFrom}
        setCurrency={setCurencyFrom}
        setval={setval1}
        val={val1}
      />
      <Convertor
        selecdedCurrency={isSelectedTo}
        setCurrency={setCurencyTo}
        setval={setval2}
        val={val2}
      />
    </motion.div>
  );
};
export default converter;
