import React from 'react'
import TrendCard from '../TrendCard/TrendCard.tsx'
import ShareModel from '../ShareModel/ShareModel.tsx'
import styles from './TrendsSide.module.css'

function TrendsSide() {
  return (
    <div className= {styles.trendSide}>
      <TrendCard/>
      <ShareModel/>
    </div>
  )
}

export default TrendsSide