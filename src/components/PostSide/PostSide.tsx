import React from 'react'
import SharePost from '../SharePost/SharePost.tsx'
import Posts from '../Posts/Posts.tsx'
import styles from './PostSide.module.css'

function PostSide() {
  return (
    <div className= {styles.postSide}>
      <SharePost/>
      <Posts/>
    </div>
  )
}

export default PostSide