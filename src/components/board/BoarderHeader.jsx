import React, { useState } from "react";
import styles from '../../css/board/boarderHeader.module.css'
import bell from '../../assets/bell.svg'

export default function BoarderHeader({ onFilterChange }) {
  const [activeFilter, setActiveFilter] = useState('전체');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className={styles.container}>
      <div className={styles.Header}>
        <p className={styles.title}>게시판</p>
        <img src={bell} className={styles.bell} />
      </div>
      <div className={styles.filter}>
        <p className={`${styles.p1} ${activeFilter === 'HOT' ? styles.active : ''}`} onClick={() => handleFilterClick('HOT')}>HOT</p>
        <p className={`${styles.p2} ${activeFilter === '전체' ? styles.active : ''}`} onClick={() => handleFilterClick('전체')}>전체</p>
        <p className={`${styles.p3} ${activeFilter === '공지' ? styles.active : ''}`} onClick={() => handleFilterClick('공지')}>공지</p>
        <p className={`${styles.p4} ${activeFilter === '일반' ? styles.active : ''}`} onClick={() => handleFilterClick('일반')}>일반</p>
      </div>
    </div>
  );
}
