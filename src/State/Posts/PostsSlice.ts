import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetPost } from "../../DataTypes/PostType";

const initialState: GetPost[] = []

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    savePosts: (state, action: PayloadAction<GetPost[]>) => {
      return action.payload;
    },
    editPostCommentsCount: (state, action: PayloadAction<{ postId: number; commentsCount: number }>) => {
      const { postId, commentsCount } = action.payload;
      const postIndex = state.findIndex(post => post.id === postId);
      if (postIndex !== -1) {
        state[postIndex].comments_count = commentsCount;
      }
    },
    saveNewPost: (state, action: PayloadAction<GetPost>) => {
      state.unshift(action.payload);
    }
  }
});

export const { savePosts, editPostCommentsCount , saveNewPost } = postsSlice.actions;
export default postsSlice.reducer;
