import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface IUser {
  id: number;
  email: string;
  first_name: string;
  avatar: string;
}
interface IUserState {
  data: IUser[];
  isLoading: boolean;
  requsted: number[];
  filtredUsers: IUser[];
}

const initialState: IUserState = {
  data: [],
  isLoading: false,
  requsted: [],
  filtredUsers: [],
};
export const getUsers = createAsyncThunk<IUser[], undefined, {}>(
  "user/getUsers",
  async (_, {}) => {
    const res = await axios.get("https://reqres.in/api/users");
    const data = res.data.data;
    return data;
  }
);

export const inputSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addInvate: (state, action: PayloadAction<number>) => {
      if (state.requsted.includes(action.payload)) {
        state.requsted = state.requsted.filter((ell) => {
          return ell !== action.payload;
        });
      } else {
        state.requsted.push(action.payload);
      }
    },
    search: (state, action: PayloadAction<string>) => {
      if (action.payload.length) {
        state.filtredUsers = state.data.filter(
          (ell) =>
            ell.first_name.toLowerCase().includes(action.payload) ||
            ell.email.toLowerCase().includes(action.payload)
        );
      } else {
        state.filtredUsers = state.data;
      }
    },
  },
  extraReducers: (build) => {
    build.addCase(getUsers.fulfilled, (state, action) => {
      state.data = action.payload;
      state.filtredUsers = action.payload;
      state.isLoading = false;
    });
    build.addCase(getUsers.pending, (state, _) => {
      state.isLoading = true;
    });
  },
});

export const { addInvate, search } = inputSlice.actions;
export default inputSlice.reducer;
