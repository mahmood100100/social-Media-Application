import React, { useEffect } from 'react'
import ProfileSide from '../../Components/ProfileSide/ProfileSide.tsx'
import PostSide from '../../Components/PostSide/PostSide'
import TrendsSide from '../../Components/TrendsSide/TrendsSide'
import styles from './UserHomePage.module.css'
import { useDispatch } from 'react-redux'
import { setCurrentPage } from '../../State/CurrentPage/CurrentPageSlice.ts'

function UserHomePage() {

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(setCurrentPage('home'));
  } , [])

  return (
    <div className= {styles.Home}>
     <ProfileSide/>
     <PostSide/>
     <TrendsSide/>
    </div>
  )
}

export default UserHomePage