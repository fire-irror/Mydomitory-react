import React from "react";
import styles from '../../css/board/boarderHeader.module.css'
import bell from '../../assets/bell.svg'

export default function BoarderHeader(){
  return(
    <div className={styles.container}>
      <p className={styles.title}>게시판</p>
      <img src={bell} className={styles.bell}/>
    </div>
  )
}