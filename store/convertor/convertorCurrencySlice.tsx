import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export type curen = "UAH" | "USD" | "EUR" | "GBP";
interface ICUrrency {
  currencyFrom: curen;
  currencyTo: curen;
  crrencys: [];
  val1: string | number;
  val2: string | number;
}

const initialState: ICUrrency = {
  currencyFrom: "USD",
  currencyTo: "UAH",
  crrencys: [],
  val1: "0",
  val2: "0",
};

export const currencySlice = createSlice({
  name: "curerency",
  initialState,
  reducers: {
    setCurrencyTo: (state, action: PayloadAction<curen>) => {
      state.currencyTo = action.payload;
    },
    setCurrencyFrom: (state, action: PayloadAction<curen>) => {
      state.currencyFrom = action.payload;
    },
    setVal1: (state, action: PayloadAction<string | number>) => {
      state.val1 = action.payload;
    },
    setVal2: (state, action: PayloadAction<string | number>) => {
      state.val2 = action.payload;
    },
  },
  extraReducers: (build) => {},
});

export const { setCurrencyFrom, setCurrencyTo, setVal1, setVal2 } =
  currencySlice.actions;
export default currencySlice.reducer;
