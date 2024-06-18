import React, { useEffect, useState } from "react";
import styles from '../../css/reservation/Reservation.module.css';
import LaundryResTable from '../../assets/LaundryResTable.svg';
import { useNavigate } from "react-router";
import axios from "axios";

export default function Reservation() {
  const buttonCount = 12;
  const buttons = Array.from({ length: buttonCount }, (_, i) => i + 1);
  const [activeButton, setActiveButton] = useState(null);
  const [userData, setUserData] = useState(null);
  const [washerNum, setWasherNum] = useState(null);
  const [reservedWashers, setReservedWashers] = useState([]);
  const userId = 1;
  const nav = useNavigate();

  useEffect(() => {
    axios.get(`http://3.36.91.138:80/user/${userId}`)
      .then(response => {
        setUserData(response.data[0]);
      })
      .catch(e => {
        console.error(e);
      });
  }, [userId]);

  useEffect(() => {
    axios.get('http://3.36.91.138:80/laundry')
      .then(response => {
        const reserved = response.data.map(reservation => reservation.washer_num);
        setReservedWashers(reserved);
      })
      .catch(e => {
        console.error(e);
      });
  }, []);

  const handleButtonClick = (number) => {
    if (reservedWashers.includes(number)) {
      return;
    }
    setActiveButton(number);
    setWasherNum(number);
  };

  const handleResBtn = async () => {
    const roomNum = userData.room_num;

    if (washerNum === null) {
      alert('세탁기 번호를 확인할 수 없습니다.');
      return;
    }

    const postData = {
      userId,
      washer_num: washerNum,
      room_num: roomNum,
    };

    try {
      const response = await axios.post('http://3.36.91.138:80/laundry', postData);
      if (response.status === 200) {
        nav('/laundry');
      }
    } catch (e) {
      alert('실패');
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>세탁 일지</p>
      <img src={LaundryResTable} className={styles.LaundryResTable} alt="Laundry Reservation Table" />
      <button className={styles.ResBtn} onClick={handleResBtn}>세탁 신청하기</button>

      <div className={styles.wrapBtn}>
        {buttons.map((number) => (
          <button
            key={number}
            className={`${styles[`b${number}`]} ${reservedWashers.includes(number) ? styles.reserved : activeButton === number ? styles.active : ''}`}
            onClick={() => handleButtonClick(number)}
            disabled={reservedWashers.includes(number)}
          >
          </button>
        ))}
      </div>
    </div>
  );
}