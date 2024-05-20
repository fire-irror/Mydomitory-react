import React from "react";
import styles from '../../css/board/boarderHeader.module.css'
import bell from '../../assets/bell.svg'

export default function BoarderHeader(){
  return(
    <div className={styles.container}>
      <div className={styles.Header}>
      <p className={styles.title}>게시판</p>
      <img src={bell} className={styles.bell}/>
      </div>
      <div className={styles.filter}>
        <p className={styles.p1}>HOT</p>
        <p className={styles.p2}>전체</p>
        <p className={styles.p3}>공지</p>
        <p className={styles.p4}>일반</p>
      </div>
    </div>
  )
}