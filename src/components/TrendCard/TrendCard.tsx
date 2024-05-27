import React from 'react';
import { TrendData } from '../../Api/TrendData';
import styles from './TrendCard.module.css';

const TrendCard: React.FC = () => {
  return (
    <div className={styles.TrendCard}>
      <h3>Trends for you</h3>
      {TrendData.map((trend, index) => (
        <div key={index} className={styles.trend}>
          <span>#{trend.name}</span>
          <span>{trend.shares}k shares</span>
        </div>
      ))}
    </div>
  );
};
export default TrendCard;