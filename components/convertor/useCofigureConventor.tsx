import { currencysArray } from "@/pages/converter";
import {
  curen,
  setCurrencyFrom,
  setCurrencyTo,
  setVal1,
  setVal2,
} from "@/store/convertor/convertorCurrencySlice";
import { useAppDispatch, useAppselector } from "@/store/reduxHooks";

const useCofigureConventor = ({ data }: { data: currencysArray }) => {
  const isSelectedFrom = useAppselector((store) => store.currency.currencyFrom);
  const isSelectedTo = useAppselector((store) => store.currency.currencyTo);
  const val1 = useAppselector((store) => store.currency.val1);
  const val2 = useAppselector((store) => store.currency.val2);
  const dispatch = useAppDispatch();

  const setCurencyFrom = (cur: curen) => {
    dispatch(setCurrencyFrom(cur));
    dispatch(setVal2((data.rates[isSelectedFrom] / data.rates[cur]) * +val2));
  };
  const setCurencyTo = (cur: curen) => {
    dispatch(setCurrencyTo(cur));
    dispatch(setVal2((data.rates[cur] / data.rates[isSelectedFrom]) * +val1));
  };

  const setval1 = (val: string) => {
    dispatch(setVal1(val));
    dispatch(
      setVal2((data.rates[isSelectedTo] / data.rates[isSelectedFrom]) * +val)
    );
  };
  const setval2 = (val: string) => {
    dispatch(setVal2(val));
    dispatch(
      setVal1((data.rates[isSelectedFrom] / data.rates[isSelectedTo]) * +val)
    );
  };

  return {
    isSelectedFrom,
    isSelectedTo,
    val1,
    val2,
    dispatch,
    setval2,
    setval1,
    setCurencyTo,
    setCurencyFrom,
  };
};

export default useCofigureConventor;
