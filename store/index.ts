import { configureStore } from "@reduxjs/toolkit";
import users from "./users/users";
import currency from "./convertor/convertorCurrencySlice";
import fotos from "./fotosgalery/fotosSlice";

const store = configureStore({
  reducer: {
    users,
    currency,
    fotos,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
