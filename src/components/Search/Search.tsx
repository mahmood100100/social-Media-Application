import React from 'react'
import Logo from '../../assets/Images/logo.png'
import {UilSearch} from '@iconscout/react-unicons'
import styles from './Search.module.css'
function Search() {
  return (
    <div className= {styles.LogoSearch}>
       <img src={Logo} alt="" />
       <div className= {styles.Search}>
           <input className= {styles.SearchInput} type="text" placeholder='#Explore' />
           <div className= {styles.sIcon}>
               <UilSearch/>
           </div>
       </div>
   </div>
  )
}

export default Search