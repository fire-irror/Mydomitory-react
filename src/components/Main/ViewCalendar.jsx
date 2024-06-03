import React from "react";
import DatePicker from "react-horizontal-datepicker";
import '../../css/Main/ViewCalendar.css'
import { useNavigate } from "react-router";

export default function ViewCalendar() {
  const nav = useNavigate()

  const selectedDay = (val) => {
    console.log(val);
  };

  const handleShowCalendar = ()=>{
    nav('/showcalendar')
  }
  return (
    <div className="WrapViewCalendar">
      <p className="showCalendarText" onClick={handleShowCalendar}>더보기</p>
      <DatePicker
        getSelectedDay={selectedDay}
        color={"#000"}
        enableDaysBefore={7}
      />

      <div className="schedule">
        <p className="schedule1">호실 청소</p>
        <p className="schedule1">점호</p>
        <p className="schedule1">점호</p>
        <p className="schedule1">점호</p>
      </div>
    </div>
  );
}
