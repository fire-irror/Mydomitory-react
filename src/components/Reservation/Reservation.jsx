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
  const userId = 1;
  const nav = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:8080/user/${userId}`)
      .then(response => {
        setUserData(response.data[0]);
      })
      .catch(e => {
        console.error(e);
      });
  }, [userId]);

  // 사용자가 세탁기를 클릭할 때의 핸들러
  const handleButtonClick = (number) => {
    setActiveButton(number);
  };

  // 세탁기 예약 요청 핸들러
  const handleResBtn = async () => {
    const roomNum = userData.room_num;
    const washerNum = getWasherNumber(activeButton);

    if (washerNum === null) {
      alert('세탁기 번호를 확인할 수 없습니다.');
      return;
    }

    const postData = {
      userId,
      washer_num: washerNum.toString(),
      room_num: roomNum
    };

    try {
      const response = await axios.post('http://localhost:8080/laundry', postData);
      if (response.status === 200) {
        alert("성공");
        nav('/laundry')
      }
    } catch (e) {
      alert('실패');
    }
  };

  // 각 버튼에 따른 세탁기 번호 지정
  //includes를 사용하여 배열속에 해당 번호가 있는지 확인
  const getWasherNumber = (buttonNumber) => {
    if ([1, 4, 7, 10].includes(buttonNumber)) {
      return 1;
    } else if ([2, 5, 8, 11].includes(buttonNumber)) {
      return 2;
    } else if ([3, 6, 9, 12].includes(buttonNumber)) {
      return 3;
    }
    return null;
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
            className={`${styles[`b${number}`]} ${activeButton === number ? styles.active : ''}`}
            onClick={() => handleButtonClick(number)}
          >
          </button>
        ))}
      </div>
    </div>
  );
}
