import React, { useEffect, useState } from "react";
import DatePicker from "react-horizontal-datepicker";
import '../../css/Main/ViewCalendar.css'
import { useNavigate } from "react-router";
import axios from "axios";
import moment from "moment";
import round from '../../assets/round.svg'

export default function ViewCalendar() {
  const nav = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    if (selectedDate) {
      const formattedDate = moment(selectedDate).format('YYYY-MM-DD');
      fetchSchedule(formattedDate);
    }
  }, [selectedDate]);

  const fetchSchedule = async (date) => {
    try {
      const response = await axios.get(`http://localhost:8080/schedule/${date}`);
      setSchedule(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSelectedDay = (date) => {
    setSelectedDate(date);
  };

  const handleShowCalendar = () => {
    nav('/showcalendar');
  };

  return (
    <div className="WrapViewCalendar">
      <p className="showCalendarText" onClick={handleShowCalendar}>더보기</p>
      <DatePicker
        getSelectedDay={handleSelectedDay}
        color={"#000"}
        enableDaysBefore={7}
      />
      <div className="schedule">
        {schedule.map((item, index) => (
          <div className="wrapSchedule" key={index}>
            <div className="scheduleContent">
              <div className="scheduleItem">
                <img src={round} className="round"/>
                {index !== schedule.length - 1 && <hr className="hrLine"/>}
                <p className="scheduleText">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
