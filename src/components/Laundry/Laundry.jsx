import React, { useState, useEffect } from "react";
import styles from '../../css/Laundry/Laundry.module.css';
import Laundring from '../../assets/Laundring.svg';
import emptyLaundry from '../../assets/emptyLaundry.svg';
import Table from '../../assets/LaundryTable.svg';
import LaundryBtn from "./LaundryBtn";
import LaundryToggle from "./LaundryToggle";
import axios from "axios";

export default function Laundry() {
  const [reservedWashers, setReservedWashers] = useState([]);
  const [laundryStatus, setLaundryStatus] = useState([
    { id: 1, room: null, isWashing: false },
    { id: 2, room: null, isWashing: false },
    { id: 3, room: null, isWashing: false },
  ]);

  //세탁기의 상태를 나타내는 함수
  const handleToggle = (id) => {
    setLaundryStatus(prevStatus =>
      prevStatus.map(laundry =>
        laundry.id === id ? { ...laundry, isWashing: !laundry.isWashing } : laundry
      )
    );
  };

  //사용자의 washer_num와 room_num 가져오기
  useEffect(() => {
    axios.get('http://localhost:8080/laundry')
      .then(response => {
        const reserved = response.data.map(reservation => ({
          washer_num: reservation.washer_num,
          room_num: reservation.room_num,
        }))
        setReservedWashers(reserved);
      })
      .catch(e => {
        console.error(e);
      });
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.title}>세탁 현황</p>
      <div className={styles.wrapViewLaundry}>
        {laundryStatus.map(laundry => (
          <div key={laundry.id} className={styles[`ViewLaundry${laundry.id}`]}>
            <p className={styles[laundry.id === 1 ? 'one' : laundry.id === 2 ? 'two' : 'three']}>
              <span className={styles[`${laundry.id === 1 ? 'one' : laundry.id === 2 ? 'two' : 'three'}Content`]}>
                {laundry.id}
              </span>
            </p>
            <img
              src={laundry.isWashing ? Laundring : emptyLaundry}
              className={laundry.isWashing ? styles.Laundring : styles.emptyLaundry}
            />
            <p>{laundry.isWashing ? "세탁중" : "비어있음"}</p>
            <LaundryToggle
              isChecked={laundry.isWashing}
              handleToggle={() => handleToggle(laundry.id)}
            />
          </div>
        ))}
      </div>
      <div className={styles.Tables}>
        <img src={Table} className={styles.table} />

        <div className={styles.wrapBtn}>
          {reservedWashers.map(({ washer_num, room_num }) => (
            <button
              key={washer_num}
              className={`${styles[`b${washer_num}`]} ${styles.reserved}`}
            >
              {room_num}
            </button>
          ))}
        </div>
        <LaundryBtn />
      </div>
    </div>
  );
}
