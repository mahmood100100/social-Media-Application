import {configureStore} from '@reduxjs/toolkit'
import userReducer from './User/UserSlice'
import commentsReducer from './Comments/CommentsSlice'
import postsReducer from './Posts/PostsSlice'

export const store = configureStore({
    reducer : {
        user : userReducer,
        comments: commentsReducer,
        posts: postsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch