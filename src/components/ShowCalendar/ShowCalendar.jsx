import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import '../../css/showCalendar/showCalendar.css';
import Schedule from './Schedule';
import back from '../../assets/backBtn.svg';
import { useNavigate } from 'react-router';

export default function ShowCalendar() {
  const today = new Date();
  const [date, setDate] = useState(today);
  const nav = useNavigate();

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const formattedDate = moment(date).format('YYYY.MM.DD');
  const dayOfWeek = moment(date).format('dddd');

  const showCalendarBackbtn = () => {
    nav(-1);
  };

  return (
    <div>
      <div className='ShowCalendarWrap'>
        <img src={back} className='showCalendarBackbtn' onClick={showCalendarBackbtn} />
        <p className="showCalendarTitle">HOME</p>
      </div>

      <div className='container'>
        <Schedule />
        <Calendar
          value={date}
          onChange={handleDateChange}
          formatDay={(locale, date) => moment(date).format("D")}
          formatMonthYear={(locale, date) => moment(date).format("YYYY.MM")}
          calendarType="gregory"
          showNeighboringMonth={false}
          next2Label={null}
          prev2Label={null}
          minDetail="year"
          className='reactCalendar'
        />
        <div className="todayInfoContainer">
          <div className="todayInfoBox">
            <p className="todayDayOfWeek">{dayOfWeek}</p>
            <p className="todayDate">{formattedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
