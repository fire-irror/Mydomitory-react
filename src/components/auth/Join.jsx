import React, { useState } from "react";
import { useNavigate } from "react-router";
import styles from '../../css/auth/Join.module.css'
import backBtn from '../../assets/backBtn.svg'
import axios from "axios";



export default function Join() {
  const nav = useNavigate()

  const [school,setSchool] = useState('')
  const [name, setName] = useState('')
  const [email,setEmail] = useState('')
  const [room_num,setRoom_num] = useState('')
  const [password,setPassword] = useState('')
  const [type,setType] = useState('')
  

  const hanleBackBtn = () => {
    nav(-1);
  }

  const handleJoinBtn = async() =>{
    const Joined = {school,name,email,room_num,password,type}
    try{
      const response = await axios.post('http://localhost:8080/user',Joined)
      if(response.status === 200)
        alert('회원가입 성공')
    }catch(err){
      alert('실패')
      console.log(err)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapHeader}>
        <img src={backBtn} className={styles.backBtn} onClick={hanleBackBtn} />
        <p className={styles.headerText}>회원가입</p>
      </div>
      <div className={styles.wrapContent}>
        <p className={styles.explanationText}>Create your Account</p>
        <div className={styles.wrapInput}>

          <p className={styles.p}>학교 이름</p>
          <input
            className={styles.school}
            placeholder='학교 이름'
          />

          <p className={styles.p}>이름</p>
          <input
            className={styles.name}
            placeholder='이름'
          />

          <p className={styles.p}>이메일</p>
          <input
            className={styles.email}
            placeholder='이메일'
          />

          <p className={styles.p}>호수</p>
          <input
            className={styles.roomNum}
            placeholder='예) 402'
          />

          <p className={styles.p}>비밀번호</p>
          <input
            className={styles.pw}
            placeholder='비밀번호'
            type='password'
          />
          <input
            className={styles.checkPw}
            placeholder='비밀번호 확인'
            type='password'
          />
        </div>
        <button className={styles.JoinBtn} onClick={handleJoinBtn}>가입하기</button>
      </div>  
    </div>
  )
}