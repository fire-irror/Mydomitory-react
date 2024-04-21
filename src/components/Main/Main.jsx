import React from "react";
import '../../css/Main/Main.css'
import teacherImg from '../../assets/teacher.svg'
import cleanImg from '../../assets/clean.svg'
import ViewCalendar from "./ViewCalendar";



export default function Main(){
  return(
    <div className="Main">
      <p className="MainTitle">HOME</p>
      <p className="SchoolName">미림마이스터고</p>
      <p className="MainGreeting">안녕하세요,김미림님!</p>
      <div className="wrapMainContent">
        <div className="teacher">
        <img src={teacherImg} className="teacherImg"/>
          <p className="TodayTeacher">오늘의 사감쌤</p>
          <p className="TeacherA">김미림 선생님</p> 
        </div>
        <div className="clean">
          <img src={cleanImg} className="cleanImg"/>
          <p className="cleaning">공동구역 청소</p>
          <p className="cleaningroom">501 - 509</p>
        </div>

        <div className="personalScore">
          <p className="score">Total :  5</p>

          <div className="WrapgoodScore">
            <p className="goodScoreTitle">상점</p>
            <p className="goodScoreContent">모범 호실</p>
            <p className="goodScore">8점</p>
          </div>

          <div className="WrapbadScore">
            <p className="badScoreTitle">벌점</p>
            <p className="badScoreContent">타호실 무단 출입</p>
            <p className="badScore">5점</p>
          </div>

          <div className="WrapCalendar">
            <p className="calendarTitle">일정보기</p>
            <ViewCalendar/>
          </div>
        </div>
      </div>
    </div>
  )
}