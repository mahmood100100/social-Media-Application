import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setUserProfile } from '../../State/CurrentPage/CurrentPageSlice';
import { useParams } from 'react-router-dom'; // Import useParams
import ProfileSide from '../../Components/ProfileSide/ProfileSide';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';
import TrendsSide from '../../Components/TrendsSide/TrendsSide';
import SharePost from '../../Components/SharePost/SharePost';
import UserPosts from '../../components/UserPosts/UserPosts';
import styles from './UserProfilePage.module.css';
import { RootState } from '../../State/Store';

function UserProfilePage() {
  const dispatch = useDispatch();
  const { profileId } = useParams();
  const page = useSelector((state : RootState) => state.page.currentPage)

  useEffect(() => {
    if(localStorage.getItem('userId') == profileId) {
      dispatch(setCurrentPage('yourProfile'));
    }else {
      dispatch(setCurrentPage("userProfile"));
    }
  }, [dispatch]);

  return (
    <div className={styles.profile}>
      <ProfileSide />
      <div className={styles.profileCenter}>
        <ProfileCard />
        {page === "yourProfile" && <SharePost/>}
        <UserPosts/>

      </div>
      <TrendsSide />
    </div>
  );
}

export default UserProfilePage;
