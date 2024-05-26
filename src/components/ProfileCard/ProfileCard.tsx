import React from 'react'
import Cover from '../../assets/Images/cover.jpg'
import Profile from '../../assets/Images/profileImg.jpg'
import styles from './ProfileCard.module.css'
function ProfileCard() {
  const ProfilePage : boolean = false;
  return (
    <div className= {styles.ProfileCard}>
      <div className= {styles.ProfileImages}>
        <img className= {styles.ProfileImagesImg} src={Cover} alt="" />
        <img className= {styles.ProfileImagesImg} src={Profile} alt="" />
      </div>

      <div className= {styles.ProfileName}>
        <span className= {styles.ProfileNameSpan}>Zendaya MJ</span>
        <span className= {styles.ProfileNameSpan}>Senior UI/UX Designer</span>
      </div>

      <div className= {styles.followStatus}>
        <hr className= {styles.followStatusHr} />
        <div className= {styles.followStatusDiv}>
          <div className= {styles.follow}>
            <span className= {styles.followSpan}>6,890</span>
            <span className= {styles.followSpan}>Followings</span>
          </div>
          <div className= {styles.vl}></div>
          <div className= {styles.follow}>
            <span className= {styles.followSpan}>1</span>
            <span className= {styles.followSpan}>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className= {styles.vl}></div>
              <div className= {styles.follow}>
                <span className= {styles.followSpan}>3</span>
                <span className= {styles.followSpan}>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span className= {styles.ProfileCardSpan}>My Profile</span>}
    </div>
  );
}

export default ProfileCard