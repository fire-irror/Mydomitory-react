import React, { useState, useEffect } from "react";
import styles from '../../css/Score/Score.module.css';
import ViewScore from "../Main/ViewScore";
import Bell from '../../assets/bell.svg';
import axios from "axios";

export default function Score() {
  const [personalScores, setPersonalScores] = useState([]);
  const userId = 1;

  // 사용자의 모든 상벌점 내용을 가져오는 get  
  useEffect(() => {
    axios.get(`http://localhost:8080/personal/${userId}`)
      .then(response => {
        setPersonalScores(response.data);
      })
      .catch(e => {
        console.error(e);
      });
  }, [userId]);

  // 날짜를 년, 월, 일로 분리하는 함수
  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    // 월은 0부터 시작하므로 1을 더함
    const month = dateObj.getMonth() + 1; 
    const day = dateObj.getDate();
    return `${year}.${month < 10 ? `0${month}` : month}.${day < 10 ? `0${day}` : day}`;
  };

  const renderHrWrap = () => {
    return personalScores.map((score, index) => (
      <div key={index} className={styles.wrapHr}>
        <div className={styles.tableContent}>
          <p className={styles.p1}>{formatDate(score.date)}</p>
          <p className={styles.p2}>{score.content}</p>
          <p className={styles.p3}>{score.score}</p>
        </div>
        <hr className={styles.hr} />
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>상벌점</p>
        <img src={Bell} className={styles.Bell} alt="bell icon" />
        <ViewScore />
      </div>

      <div className={styles.table}>
        <p className={styles.tableYear}></p>
        <p className={styles.moreView}>더보기</p>
      </div>
      <hr className={styles.headerHr} />
      {personalScores.length > 0 ? renderHrWrap() : <p>데이터가 없습니다.</p>}
    </div>
  );
}
