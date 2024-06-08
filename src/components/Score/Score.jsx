import React, { useState, useEffect } from "react";
import styles from '../../css/Score/Score.module.css';
import ViewScore from "../Main/ViewScore";
import Bell from '../../assets/bell.svg';
import axios from "axios";
import moment from "moment"; // moment 라이브러리 추가

export default function Score() {
  const [personalScores, setPersonalScores] = useState([]);
  const [penalties, setPenalties] = useState([]);
  const [award, setAward] = useState([]);
  const userId = 1;

  useEffect(() => {
    axios.get(`http://localhost:8080/personal/${userId}`)
      .then(response => {
        setPersonalScores(response.data);
      })
      .catch(e => {
        console.error(e);
      });
  }, [userId]);

  useEffect(() => {
    axios.get(`http://localhost:8080/penalties/${userId}`).then(response => {
      setPenalties(response.data)
    })
      .catch(e => {
        console.error(e)
      })
  }, [penalties]);

  useEffect(() => {
    axios.get(`http://localhost:8080/award/${userId}`).then(response => {
      setAward(response.data)
    })
      .catch(e => {
        console.error(e)
      })
  }, [award]);

  // moment를 사용하여 날짜 포맷 변경
  const formatDate = (dateString) => {
    return moment(dateString).format("YYYY.MM.DD");
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
