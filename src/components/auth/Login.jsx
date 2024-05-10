import React from "react";
import { useNavigate } from "react-router";
import Logo from '../../assets/Logo.svg'
import styles from '../../css/auth/Login.module.css'
import socal from '../../assets/socal.svg'


export default function Login() {
  const navigate = useNavigate()

  const hanldeJoinUpText = () =>{
    navigate('/join')
  }

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
      <img src={socal} className={styles.socalImg} />
      <div className={styles.wrapSocal}>
        <p className={styles.AlreadyText}>Already have an Account?</p>
        <p className={styles.JoinUpTtext} onClick={hanldeJoinUpText}>Sign up</p>
      </div>
    </div>
  )
}