import React, { useEffect, useState } from "react";
import '../../css/Main/Main.css'
import axios from "axios";
import teacherImg from '../../assets/teacher.svg'
import cleanImg from '../../assets/clean.svg'
import ViewCalendar from "./ViewCalendar";
import ViewScore from "./ViewScore";

export default function Main() {
  const [userData, setUserData] = useState(null)
  const [todayTeacher, setTodayTeacher] = useState(null)
  const [roomNum, setRoomNum] = useState({ start: null, end: null })

  //사용자 정보에서 이름, 학교 가져오는 get
  useEffect(() => {
    const userId = 1;
    axios.get(`http://localhost:8080/user/${userId}`).then(response => {
      setUserData(response.data[0])
    })
      .catch(e => {
        console.error(e)
      })
  }, [])

  //오늘의 사감선생님 가져오는 get
  useEffect(() => {
    axios.get('http://localhost:8080/public/housemaster/today').then(response => {
      setTodayTeacher(response.data[0])
    })
      .catch(e => {
        console.error(e)
      })
  }, [])

  //오늘의 청소 당번 가져오는 get
  useEffect(() => {
    axios.get('http://localhost:8080/public/cleaning/today').then(response => {
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
    <div className="Main">
      <p className="MainTitle">HOME</p>
      {userData ? (
        <div>
          <p className="SchoolName">{userData.school}</p>
          <p className="MainGreeting">안녕하세요, {userData.name}님!</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <div className="wrapMainContent">
        <div className="teacher">
          <img src={teacherImg} className="teacherImg" />
          <p className="TodayTeacher">오늘의 사감쌤</p>
          {todayTeacher ? (
            <p className="TeacherA">{todayTeacher.teacherName} 선생님</p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="clean">
          <img src={cleanImg} className="cleanImg" />
          <p className="cleaning">공동구역 청소</p>
          {roomNum.start && roomNum.end ? (
            <p className="cleaningroom">{roomNum.start.roomNum} - {roomNum.end.roomNum}</p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <ViewScore />
      </div>
      <div className="WrapCalendar">
        <p className="calendarTitle">일정보기</p>
        <ViewCalendar />
      </div>
    </div>
  )
}
