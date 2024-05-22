import React from "react";
import styles from '../../css/myPage/editHeader.module.css'
import backBtn from '../../assets/backBtn.svg'
import { useNavigate } from "react-router";


export default function EditHeader() {
  const nav = useNavigate()
  const handleImg = () => {
    nav(-1)
  }
  return (
    <div>
      <div className={styles.container}>
        <img src={backBtn} className={styles.img} onClick={handleImg} />
        <p className={styles.title}>프로필 수정</p>
      </div>
      <hr />
    </div>
  )
}