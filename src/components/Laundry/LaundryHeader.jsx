import React from "react";
import styles from '../../css/Laundry/LaundryHeader.module.css'
import bell from '../../assets/bell.svg'

export default function LaundryHeader(){
  return(
    <div className={styles.container}>
      <p className={styles.title}>세탁</p>
      <img src={bell} className={styles.bell}/>
    </div>
  )
}