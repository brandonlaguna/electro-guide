import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { userInitialState } from "@/store/state/userInitialState";
import { UserData } from "@/store/models/userModel";

export const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    changeUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.data = action.payload;
    },
  },
});

export const { changeUserName, setUserData } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const userSelector = (state: RootState) => state.users;

export default userSlice.reducer;
