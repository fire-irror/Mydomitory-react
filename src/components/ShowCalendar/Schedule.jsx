import React, { useEffect, useState } from "react";
import styles from '../../css/showCalendar/schedule.module.css';
import axios from "axios";

export default function Schedule() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/schedule/today')
      .then(response => {
        setSchedules(response.data);
      })
      .catch(e =>
        console.error(e)
      );
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        {schedules.map(schedule => (
          <div key={schedule.id} className={styles.schedule}>
            <p>{schedule.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
