import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetPost } from "../../DataTypes/PostType";

interface StateType {
  homePosts: GetPost[];
  userPosts: GetPost[];
}

const initialState: StateType = {
  homePosts: [],
  userPosts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    savePosts: (state, action: PayloadAction<{ posts: GetPost[]; page: string }>) => {
      const { posts, page } = action.payload;
      if (page === "home") {
        state.homePosts = [...state.homePosts, ...posts];
      } else {
        state.userPosts = action.payload.posts;
      }
    },
    editPostCommentsCount: (state, action: PayloadAction<{ postId: number; commentsCount: number; page: string }>) => {
      const { postId, commentsCount, page } = action.payload;
      const targetPosts = page === "home" ? state.homePosts : state.userPosts;
      const postIndex = targetPosts.findIndex(post => post.id === postId);
      if (postIndex !== -1) {
        targetPosts[postIndex].comments_count = commentsCount;
      }
    },
    saveNewPost: (state, action: PayloadAction<{ post: GetPost; page: string }>) => {
      const { post, page } = action.payload;
      if (page === "home") {
        state.homePosts.unshift(post);
      } else if (page === "yourProfile") {
        state.userPosts.unshift(post);
      }
    },
    deleteSpecificPost: (state, action: PayloadAction<number>) => {
      const postIdToDelete = action.payload;
      state.homePosts = state.userPosts.filter(post => post.id !== postIdToDelete);
      state.userPosts = state.userPosts.filter(post => post.id !== postIdToDelete);
    },
    clearPosts: (state) => {
      state.homePosts = [];
    },
    editPostBody: (state , action : PayloadAction<{postId : number ; postBody : string}>) => {
      const { postId, postBody } = action.payload;
      const userPostIndex = state.userPosts.findIndex(post => post.id === postId);
      if (userPostIndex !== -1) {
        state.userPosts[userPostIndex].body = postBody;
      }
    }
  },
});

export const { savePosts, editPostCommentsCount, saveNewPost, deleteSpecificPost , clearPosts, editPostBody } = postsSlice.actions;
export default postsSlice.reducer;
