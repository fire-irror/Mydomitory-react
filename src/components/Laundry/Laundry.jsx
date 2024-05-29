import React, { useState } from "react";
import styles from '../../css/Laundry/Laundry.module.css'
import Laundring from '../../assets/Laundring.svg'
import emptyLaundry from '../../assets/emptyLaundry.svg'
import Table from '../../assets/LaundryTable.svg'
import LaundryBtn from "./LaundryBtn";
import LaundryToggle from "./LaundryToggle";


export default function Laundry() {

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
              alt={laundry.isWashing ? "Laundring" : "Empty Laundry"}
            />
            <p>{laundry.room}</p>
            <p>{laundry.isWashing ? "세탁중" : "비어있음"}</p>
            <LaundryToggle
              isChecked={laundry.isWashing}
              handleToggle={() => handleToggle(laundry.id)}
            />
          </div>
        ))}
      </div>
      <div className={styles.Tables}>
        <img src={Table} className={styles.table} alt="Laundry Table" />
        <LaundryBtn/>
      </div>
    </div>
  );
}
