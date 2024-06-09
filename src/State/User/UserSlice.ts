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
    },
    incrementUserCommentsCount: (state) => {
      state.comments_count += 1;
    },
    incrementUserPostsCount: (state) => {
      state.posts_count += 1;
    }
  }
});

export const { saveUserData, incrementUserCommentsCount, incrementUserPostsCount } = userSlice.actions;
export default userSlice.reducer;
