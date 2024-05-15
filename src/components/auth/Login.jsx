import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Logo from '../../assets/Logo.svg'
import styles from '../../css/auth/Login.module.css'
import socal from '../../assets/socal.svg'


export default function Login() {
  const navigate = useNavigate()
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")


  const hanldeClickLoginBtn = async()=>{
    const logged = {email,password}
    try{
      const response = await axios.post('http://localhost:8080/user/login',logged)
      if(response.status === 200){
        alert('로그인 성공')
        navigate('/main')
      }
    }catch(err){
      alert('로그인실패')
      console.log(err)
    }

  }
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className={styles.pw}
            placeholder='Password'
            type='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        <button className={styles.LoginBtn} onClick={hanldeClickLoginBtn}>로그인</button>

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