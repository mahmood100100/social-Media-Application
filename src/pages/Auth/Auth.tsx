import styles from './Auth.module.css';
import Logo from "../../assets/img/logo.png";
import { Outlet } from 'react-router-dom';

function Auth() {
  return (
    <div className={styles.Auth}>
      <div className={styles['left-section']}>
        <img src={Logo} alt="Logo" className={styles.logo} />
        <div className={styles['app-info']}>
          <h1 className={styles['app-name']}>Social Media</h1>
          <h4>Explore the ideas throughout the world</h4>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Auth;
