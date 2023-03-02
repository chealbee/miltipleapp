import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  IsOpenPopupp: boolean;
  serch: string;
  curentFoto: string;
}
const initialState: InitialState = {
  IsOpenPopupp: false,
  curentFoto: "",
  serch: "",
};
export const fotosSlice = createSlice({
  name: "fotos",
  initialState,
  reducers: {
    setIsOpenPopupp: (state, action: PayloadAction<string>) => {
      state.IsOpenPopupp = !state.IsOpenPopupp;
      state.curentFoto = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.serch = action.payload;
    },
  },
});

export const { setSearch, setIsOpenPopupp } = fotosSlice.actions;
export default fotosSlice.reducer;
