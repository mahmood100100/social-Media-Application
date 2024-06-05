import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "../../DataTypes/UserType";

const initialState: UserData = {
  username: "",
  name: "",
  email: "",
  id: 0,
  profile_image: "",
  comments_count: 0,
  posts_count: 0
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUserData: (state, action: PayloadAction<UserData>) => {
      return { ...state, ...action.payload };
    }
  }
});

export const { saveUserData } = userSlice.actions;

export default userSlice.reducer;
