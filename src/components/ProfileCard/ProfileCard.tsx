import React from 'react'
import Cover from '../../assets/Images/cover.jpg'
import { useNavigate } from 'react-router-dom'
import styles from './ProfileCard.module.css'

function ProfileCard() {

  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem('userToken');
    navigate('/auth')
  }
  
  const userDataString = localStorage.getItem('userData');
  const userData = userDataString ?  JSON.parse(userDataString) : undefined ;
  console.log(userData)
  const ProfilePage: boolean = false;
  return (
    <div className={styles.ProfileCard}>
      <div className={styles.ProfileImages}>
        <img className={styles.ProfileImagesImg} src={Cover} alt="" />
        <img className={styles.ProfileImagesImg} src={userData.profile_image} alt="" />
      </div>

      <div className={styles.ProfileName}>
        <span className={styles.ProfileNameSpan}>{userData.name}</span>
        <span className={styles.ProfileNameSpan}>{userData.email}</span>
      </div>

      <div className={styles.followStatus}>
        <hr className={styles.followStatusHr} />
        <div className={styles.followStatusDiv}>
          <div className={styles.follow}>
            <span className={styles.followSpan}>{userData.posts_count}</span>
            <span className={styles.followSpan}>Posts</span>
          </div>
          <div className={styles.vl}></div>
          <div className={styles.follow}>
            <span className={styles.followSpan}>{userData.comments_count}</span>
            <span className={styles.followSpan}>Comments</span>
          </div>

          {ProfilePage && (
            <>
              <div className={styles.vl}></div>
              <div className={styles.follow}>
                <span className={styles.followSpan}>3</span>
                <span className={styles.followSpan}>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      <div className={styles.cardButtons}>
        {ProfilePage ? "" : <button className={'button'}>My Profile</button>}
         <button onClick={() => logOut()} className={'button'}>Log Out</button>
      </div>
    </div>

  );
}

export default ProfileCard