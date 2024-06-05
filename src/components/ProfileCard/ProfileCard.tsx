import { useEffect, useState } from 'react';
import Cover from '../../assets/Images/cover.jpg';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { UserData } from '../../DataTypes/UserType';
import { fetchUser } from '../../Api/UserApi';
import { saveUserData } from '../../State/User/UserSlice';
import styles from './ProfileCard.module.css';
import loadingStyle from '../Posts/Posts.module.css'
function ProfileCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const userData = useSelector((state: { user: UserData }) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userId');
    navigate('/auth');
  };

  const ProfilePage: boolean = false;

  useEffect(() => {
    if (!userData.id) {
      const id = Number.parseInt(localStorage.getItem("userId") || "");
      fetchUser(id)
        .then(response => {
          dispatch(saveUserData(response));
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
          setError('Error fetching user data. Please try again.');
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className={loadingStyle.cards}>
        <div className={`${loadingStyle.card} ${loadingStyle['is-loading']}`}>
          <div className={loadingStyle.image}></div>
          <div className={styles.content}>
            <h2></h2>
            <p></p>
          </div>
        </div>
      </div>
    );
  }


  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.ProfileCard}>
      <div className={styles.ProfileImages}>
        <img className={styles.ProfileImagesImg} src={Cover} alt="" />
        <img className={styles.ProfileImagesImg} src={userData?.profile_image} alt="" />
      </div>

      <div className={styles.ProfileName}>
        <span className={styles.ProfileNameSpan}>{userData?.name}</span>
        <span className={styles.ProfileNameSpan}>{userData?.email}</span>
      </div>

      <div className={styles.followStatus}>
        <hr className={styles.followStatusHr} />
        <div className={styles.followStatusDiv}>
          <div className={styles.follow}>
            <span className={styles.followSpan}>{userData?.posts_count}</span>
            <span className={styles.followSpan}>Posts</span>
          </div>
          <div className={styles.vl}></div>
          <div className={styles.follow}>
            <span className={styles.followSpan}>{userData?.comments_count}</span>
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

export default ProfileCard;
