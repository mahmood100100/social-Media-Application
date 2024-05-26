import React from 'react'
import ProfileSide from '../../Components/ProfileSide/ProfileSide'
import PostSide from '../../Components/PostSide/PostSide'
import TrendsSide from '../../Components/TrendsSide/TrendsSide'
import styles from './UserHomePage.module.css'

function UserHomePage() {
  return (
    <div className= {styles.Home}>
     <ProfileSide/>
     <PostSide/>
     <TrendsSide/>
    </div>
  )
}

export default UserHomePage