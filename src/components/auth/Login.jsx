import React from "react";
import Logo from '../../assets/Logo.svg'
import styles from '../../css/auth/Login.module.css'


export default function Login() {

  return (
    <div className={styles.wrap}>
      <img src={Logo} className={styles.Logo} />
      <p className={styles.LogoText}>My Domitory</p>
      <div className={styles.wrapText}>
        <p className={styles.text}>Login your Account</p>
        <div className={styles.wrapInput}>
          <input
            className={styles.email}
            placeholder='Email'
          />

          <input
            className={styles.pw}
            placeholder='Password'
          />
        </div>

        <button className={styles.LoginBtn}>로그인</button>
        
      </div>
      <p className={styles.socalLoginText}>- on sign in with -</p>
    </div>
  )
}