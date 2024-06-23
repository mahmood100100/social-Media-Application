import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Comment } from "../../DataTypes/CommentsType";

const initialState: Comment[] = [];

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    saveComments: (state, action: PayloadAction<Comment[]>) => {
      return action.payload;
    },
    addComment: (state, action: PayloadAction<Comment>) => {
      state.push(action.payload);
    }
  }
});

export const { saveComments, addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
