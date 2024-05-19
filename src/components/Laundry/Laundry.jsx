import React from "react";
import styles from '../../css/Laundry/Laundry.module.css'
import Laundring from '../../assets/Laundring.svg'
import emptyLaundry from '../../assets/emptyLaundry.svg'
import Table from '../../assets/LaundryTable.svg'
import { useNavigate } from "react-router";
import LaundryBtn from "./LaundryBtn";


export default function Laundry() {
  const navigate = useNavigate()


  return (
    <div className={styles.container}>
      <p className={styles.title}>세탁 현황</p>

      <div className={styles.wrapViewLaundry}>
        <div className={styles.ViewLaundry1}>
          <p className={styles.one}><span className={styles.oneContent}>1</span></p>
          <img src={Laundring} className={styles.Laundring} />
          <p>508</p>
          <p>세탁중</p>
        </div>
        <div className={styles.ViewLaundry2}>
          <p className={styles.two}><span className={styles.twoContent}>2</span></p>
          <img src={emptyLaundry} className={styles.emptyLaundry} />
          <p>508</p>
          <p>세탁중</p>
        </div>
        <div className={styles.ViewLaundry3}>
          <p className={styles.three}><span className={styles.threeContent}>3</span></p>
          <img src={Laundring} className={styles.Laundring} />
          <p>508</p>
          <p>세탁중</p>
        </div>
      </div>
      <div className={styles.Tables}>
        <img src={Table} className={styles.table} />
        <LaundryBtn/>
      </div>
    </div>
  )
}