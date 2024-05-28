import React from 'react'
import styles from './FollowersCard.module.css'
import {Followers} from '../../Api/FollowersApi.ts'

function FollowersCard() {
  return (
    <div className= {styles.FollowersCard}>
        <h3>Who is following you</h3>

        {Followers. map((follower, id)=>{
            return(
                <div className= {styles.follower} key={id}>
                    <div className= {styles.followerDiv}>
                        <img src={follower.img} alt="" className= {styles.followerImage} />
                        <div className= {styles.name}>
                            <span className= {styles.nameSpan}>{follower.name}</span>
                            <span className= {styles.nameSpan}>@{follower.username}</span>
                        </div>
                    </div>
                    <button className= {`button ${styles.fcButton}`}>
                        Follow
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default FollowersCard