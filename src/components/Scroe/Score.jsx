import React from "react";
import styles from '../../css/Score/Score.module.css'
import ViewScore from "../Main/ViewScore";
import Bell from '../../assets/bell.svg'

export default function Score() {
  const renderHrWrap = () => {
    const hrWraps = [];
    for (let i = 0; i < 6; i++) {
      hrWraps.push(
        <div key={i} className={styles.wrapHr}>
          <div className={styles.tableContent}>
            <p className={styles.p1}>6.14</p>
            <p className={styles.p2}>모범호실</p>
            <p className={styles.p3}>+1</p>
          </div>
          <hr className={styles.hr} />
        </div>
      );
    }
    return hrWraps;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>상벌점</p>
        <img src={Bell} className={styles.Bell} />
        <ViewScore />
      </div>

      <div className={styles.table}>
        <p className={styles.tableYear}>2024</p>
        <p className={styles.moreView}>더보기</p>
      </div>
      <hr className={styles.headerHr} />
      {renderHrWrap()}
    </div>
  );
}
