import React, { useState } from "react";
import styles from '../../css/reservation/Reservation.module.css';
import LaundryResTable from '../../assets/LaundryResTable.svg';

export default function Reservation() {
  const buttonCount = 12;
  const buttons = Array.from({ length: buttonCount }, (_, i) => i + 1);
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (number) => {
    setActiveButton(number);
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>세탁 일지</p>
      <img src={LaundryResTable} className={styles.LaundryResTable} />
      <button className={styles.ResBtn}>세탁 신청하기</button>

      <div className={styles.wrapBtn}>
        {buttons.map((number) => (
          <button
            key={number}
            className={`${styles[`b${number}`]} ${activeButton === number ? styles.active : ''}`}
            onClick={() => handleButtonClick(number)}
          >
          </button>
        ))}
      </div>
    </div>
  );
}
