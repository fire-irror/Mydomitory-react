import React from "react";
import Logo from '../../assets/Logo.svg'
import styles from '../../css/auth/Select.module.css'
import { useNavigate } from "react-router";


export default function Select() {
  const navigate = useNavigate()

  const hanldeLogin = () =>{
    navigate('/login')
  }

  const hanldeJoin=()=>{
    navigate('/join')
  }
  return (
    <div className={styles.wrap}>
      <div className={styles.wrapLogo}>
        <img src={Logo} className={styles.Logo} />
        <p className={styles.LogoText}>My Domitory</p>
      </div>
      <div className={styles.wrapBtn}>
      <button className={styles.LoginBtn} onClick={hanldeLogin}>로그인</button>
      <button className={styles.JoinBtn} onClick={hanldeJoin}>회원가입</button>
      </div>
    </div>
  )
}