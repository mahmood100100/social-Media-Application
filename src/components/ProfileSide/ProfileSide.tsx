import React from 'react'
import Search from '../Search/Search.tsx'
import ProfileCard from '../ProfileCard/ProfileCard.tsx'
import FollowersCard from '../FollowersCard/FollowersCard.tsx'
import styles from './ProfileSide.module.css'

function ProfileSide() {
  return (
    <div className= {styles.profileLeftSide}>
      <Search/>
      <ProfileCard/>
      <FollowersCard/>
    </div>
  )
}

export default ProfileSide