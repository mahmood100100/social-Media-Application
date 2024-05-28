import React, { useState } from 'react';
import TrendCard from "../TrendCard/TrendCard";
import ShareModel from '../ShareModal/ShareModal';
import Home from "../../assets/Images/home.png";
import Noti from "../../assets/Images/noti.png";
import Comment from "../../assets/Images/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import styles from './TrendsSide.module.css';

const TrendsSide: React.FC = () => {
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  return (
    <div className={styles.TrendsSide}>
      <div className={styles.navIcons}>
        <img src={Home} alt="Home" />
        <UilSetting />
        <img src={Noti} alt="Notifications" />
        <img src={Comment} alt="Comments" />
      </div>
      <TrendCard />
      <button className={`${styles.rButton} button`} onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModel modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default TrendsSide;
