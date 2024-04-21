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
    </div>
  );
}
