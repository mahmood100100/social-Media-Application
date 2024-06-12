import React, { useEffect, useState } from 'react';
import { UilPen } from '@iconscout/react-unicons';
import EditUserInfoModal from '../EditUserInfoModal/EditUserInfoModal';
import styles from './UserInfoCard.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../State/Store';
import { UserData } from '../../DataTypes/UserType';
import { fetchUser } from '../../Api/UserApi';
import { saveUserData } from '../../State/User/UserSlice';

function UserInfoCard() {
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData: UserData = useSelector((state: RootState) => state.user);
  const page : string = useSelector((state : RootState) => state.page.currentPage)
  const {profileId} = useParams()
  const id:number = Number.parseInt(profileId || '');
  const handleHomePage = () => {
    navigate("/");
  };

  const logOut = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userId');
    navigate('/auth');
  };

  useEffect(() => {
    if(page !== "home" && id) {
      fetchUser(id)
        .then(response => {
          dispatch(saveUserData(response));
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
      }
  }, [ id]);

  return (
    <div className={styles.infoCard}>
      <div className={styles.infoHead}>
        <h4>{page === "yourProfile" ? "Your Info" : "User Info"}</h4>
        {page === "yourProfile" && 
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <EditUserInfoModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
        }
      </div>

      <div className={styles.info}>
        <span>
          <b>username </b>
        </span>
        <span>{userData.username}</span>
      </div>

      <div className={styles.info}>
        <span>
          <b>email </b>
        </span>
        <span>{userData.email}</span>
      </div>

      <div className={styles.info}>
        <span>
          <b>name </b>
        </span>
        <span>{userData.name}</span>
      </div>

      <div className={styles.infoCardFooterButtons}>
        <button onClick={handleHomePage} className={`button ${styles.logoutButton}`}>Home</button>
        {page === "yourProfile" && <button onClick={logOut} className={`button ${styles.logoutButton}`}>Logout</button>}
      </div>
    </div>
  );
}

export default UserInfoCard;
