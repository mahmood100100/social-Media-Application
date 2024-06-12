import React from 'react';
import { useSelector } from 'react-redux';
import Search from '../Search/Search';
import ProfileCard from '../ProfileCard/ProfileCard';
import FollowersCard from '../FollowersCard/FollowersCard';
import styles from './ProfileSide.module.css';
import UserInfoCard from '../UserInfoCard/UserInfoCard';

function ProfileSide() {
  const currentPage = useSelector((state: { page: { currentPage: string } }) => state.page.currentPage);

  return (
    <div className={styles.profileLeftSide}>
      <Search />
      {currentPage !== 'home' ? <UserInfoCard/> : <ProfileCard />}
      {currentPage !== "userProfile" &&<FollowersCard />}
    </div>
  );
}

export default ProfileSide;
