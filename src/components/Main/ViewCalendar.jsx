import React from "react";
import DatePicker from "react-horizontal-datepicker";
import '../../css/Main/ViewCalendar.css'

export default function ViewCalendar() {
  const selectedDay = (val) => {
    console.log(val);
  };
  return (
    <div className="WrapViewCalendar">
      <DatePicker
        getSelectedDay={selectedDay}
        color={"#000"}
        enableDaysBefore={2}
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
