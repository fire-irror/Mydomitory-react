import React from "react";
import styles from '../../css/Post/postHeader.module.css';
import backBtn from '../../assets/backBtn.svg';
import { useNavigate } from "react-router-dom";

export default function PostHeader() {
  const nav = useNavigate();
  
  const handleBackBtn = () => {
    nav(-1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <img src={backBtn} className={styles.backBtn} onClick={handleBackBtn} alt="back button" />
        <p className={styles.title}>글 등록하기</p>
      </div>
      <hr />
    </div>
  );
}
