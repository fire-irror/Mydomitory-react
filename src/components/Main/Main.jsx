import React, { useEffect, useState } from "react";
import styles from '../../css/Main/Main.module.css'
import axios from "axios";
import teacherImg from '../../assets/teacher.svg'
import cleanImg from '../../assets/clean.svg'
import ViewCalendar from "./ViewCalendar";
import ViewScore from "./ViewScore";

export default function Main() {
  const [userData, setUserData] = useState(null)
  const [todayTeacher, setTodayTeacher] = useState(null)
  const [roomNum, setRoomNum] = useState({ start: null, end: null })
  const userId = 1

  //사용자 정보에서 이름, 학교 가져오는 get
  useEffect(() => {
    axios.get(`http://3.36.91.138:80/user/${userId}`).then(response => {
      setUserData(response.data[0])
    })
      .catch(e => {
        console.error(e)
      })
  }, [])

  //오늘의 사감선생님 가져오는 get
  useEffect(() => {
    axios.get('http://3.36.91.138:80/public/housemaster/today').then(response => {
      setTodayTeacher(response.data[0])
    })
      .catch(e => {
        console.error(e)
      })
  }, [])



  //오늘의 청소 당번 가져오는 get
  useEffect(() => {
    axios.get('http://3.36.91.138:80/public/cleaning/today').then(response => {
      const data = response.data;
      if (data && data.length > 0) {
        setRoomNum({ start: data[0], end: data[data.length - 1] })
      }
    })
      .catch(e => {
        console.error(e)
      })
  }, [])

  return (
    <div className={styles.Main}>
      <p className={styles.MainTitle}>HOME</p>
      {userData ? (
        <div>
          <p className={styles.SchoolName}>{userData.school}</p>
          <p className={styles.MainGreeting}>안녕하세요, {userData.name}님!</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <div className={styles.wrapMainContent}>
        <div className={styles.teacher}>
          <img src={teacherImg} className={styles.teacherImg} />
          <p className={styles.TodayTeacher}>오늘의 사감쌤</p>
          {todayTeacher ? (
            <p className={styles.TeacherA}>{todayTeacher.teacherName} 선생님</p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className={styles.clean}>
          <img src={cleanImg} className={styles.cleanImg} />
          <p className={styles.cleaning}>공동구역 청소</p>
          {roomNum.start && roomNum.end ? (
            <p className={styles.cleaningroom}>{roomNum.start.roomNum} - {roomNum.end.roomNum}</p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <ViewScore />
      </div>
      <div className={styles.WrapCalendar}>
        <p className="calendarTitle">일정보기</p>
        <ViewCalendar />
      </div>
    </div>
  );
}
