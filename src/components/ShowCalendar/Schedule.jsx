import React, { useEffect, useState } from "react";
import styles from "../../css/showCalendar/schedule.module.css";
import axios from "axios";

export default function Schedule({ selectedDate }) {
  const [schedules, setSchedules] = useState([]);

  //날짜별로 일정 조회하기
  useEffect(() => {
    axios.get(`http://localhost:8080/schedule/${selectedDate}`).then((response) => {
        setSchedules(response.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [selectedDate]);

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        {schedules.map((schedule) => (
          <div key={schedule.id} className={styles.schedule}>
            <p>{schedule.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
