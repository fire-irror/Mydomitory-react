import React, { useState, useEffect } from "react";
import styles from '../../css/Score/Score.module.css';
import ViewScore from "../Main/ViewScore";
import Bell from '../../assets/bell.svg';
import axios from "axios";
import moment from "moment";

export default function Score() {
  const [personalScores, setPersonalScores] = useState([]);
  const [penalties, setPenalties] = useState([]);
  const [award, setAward] = useState([]);
  const [filter, setFilter] = useState('all');
  const userId = 1;

  //전체 상벌점 가져오기
  useEffect(() => {
    axios.get(`http://localhost:8080/personal/${userId}`)
      .then(response => {
        setPersonalScores(response.data);
      })
      .catch(e => {
        console.error(e);
      });
  }, [userId]);

  //벌점 가져오기
  useEffect(() => {
    axios.get(`http://localhost:8080/personal/penalties/${userId}`).then(response => {
      setPenalties(response.data)
    })
      .catch(e => {
        console.error(e)
      })
  }, [userId]);

  //상점 가져오기
  useEffect(() => {
    axios.get(`http://localhost:8080/personal/award/${userId}`).then(response => {
      setAward(response.data)
    })
      .catch(e => {
        console.error(e)
      })
  }, [userId]);

  // moment를 사용하여 날짜 포맷 변경
  const formatDate = (dateString) => {
    return moment(dateString).format("YYYY.MM.DD");
  };

  const renderHrWrap = () => {
    let scoresToDisplay = [];

    if (filter === 'all') {
      scoresToDisplay = personalScores;
    } else if (filter === 'award') {
      scoresToDisplay = award;
    } else if (filter === 'penalties') {
      scoresToDisplay = penalties;
    }

    return scoresToDisplay.map((score, index) => (
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

      <div className={styles.filter}>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className={styles.select}>
          <option value="all" className={styles.option}>전체</option>
          <option value="award" className={styles.option}>상점</option>
          <option value="penalties" className={styles.option}>벌점</option>
        </select>
      </div>

      <div className={styles.table}>
        <p className={styles.tableYear}></p>
      </div>
      <hr className={styles.headerHr} />
      {personalScores.length > 0 || award.length > 0 || penalties.length > 0 ? renderHrWrap() : <p>데이터가 없습니다.</p>}
    </div>
  );
}
